# Despliegue En La Nube

Esta guia deja el MVP SGSTA Agent listo para publicarse como demo SaaS.

## Estado Actual

La app ya tiene:

- `npm start` para iniciar el backend,
- `/health` como healthcheck,
- `HOST=0.0.0.0` para recibir trafico externo,
- `STORAGE_DRIVER=file` para prototipo local,
- `STORAGE_DRIVER=postgres` para usar PostgreSQL,
- `render.yaml` para Render,
- `railway.json` para Railway,
- `Procfile` como compatibilidad general.

## Variables De Entorno

Minimas:

```text
HOST=0.0.0.0
STORAGE_DRIVER=postgres
DATABASE_URL=postgres://...
STATE_KEY=production
```

La variable `PORT` normalmente la pone la plataforma.

## Opcion Recomendada Para Demo Rapida: Railway

1. Subir el proyecto a GitHub.
2. Crear proyecto en Railway.
3. Agregar un servicio desde el repositorio.
4. Agregar PostgreSQL al proyecto.
5. Configurar variables:

```text
STORAGE_DRIVER=postgres
STATE_KEY=production
```

Railway entrega `DATABASE_URL` automaticamente al servicio si se conecta la base PostgreSQL.

6. Ejecutar migraciones contra la base:

```powershell
$env:DATABASE_URL="postgres://..."
.\database\postgres\run_migrations.ps1
```

7. Verificar:

```text
https://TU-APP.railway.app/health
```

Debe mostrar:

```json
{
  "storage": "postgres"
}
```

## Opcion Recomendada Para Produccion Inicial: Render

Render permite crear el Web Service y la base PostgreSQL con `render.yaml`.

1. Subir el proyecto a GitHub.
2. En Render, crear Blueprint desde el repositorio.
3. Render lee `render.yaml`.
4. Crea:
   - web service `sgsta-agent`,
   - base `sgsta-agent-db`.
5. Aplicar migraciones usando la connection string de Render.

Render requiere que la app escuche en `0.0.0.0`; el backend ya esta ajustado.

## Orden Recomendado Del Proyecto

1. Demo local estable.
2. GitHub.
3. Railway o Render con PostgreSQL.
4. Migraciones.
5. Activar `STORAGE_DRIVER=postgres`.
6. Probar formularios, acciones, evidencias y reportes.
7. Luego migrar endpoints desde `backend_state_snapshots` hacia tablas normalizadas.

## Nota Importante

El modo PostgreSQL actual guarda el estado del MVP en `backend_state_snapshots`. Es un puente seguro para publicar demo rapido.

El objetivo posterior es que cada modulo use tablas normalizadas:

- `formularios_respuesta`,
- `acciones_gestion`,
- `evidencias`,
- `alertas_sistema`,
- `reportes_agente`,
- `paquetes_cierre_requisito`.
