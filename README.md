# Sistema SGSTA ISO 21101

Proyecto para construir una plataforma SaaS agente-asistida para sistemas de gestion. El primer caso de uso es NTC-ISO 21101 para turismo de aventura.

## Insumos revisados

- `insumos/bdensql.sql`: modelo SQL inicial con 44 tablas.
- `insumos/documentacion_sistema_sgs_iso21101.xlsx`: diccionario funcional con hojas `Tablas` y `Campos`.
- `insumos/NTC-ISO-21101-2020-TURISMO-DE-AVENTURA-SISTEMAS-DE-GESTION-DE-SEGURIDAD-REQUISITOS.pdf`: norma base local para orientar modulos y trazabilidad.

## Documentos de trabajo

- `docs/plan_sistema_iso21101.md`: modulos, flujos, roles y arquitectura propuesta.
- `docs/auditoria_base_datos.md`: hallazgos del SQL y diferencias contra el Excel.
- `docs/modelo_phva_agente_saas.md`: modelo PHVA completo para el agente SaaS.
- `docs/vision_producto_saas.md`: posicionamiento del producto por suscripcion.
- `docs/postgresql_despliegue.md`: guia para crear la base PostgreSQL y aplicar migraciones.
- `docs/despliegue_nube.md`: guia para publicar la demo en Railway o Render.

## Enfoque del producto

La base SQL funciona como memoria estructurada del sistema, pero el producto final debe comportarse como un agente que ayuda a implementar, operar, monitorear y mantener sistemas de gestion.

Primero se trabaja con NTC-ISO 21101. Despues la arquitectura debe permitir escalar a otros sistemas de gestion: turismo, calidad, sostenibilidad, SST, ambiente u otros marcos normativos.

## MVP propuesto

Construir primero una plataforma agente-asistida multiempresa con:

1. Autenticacion y organizaciones.
2. Modelo normativo configurable por capitulos, numerales, requisitos, evidencias y tareas.
3. Agente SGSTA para diagnostico, implementacion guiada, revision documental y seguimiento.
4. Gestion documental y evidencias.
5. Riesgos, actividades, planes de emergencia e incidentes.
6. Personal, capacitacion, equipos, seguros y participantes con evidencia externa.
7. Auditoria interna, revision por direccion y acciones correctivas/preventivas/de mejora.
8. Tablero de avance del sistema de gestion con PHVA.

## Principio tecnico

La base de datos puede ser PostgreSQL, MySQL, SQL Server o SQLite durante prototipo. Para una version escalable y agente-asistida, la recomendacion inicial es PostgreSQL por su soporte relacional, JSONB, busqueda, extensiones y futura integracion con memoria semantica.

## PostgreSQL

El modelo SQL versionado esta en:

```text
database/postgres
```

Cuando PostgreSQL este instalado, las migraciones se aplican con:

```powershell
.\database\postgres\run_migrations.ps1 -DatabaseUrl "postgres://usuario:clave@localhost:5432/sgsta_agent"
```

## Ejecutar La App

```powershell
npm start
```

La app queda disponible en:

```text
http://localhost:8080
```

El healthcheck esta en:

```text
http://localhost:8080/health
```

## Preparado Para Nube

El proyecto incluye:

- `render.yaml` para Render.
- `railway.json` para Railway.
- `Procfile` para plataformas compatibles.
- `.env.example` con variables de entorno.

## Agente IA

El backend puede usar DeepSeek para diligenciar borradores de formularios. Si no hay clave configurada, el agente sigue funcionando con reglas locales.

Variables recomendadas en Railway:

```text
AI_PROVIDER=deepseek
DEEPSEEK_API_KEY=tu_clave
DEEPSEEK_MODEL=deepseek-v4-flash
DEEPSEEK_BASE_URL=https://api.deepseek.com
```

La IA solo genera borradores. La aprobacion de documentos, formularios y evidencias sigue siendo humana.
