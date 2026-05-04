CREATE TABLE IF NOT EXISTS backend_state_snapshots (
  key TEXT PRIMARY KEY,
  state JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_backend_state_snapshots_updated
  ON backend_state_snapshots(updated_at DESC);
