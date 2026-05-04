# Sprint 1: Núcleo Multi-Norma Y Agente SGSTA

## Objetivo

Tener una primera versión funcional donde una organización pueda crear su sistema NTC-ISO 21101, ver la matriz de requisitos, conversar con el agente para diagnosticar brechas y convertir esas brechas en acciones y evidencias.

## Alcance

### Base De Datos

- Aplicar `database/postgres/001_core_schema.sql`.
- Aplicar `database/postgres/002_seed_iso21101.sql`.
- Crear migraciones equivalentes cuando se elija framework.
- Validar relaciones, estados y permisos mínimos.

### Backend

- Autenticación.
- Organizaciones.
- Usuarios y roles.
- Normas y versiones.
- Sistemas de gestión.
- Requisitos normativos.
- Cumplimiento por requisito.
- Acciones.
- Evidencias.
- Registro de conversaciones y decisiones del agente.

### Agente

- Consultar requisitos de NTC-ISO 21101.
- Preguntar por estado actual de un requisito.
- Sugerir estado de cumplimiento.
- Crear acciones desde brechas.
- Recomendar evidencias esperadas.
- Registrar decisiones y recomendaciones.

### Frontend

- Login.
- Selector de organización y sistema de gestión.
- Dashboard básico.
- Matriz de cumplimiento.
- Vista de requisito.
- Chat del agente.
- Acciones abiertas.
- Evidencias por requisito.

## Criterios De Aceptación

- Se puede registrar una organización.
- Se puede crear un sistema de gestión NTC-ISO 21101.
- La matriz muestra numerales 4 a 10.
- El agente puede explicar qué pide un requisito.
- El agente puede sugerir una brecha y crear una acción.
- Una evidencia puede quedar asociada a un requisito.
- El dashboard muestra cumplimiento global, acciones abiertas y evidencias pendientes.

## Stack Recomendado

Opción recomendada:

- Backend: NestJS.
- Base de datos: PostgreSQL.
- ORM: Prisma.
- Frontend: Next.js.
- Agente: API interna con herramientas explícitas.

Opción rápida alternativa:

- Laravel.
- PostgreSQL.
- Filament o panel administrativo.
- Agente integrado por servicios internos.

## Orden De Construcción

1. Crear repositorio app con backend, frontend y base de datos.
2. Implementar migraciones PostgreSQL.
3. Implementar autenticación y organizaciones.
4. Implementar norma, requisitos y sistemas de gestión.
5. Implementar matriz de cumplimiento.
6. Implementar acciones y evidencias.
7. Implementar agente básico con herramientas `listar_requisitos`, `diagnosticar_requisito` y `crear_accion`.
8. Implementar dashboard inicial.

