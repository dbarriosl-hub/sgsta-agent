# API Backend MVP

## Objetivo

Crear una primera API para que el agente deje de depender solo de `localStorage` y empiece a operar contra servicios reales.

## Recursos principales

- Organizaciones.
- Requisitos normativos.
- Catalogo de formularios.
- Matriz formulario-tabla-requisito.
- Respuestas de formularios.
- Acciones de gestion.
- Evidencias.
- Alertas.
- Agenda.
- Reportes.
- Bitacora auditable.

## Flujo minimo

1. El frontend consulta `GET /api/forms/catalog`.
2. El agente crea una respuesta con `POST /api/forms/responses`.
3. El usuario aprueba o revisa en frontend.
4. El agente crea acciones con `POST /api/actions`.
5. La evidencia se registra con `POST /api/evidence`.
6. El monitor consulta `GET /api/alerts` y `GET /api/agenda`.
7. Direccion consulta `GET /api/reports/executive`.

## Siguiente paso

Reemplazar la memoria temporal del servidor por PostgreSQL:

- `formularios_definicion`
- `formularios_respuesta`
- `acciones_gestion`
- `evidencias`
- `alertas_sistema`
- `agenda_seguimiento_sistema`
- `reportes_agente`
- `eventos_auditoria_sistema`
