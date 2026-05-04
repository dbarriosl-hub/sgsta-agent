# Migraciones PostgreSQL

Esta carpeta contiene el modelo SQL del SaaS SGSTA Agent.

## Como Ejecutar

Con PostgreSQL instalado y una base creada:

```powershell
$env:DATABASE_URL="postgres://usuario:clave@localhost:5432/sgsta_agent"
.\database\postgres\run_migrations.ps1
```

O pasando la URL directamente:

```powershell
.\database\postgres\run_migrations.ps1 -DatabaseUrl "postgres://usuario:clave@localhost:5432/sgsta_agent"
```

## Que Contiene

- `001_core_schema.sql`: base multiempresa, usuarios, normas, requisitos, documentos, evidencias, riesgos, acciones, auditorias y agente.
- `002_seed_iso21101.sql`: semilla inicial ISO 21101.
- `003_phva_saas_model.sql`: modelo PHVA ampliado: personal, capacitacion, equipos, seguros, participantes, incidentes, revision direccion, formularios y acciones de gestion.
- `004` a `006`: catalogo de formularios desde las hojas Tablas/Campos.
- `007` a `010`: cobertura de formularios, borradores del agente, eventos auditables y permisos.
- `011` a `012`: planes de suscripcion y plantillas multi-sistema.
- `013` a `017`: reportes, exportaciones, alertas, agenda, paquetes de cierre y auditoria por requisito.
- `018`: tabla puente `backend_state_snapshots` para que el backend pueda guardar el estado completo del MVP en PostgreSQL mientras se migra a tablas normalizadas.

## Vista Clave

`vw_auditoria_requisitos` resume por requisito:

- formularios aprobados, borradores y pendientes,
- evidencias registradas y sugeridas,
- acciones abiertas,
- porcentaje de completitud,
- lectura del agente.

Esta vista alimenta el reporte de auditoria del MVP.
