# Despliegue PostgreSQL del MVP SGSTA Agent

Este documento explica como pasar del prototipo con guardado local en `backend/data/state.json` a una base PostgreSQL real.

## Objetivo

Usar PostgreSQL como memoria principal del SaaS:

- organizaciones/clientes,
- usuarios y roles,
- sistemas de gestion,
- requisitos normativos,
- formularios,
- evidencias,
- acciones de gestion,
- alertas,
- reportes,
- eventos auditables del agente.

## Requisitos Previos

1. Instalar PostgreSQL 16 o superior.
2. Tener disponible el comando `psql` en la terminal.
3. Crear una base de datos vacia para el proyecto.

Ejemplo:

```powershell
createdb sgsta_agent
```

Si `createdb` no esta disponible, se puede crear la base desde pgAdmin.

## Orden De Migraciones

Las migraciones estan en:

```text
database/postgres
```

Deben ejecutarse en orden numerico:

1. `001_core_schema.sql`
2. `002_seed_iso21101.sql`
3. `003_phva_saas_model.sql`
4. `004_seed_phva_forms.sql`
5. `005_form_table_matrix.sql`
6. `006_seed_all_catalog_forms.sql`
7. `007_form_coverage_views.sql`
8. `008_form_agent_drafts.sql`
9. `009_audit_events.sql`
10. `010_role_permissions.sql`
11. `011_subscription_plans.sql`
12. `012_seed_management_system_templates.sql`
13. `013_agent_reports.sql`
14. `014_report_export_view.sql`
15. `015_alert_rules.sql`
16. `016_follow_up_schedule.sql`
17. `017_audit_report_and_gap_packages.sql`

## Ejecucion Recomendada

Desde la raiz del proyecto:

```powershell
.\database\postgres\run_migrations.ps1 -DatabaseUrl "postgres://usuario:clave@localhost:5432/sgsta_agent"
```

Tambien se puede usar una variable de entorno:

```powershell
$env:DATABASE_URL="postgres://usuario:clave@localhost:5432/sgsta_agent"
.\database\postgres\run_migrations.ps1
```

## Validacion Rapida

Despues de ejecutar las migraciones:

```powershell
psql $env:DATABASE_URL -c "SELECT codigo, nombre FROM normas;"
psql $env:DATABASE_URL -c "SELECT COUNT(*) FROM requisitos_normativos;"
psql $env:DATABASE_URL -c "SELECT * FROM vw_auditoria_requisitos LIMIT 5;"
```

La vista `vw_auditoria_requisitos` es clave porque resume el estado de auditoria requisito por requisito.

## Conexion Futura Del Backend

El backend actual sigue guardando en:

```text
backend/data/state.json
```

El siguiente paso tecnico es agregar un adaptador PostgreSQL para que los endpoints actuales usen tablas reales:

- `/api/state`
- `/api/actions`
- `/api/evidence`
- `/api/forms/responses`
- `/api/reports/audit`
- herramientas del agente

La transicion recomendada es gradual: primero lectura de catalogos y reportes desde PostgreSQL, luego escritura de formularios, acciones y evidencias.

## Modo PostgreSQL Del Backend Actual

Como paso intermedio, el backend puede guardar el estado completo del MVP en PostgreSQL usando `backend_state_snapshots`.

1. Instalar dependencias:

```powershell
npm install
```

2. Aplicar migraciones:

```powershell
$env:DATABASE_URL="postgres://usuario:clave@localhost:5432/sgsta_agent"
.\database\postgres\run_migrations.ps1
```

3. Ejecutar backend con PostgreSQL:

```powershell
$env:STORAGE_DRIVER="postgres"
node backend/server.js
```

4. Confirmar:

```powershell
Invoke-RestMethod -Uri http://localhost:8080/health
```

Debe responder con:

```json
{
  "storage": "postgres"
}
```

Este modo no sustituye el modelo relacional completo. Sirve como puente para dejar de depender de `state.json` mientras se migra endpoint por endpoint a tablas normalizadas.
