# Arquitectura Del Agente Para Sistemas De Gestión

## Idea Central

El sistema debe funcionar como una plataforma donde cada organización implementa uno o varios sistemas de gestión. La norma es configurable y el agente usa esa configuración para guiar, operar y mantener el sistema.

NTC-ISO 21101 será el primer caso de uso, pero no debe quedar codificada de forma rígida en tablas, pantallas o prompts.

## Capas

### 1. Capa Normativa

Define el marco que se va a implementar.

- Norma o modelo.
- Versión.
- Capítulos.
- Numerales.
- Requisitos.
- Evidencias esperadas.
- Documentos mínimos.
- Preguntas de diagnóstico.
- Criterios de cumplimiento.

Ejemplos futuros:

- NTC-ISO 21101: turismo de aventura.
- ISO 9001: calidad.
- Sistemas de gestión turística.
- Sistemas de sostenibilidad.

### 2. Capa Organizacional

Define quién implementa el sistema.

- Organización.
- Sedes.
- Usuarios.
- Roles.
- Personas.
- Cargos.
- Actividades o servicios.
- Proveedores o partes interesadas.

### 3. Capa De Implementación

Representa el sistema de gestión concreto de una organización.

- Sistema de gestión.
- Alcance.
- Estado de cumplimiento por requisito.
- Riesgos.
- Objetivos.
- Documentos.
- Evidencias.
- Indicadores.
- Auditorías.
- Revisiones.
- Acciones de mejora.

### 4. Capa Del Agente

El agente no debe ser solo un chat. Debe tener herramientas para actuar sobre el sistema con permisos controlados.

Herramientas mínimas:

- Consultar requisitos aplicables.
- Consultar estado de cumplimiento.
- Crear tareas y acciones.
- Asociar evidencias.
- Generar borradores documentales.
- Revisar documentos contra requisitos.
- Preparar auditorías.
- Crear resumen para revisión por dirección.
- Detectar vencimientos y brechas.

### 5. Capa Documental

Centraliza documentos y evidencias.

- Documento controlado.
- Versión.
- Estado: borrador, revisión, aprobado, obsoleto.
- Responsable.
- Requisitos asociados.
- Evidencias adjuntas.
- Historial de cambios.

## Modelo De Datos Recomendado

Tablas nucleares para escalar:

- `normas`
- `norma_versiones`
- `requisitos_normativos`
- `evidencias_requeridas`
- `organizaciones`
- `usuarios`
- `roles`
- `sistemas_gestion`
- `cumplimiento_requisitos`
- `documentos`
- `documento_versiones`
- `evidencias`
- `actividades_servicios`
- `riesgos`
- `controles`
- `acciones`
- `auditorias`
- `revision_direccion`
- `agente_conversaciones`
- `agente_decisiones`

## Comportamientos Del Agente

### Diagnosticar

El agente pregunta por contexto, actividades, riesgos, documentos y prácticas actuales. Luego clasifica cada requisito como cumple, parcial, no cumple, no aplica o pendiente.

### Implementar

El agente convierte brechas en tareas, propone responsables, fechas y documentos. Puede generar borradores, pero la aprobación queda en manos del usuario responsable.

### Mantener

El agente revisa vencimientos, documentos sin aprobar, acciones vencidas, riesgos sin control, indicadores sin medición e incidentes sin cierre.

### Auditar

El agente prepara listas de verificación, selecciona evidencias por requisito y ayuda a redactar hallazgos. No reemplaza al auditor; organiza y acelera el trabajo.

### Escalar

Cuando se agregue una nueva norma, el agente debe cargar otro catálogo normativo y operar con las mismas entidades generales: requisitos, evidencias, acciones, documentos, riesgos e indicadores.

## Decisiones Recomendadas

- Usar PostgreSQL como base principal.
- Mantener los requisitos normativos configurables.
- No crear una tabla rígida por cada numeral si el requisito puede modelarse de forma genérica.
- Usar formularios dinámicos para datos específicos de cada norma.
- Separar documentos de evidencias.
- Registrar las decisiones del agente para trazabilidad.
- Exigir aprobación humana antes de cambiar estados críticos o aprobar documentos.

