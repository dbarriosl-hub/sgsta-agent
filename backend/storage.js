const fs = require("fs");
const path = require("path");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createFileStorage({ dataFile, defaultState, mergeState }) {
  function ensureDataDir() {
    const dataDir = path.dirname(dataFile);
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  }

  return {
    name: "file",
    async load() {
      ensureDataDir();
      if (!fs.existsSync(dataFile)) {
        const initialState = clone(defaultState);
        fs.writeFileSync(dataFile, JSON.stringify(initialState, null, 2), "utf8");
        return initialState;
      }
      return mergeState(JSON.parse(fs.readFileSync(dataFile, "utf8")));
    },
    async save(state) {
      ensureDataDir();
      fs.writeFileSync(dataFile, JSON.stringify(state, null, 2), "utf8");
    }
  };
}

function createPostgresStorage({ databaseUrl, defaultState, mergeState, stateKey = "default" }) {
  let Pool;
  try {
    ({ Pool } = require("pg"));
  } catch {
    throw new Error("STORAGE_DRIVER=postgres requiere instalar la dependencia 'pg'. Ejecuta npm install.");
  }

  const pool = new Pool({
    connectionString: databaseUrl,
    connectionTimeoutMillis: 10000,
    idleTimeoutMillis: 30000
  });

  async function ensureTable() {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS backend_state_snapshots (
        key TEXT PRIMARY KEY,
        state JSONB NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `);
  }

  return {
    name: "postgres",
    async load() {
      await ensureTable();
      const result = await pool.query("SELECT state FROM backend_state_snapshots WHERE key = $1", [stateKey]);
      if (!result.rows.length) {
        const initialState = clone(defaultState);
        await this.save(initialState);
        return initialState;
      }
      return mergeState(result.rows[0].state);
    },
    async save(state) {
      await ensureTable();
      await pool.query(
        `INSERT INTO backend_state_snapshots (key, state, updated_at)
         VALUES ($1, $2::jsonb, now())
         ON CONFLICT (key)
         DO UPDATE SET state = EXCLUDED.state, updated_at = now()`,
        [stateKey, JSON.stringify(state)]
      );
    },
    async close() {
      await pool.end();
    }
  };
}

function createStorage({ defaultState, mergeState, dataFile }) {
  const driver = process.env.STORAGE_DRIVER || (process.env.DATABASE_URL ? "postgres" : "file");
  if (driver === "postgres") {
    if (!process.env.DATABASE_URL) throw new Error("STORAGE_DRIVER=postgres requiere DATABASE_URL.");
    return createPostgresStorage({
      databaseUrl: process.env.DATABASE_URL,
      defaultState,
      mergeState,
      stateKey: process.env.STATE_KEY || "default"
    });
  }
  return createFileStorage({ dataFile, defaultState, mergeState });
}

module.exports = { createStorage };
