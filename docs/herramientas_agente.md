# Herramientas Del Agente

El agente debe actuar con herramientas explicitas y auditables. No debe modificar datos criticos de forma invisible ni aprobar documentos por su cuenta.

## Reglas De Seguridad

- Toda accion se ejecuta dentro de una organizacion.
- Toda consulta respeta el rol del usuario.
- El agente puede proponer, redactar, preparar borradores y crear acciones.
- La aprobacion formal de documentos, auditorias, cierres, cumplimiento y revision por direccion requiere usuario autorizado.
- Cada accion relevante del agente queda registrada en `agente_decisiones`.

## Herramientas Iniciales

### `listar_requisitos`

Consulta requisitos de una norma o sistema de gestion.

Salida: requisitos, etapa PHVA, estado de cumplimiento, evidencias asociadas y acciones abiertas.

### `diagnosticar_requisito`

Evalua un requisito usando respuestas del usuario y evidencias disponibles.

Restriccion: el estado sugerido queda como recomendacion hasta aprobacion humana si cambia a `cumple` o `no_aplica`.

### `crear_accion_gestion`

Crea una tarea, accion correctiva, preventiva o de mejora en `acciones_gestion`.

Entradas minimas: organizacion, sistema, requisito, tipo, origen, titulo, descripcion, accion propuesta, responsable y fecha limite.

### `detectar_necesidades_capacitacion`

Cruza cargos, personas, actividades, riesgos y competencias minimas para proponer necesidades de capacitacion.

Salida: tema sugerido, origen, prioridad, personas/cargos afectados y accion preventiva sugerida.

### `programar_capacitacion`

Propone capacitaciones a partir de necesidades abiertas.

Salida: tema, objetivo, asistentes, instructor sugerido, fecha tentativa y evidencias requeridas.

### `verificar_capacitacion`

Revisa asistencia, evaluacion, certificados, vencimientos y evidencias.

Salida: personas aprobadas, brechas, certificados por vencer y acciones sugeridas.

### `revisar_personal`

Detecta personal sin competencia, certificados vencidos, compromisos faltantes o actividades sin lider competente.

### `revisar_equipos`

Detecta equipos sin inspeccion, sin mantenimiento, no operativos, vencidos o sin evidencia.

### `revisar_polizas`

Detecta polizas vencidas, por vencer o actividades sin cobertura.

### `generar_formulario`

Crea o llena borradores desde `formularios_definicion` y `formularios_respuesta`.

Formularios iniciales: personal, evaluacion de competencia, necesidad de capacitacion, asistencia, evaluacion de capacitacion, inspeccion de equipos, mantenimiento, accion de mejora, incidente, simulacro, poliza, participantes y revision por direccion.

### `preparar_auditoria`

Construye lista de verificacion y paquete de evidencias para auditoria interna.

### `preparar_revision_direccion`

Prepara entradas del numeral 9.3: acciones previas, cambios de contexto, mediciones, auditorias, incidentes, acciones, capacitaciones, competencias, seguros, equipos, recursos y oportunidades de mejora.

### `asociar_evidencia`

Vincula documentos, enlaces o archivos a requisitos, formularios, acciones, equipos, capacitaciones, polizas o participantes externos.

### `monitor_sistema`

Detecta temas que requieren atencion: acciones vencidas, documentos sin aprobar, requisitos sin evidencia, riesgos altos sin tratamiento, indicadores sin medicion, capacitaciones vencidas, equipos criticos, polizas vencidas y participantes sin evidencia externa.

## Permisos Por Rol

| Herramienta | admin_org | responsable_sg | lider_actividad | auditor | consulta |
|---|---:|---:|---:|---:|---:|
| `listar_requisitos` | Si | Si | Si | Si | Si |
| `diagnosticar_requisito` | Si | Si | Parcial | Si | No |
| `crear_accion_gestion` | Si | Si | Si | Si | No |
| `detectar_necesidades_capacitacion` | Si | Si | Si | Si | No |
| `programar_capacitacion` | Si | Si | Parcial | No | No |
| `verificar_capacitacion` | Si | Si | Parcial | Si | No |
| `revisar_personal` | Si | Si | Si | Si | Si |
| `revisar_equipos` | Si | Si | Si | Si | Si |
| `revisar_polizas` | Si | Si | No | Si | Si |
| `generar_formulario` | Si | Si | Parcial | No | No |
| `preparar_auditoria` | Si | Si | No | Si | No |
| `preparar_revision_direccion` | Si | Si | No | Si | No |
| `asociar_evidencia` | Si | Si | Si | Si | No |
| `monitor_sistema` | Si | Si | Si | Si | Si |
