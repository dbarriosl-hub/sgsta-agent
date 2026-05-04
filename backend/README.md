# Backend MVP SGSTA Agent

Servidor API minimo sin dependencias externas. Sirve para empezar a convertir el prototipo estatico en producto con backend.

## Ejecutar

```powershell
node backend/server.js
```

Por defecto escucha en:

```text
http://localhost:8080
```

Por defecto usa guardado local en archivo. El `GET /health` indica el modo activo:

```json
{
  "ok": true,
  "service": "sgsta-agent-api",
  "storage": "file"
}
```

La app visual se abre desde el mismo backend:

```text
http://localhost:8080
```

Tambien se puede abrir con:

```text
http://localhost:8080/app/
```

## Endpoints iniciales

- `GET /health`
- `GET /api/state`
- `POST /api/state`
- `PUT /api/state`
- `POST /api/state/reset`
- `GET /api/organizations`
- `GET /api/requirements`
- `GET /api/forms/catalog`
- `GET /api/forms/matrix`
- `GET /api/forms/responses`
- `POST /api/forms/responses`
- `GET /api/actions`
- `POST /api/actions`
- `GET /api/evidence`
- `POST /api/evidence`
- `GET /api/alerts`
- `GET /api/agenda`
- `GET /api/reports/executive`
- `GET /api/reports/audit`
- `GET /api/audit-events`
- `POST /api/agent/monitor`
- `POST /api/agent/actions`
- `POST /api/agent/forms/draft`
- `POST /api/agent/requirements/close-gap`
- `POST /api/agent/requirements/close-critical`
- `POST /api/forms/workflow`

## Guardado local

Antes el backend guardaba los datos solo en memoria. Eso significaba que las acciones, evidencias y formularios se perdian al cerrar el servidor.

Ahora el servidor guarda automaticamente el estado en:

```text
backend/data/state.json
```

Para probarlo:

```powershell
Invoke-RestMethod -Uri http://localhost:8080/api/actions -Method Post -ContentType "application/json" -Body '{"title":"Probar guardado local","code":"4.4"}'
Get-Content backend\data\state.json
```

Si se reinicia el servidor, vuelve a cargar ese archivo.

La interfaz web tambien queda conectada a `POST /api/state`: cuando el backend esta abierto, los cambios se sincronizan al archivo local. Si el backend no esta abierto, la pantalla sigue funcionando en modo local del navegador.

## Guardado PostgreSQL

El backend ya tiene una capa de almacenamiento con dos modos:

- `file`: guarda en `backend/data/state.json`.
- `postgres`: guarda el estado del MVP en `backend_state_snapshots`.

Para activar PostgreSQL:

```powershell
npm install
$env:DATABASE_URL="postgres://usuario:clave@localhost:5432/sgsta_agent"
$env:STORAGE_DRIVER="postgres"
node backend/server.js
```

Antes de usar `postgres`, aplica las migraciones:

```powershell
.\database\postgres\run_migrations.ps1
```

## Agente

`POST /api/agent/monitor` ejecuta el primer motor auditable del agente en backend. Revisa riesgos, personal, capacitacion, equipos, seguros, participantes, documentos, formularios y revision por la direccion. Devuelve brechas priorizadas y las guarda en el estado local.

`POST /api/agent/actions` convierte una brecha detectada en una accion de gestion abierta, conserva el origen, requisito, prioridad y causa, y registra el evento en la bitacora auditable.

`POST /api/agent/forms/draft` genera borradores de formularios desde backend. Puede recibir `table` para un formulario especifico o `requirement` para todos los formularios asociados a un requisito. Los borradores quedan pendientes de aprobacion humana.

`POST /api/agent/requirements/close-gap` prepara un paquete de cierre para un requisito: genera/actualiza borradores, crea una accion especifica y sugiere evidencia si no existe soporte.

`POST /api/agent/requirements/close-critical` prepara paquetes de cierre para los requisitos con menor avance. Sirve para que el agente priorice varias brechas a la vez sin duplicar acciones abiertas.

`POST /api/forms/workflow` cambia un formulario a revision o aprobado. La aprobacion solo se permite para roles `direccion` o `admin`; otros roles quedan bloqueados y el intento se registra en la bitacora.

Cuando un formulario queda `aprobado`, el backend crea o actualiza automaticamente una evidencia registrada asociada al requisito. Asi el porcentaje de completitud puede usar formularios aprobados como evidencia real del sistema.

El catalogo operativo excluye tablas internas de plataforma como `organizaciones`, porque no son evidencia propia del SGSTA ISO 21101.

`GET /api/reports/audit` entrega el reporte de auditoria por requisito: 24 requisitos, formularios, evidencias, acciones abiertas, porcentaje y lectura del agente.

## Siguiente paso tecnico

Este guardado local sirve para el MVP y para que no se pierda el trabajo durante el prototipo. El modelo PostgreSQL ya queda preparado en `database/postgres`, incluida la migracion `017_audit_report_and_gap_packages.sql` para paquetes de cierre, auditoria por requisito y vencimientos.
