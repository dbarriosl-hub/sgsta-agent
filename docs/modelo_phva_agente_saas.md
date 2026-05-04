# Modelo PHVA Para Agente SaaS De Sistemas De Gestion

## Proposito

Este modelo convierte la NTC-ISO 21101 en un sistema vivo basado en PHVA:

- **Planear:** contexto, partes interesadas, alcance, objetivos, riesgos, requisitos legales, seguros y necesidades de capacitacion.
- **Hacer:** actividades, procedimientos, personal, capacitacion, equipos, participantes externos, emergencias e incidentes.
- **Verificar:** seguimiento, indicadores, auditorias, evaluacion de competencias y revision por la direccion.
- **Actuar:** no conformidades, acciones correctivas, preventivas, mejoras, seguimiento y eficacia.

La base SQL funciona como memoria estructurada del agente. El agente usa esa memoria para proponer, llenar borradores, detectar brechas y crear acciones.

## Implementacion En Base De Datos

Migraciones agregadas:

- `database/postgres/003_phva_saas_model.sql`
- `database/postgres/004_seed_phva_forms.sql`

El modelo agrega mapeo PHVA, personal, competencias, capacitacion, equipos, inspecciones, mantenimientos, seguros, participantes con evidencia externa, incidentes, simulacros, acciones de gestion, seguimientos de eficacia y motor de formularios.

Tambien se amplian las revisiones por direccion con entradas y salidas especificas del numeral 9.3.

## Decisiones De Producto

- Participantes/clientes se manejan con evidencia externa enlazada, sin almacenar datos sensibles en el MVP.
- Seguros se gestionan por organizacion y actividad, no por cliente individual.
- Capacitacion es modulo central porque sostiene competencia, conciencia, emergencias y control operacional.
- Acciones correctivas, preventivas, tareas y mejoras viven en una entidad comun: `acciones_gestion`.
- La revision por la direccion recibe entradas preparadas por el agente, pero requiere aprobacion humana.

## Herramientas Del Agente

- `diagnosticar_requisito`
- `crear_accion_gestion`
- `detectar_necesidades_capacitacion`
- `programar_capacitacion`
- `verificar_capacitacion`
- `preparar_revision_direccion`
- `revisar_personal`
- `revisar_equipos`
- `revisar_polizas`
- `generar_formulario`
- `asociar_evidencia`

Regla central: el agente puede preparar y proponer, pero no aprobar documentos, cerrar acciones criticas ni declarar cumplimiento final sin una persona autorizada.

## Pruebas De Aceptacion Del Modelo

- Un requisito ISO se puede mapear a una etapa PHVA.
- Un riesgo alto puede generar una accion preventiva.
- Un incidente puede generar una accion correctiva y seguimiento de eficacia.
- Una persona sin competencia vigente genera brecha y accion.
- Una necesidad de capacitacion puede generar capacitacion, asistencia, evaluacion y certificado.
- Un equipo sin inspeccion o mantenimiento genera alerta.
- Una poliza vencida o pendiente genera accion.
- Un participante se registra mediante evidencia externa sin datos sensibles.
- Una revision por direccion resume auditorias, incidentes, acciones, capacitaciones, competencias, recursos y oportunidades.
- Un formulario queda asociado a modulo, requisito, respuesta y evidencia.
