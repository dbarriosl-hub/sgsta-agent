# Auditoría Inicial De Base De Datos

Fecha de revisión: 2026-05-01.

## Resumen

El archivo `bdensql.sql` define el esquema `sgs_iso21101` con 44 tablas y no contiene datos semilla. La estructura ya cubre buena parte del ciclo de gestión de seguridad: contexto, liderazgo, planificación, apoyo, operación, evaluación del desempeño y mejora.

## Tablas Detectadas

- `acciones_sugeridas`
- `organizaciones`
- `usuarios`
- `actividades`
- `personas`
- `bitacora_actividades`
- `capitulos_iso`
- `cargos`
- `competencias_minimas`
- `cargos_competencias`
- `compromiso_personal`
- `contexto_actividades`
- `contexto_interno_externo`
- `documentacion_minima`
- `documentos_controlados`
- `equipos`
- `impacto_riesgo`
- `programa_auditorias`
- `plan_auditoria`
- `informe_auditoria`
- `informe_auditoria_detalle`
- `mapa_riesgos`
- `normograma`
- `politica_sgs`
- `objetivos_sgs`
- `plan_comunicaciones`
- `plan_emergencia`
- `plan_objetivos_sgs`
- `plantillas_documentos`
- `politica_datos_personales`
- `politica_seguridad`
- `probabilidad_riesgo`
- `procedimientos_sgs`
- `procedimientos_obligatorios`
- `procedimientos_implementados`
- `procedimientos_servicio`
- `referencia_norma_iso21101`
- `registro_comunicaciones_seguridad`
- `registro_incidentes`
- `registro_participantes_evidencia`
- `roles_responsabilidades`
- `seguimiento_medicion`
- `simulacros`
- `simulacro_evidencias`

## Diferencias Contra El Excel

Tablas documentadas en el Excel que no existen en el SQL:

- `acciones_correctivas`
- `compromiso_liderazgo`
- `revision_direccion`
- `seguimiento_acciones_correctivas`

Tablas existentes en SQL que no aparecen documentadas en el Excel:

- `actividades`
- `cargos_competencias`

## Riesgos Técnicos

- Falta una tabla formal de acciones correctivas y no conformidades. La norma requiere seguimiento de no conformidad, corrección, acción correctiva y mejora.
- Falta una tabla formal de revisión por dirección, aunque está documentada en el Excel.
- Hay una posible duplicidad conceptual entre `actividades` y `contexto_actividades`.
- `acciones_sugeridas` tiene `id_incidente`, pero no se observa llave foránea hacia `registro_incidentes`.
- Muchos campos de archivo son `VARCHAR(255)`. Conviene normalizar evidencias en una tabla común para soportar múltiples archivos, metadatos, versiones y trazabilidad.
- Los roles de usuario están como texto libre en `usuarios.rol`. Para permisos reales conviene usar catálogo de roles y permisos.
- No hay datos semilla para numerales ISO, documentación mínima, probabilidad, impacto, procedimientos obligatorios o cargos base.

## Ajustes Recomendados

1. Crear `acciones_correctivas` con vínculo a incidentes, auditorías, no conformidades y revisión por dirección.
2. Crear `revision_direccion` para registrar entradas, decisiones, oportunidades de mejora y compromisos.
3. Unificar o diferenciar claramente `actividades` y `contexto_actividades`.
4. Agregar `evidencias` como tabla transversal.
5. Agregar `estado`, `responsable`, `fecha_vencimiento`, `fecha_cierre` y `eficacia` a las acciones de mejora.
6. Sembrar catálogos base desde la norma: capítulos, numerales, documentación mínima, probabilidad, impacto y roles.

