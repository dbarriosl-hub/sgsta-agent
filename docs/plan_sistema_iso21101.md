# Plan Del Sistema Agente Para SGSTA ISO 21101

## Objetivo

Construir una plataforma agente-asistida para que empresas de turismo de aventura implementen, operen, mantengan y mejoren su Sistema de Gestión de Seguridad de Turismo de Aventura.

La base SQL no debe verse como el producto final, sino como la memoria estructurada del agente: requisitos, evidencias, actividades, responsables, riesgos, auditorías, acciones y decisiones. Encima de esa memoria debe existir un agente capaz de guiar, preguntar, completar borradores, detectar brechas, programar acciones, revisar evidencias y mantener el sistema actualizado.

El diseño debe permitir escalar después a otros sistemas de gestión, por ejemplo turismo, calidad, sostenibilidad, SST, ambiente u otros modelos normativos.

## Concepto Del Agente

El agente debe actuar como un coordinador del sistema de gestión:

- Diagnostica el estado de cumplimiento.
- Explica qué falta y por qué importa.
- Solicita información a la organización.
- Genera borradores de políticas, procedimientos, matrices y planes.
- Relaciona evidencias con requisitos normativos.
- Detecta documentos vencidos, acciones sin cerrar, riesgos sin tratamiento e indicadores sin medición.
- Propone tareas, responsables y fechas.
- Prepara auditorías internas y revisión por dirección.
- Mantiene trazabilidad de cambios y decisiones.

## Base De Datos Como Memoria

La base puede ser PostgreSQL, MySQL, SQL Server o SQLite para prototipo. La recomendación para producto escalable es PostgreSQL.

Motivos:

- Buen soporte relacional para trazabilidad normativa.
- `JSONB` para formularios variables por norma o sector.
- Búsqueda de texto para documentos y evidencias.
- Posible integración futura con embeddings y memoria semántica.
- Migraciones limpias entre módulos y sistemas de gestión.

## Modelo General Multi-Norma

Para no limitar el sistema a ISO 21101, se recomienda separar:

- `normas`: ISO 21101, ISO 9001, normas sectoriales de turismo, etc.
- `requisitos_normativos`: capítulos, numerales, requisitos y criterios.
- `sistemas_gestion`: implementación de una norma por organización.
- `evidencias`: archivos, registros, documentos, actas, fotos y enlaces.
- `evaluaciones_cumplimiento`: estado de cada requisito.
- `acciones`: tareas, acciones correctivas, preventivas o de mejora.
- `agente_interacciones`: preguntas, respuestas, decisiones y trazabilidad del agente.

## Módulos Del MVP

### 1. Administración

- Organizaciones.
- Usuarios.
- Roles y permisos.
- Personas, cargos y competencias.
- Actividades de turismo de aventura.

### 2. Modelo Normativo

- Catálogo de normas.
- Capítulos, numerales y requisitos.
- Reglas de evidencia esperada.
- Formularios dinámicos por requisito.
- Relación entre documentos mínimos y numerales.

### 3. Diagnóstico ISO 21101

- Matriz de cumplimiento por numeral.
- Conversación guiada de diagnóstico.
- Recomendaciones generadas por el agente.
- Evidencias asociadas.
- Estado por requisito: pendiente, en proceso, cumple, no cumple, no aplica.
- Próxima acción, responsable y fecha de vencimiento.

### 4. Contexto Y Liderazgo

- Contexto interno y externo.
- Partes interesadas.
- Alcance del SGSTA.
- Política de seguridad.
- Roles, responsabilidades y autoridades.
- Compromisos de liderazgo y del personal.

### 5. Planificación Y Riesgos

- Mapa de riesgos por actividad.
- Probabilidad, impacto y nivel de riesgo.
- Controles existentes y controles propuestos.
- Normograma y requisitos legales.
- Objetivos de seguridad y planes para lograrlos.

### 6. Apoyo

- Recursos y equipos.
- Competencias mínimas por cargo.
- Verificación de competencias.
- Plan de comunicaciones.
- Documentos controlados y plantillas.

### 7. Operación

- Procedimientos del SGS.
- Procedimientos por servicio o actividad.
- Planificación y control operacional.
- Bitácora de actividades.
- Registro de participantes y evidencias.
- Planes de emergencia.
- Simulacros y evidencias.
- Gestión de incidentes.

### 8. Evaluación Del Desempeño

- Seguimiento y medición.
- Programa de auditorías.
- Plan de auditoría.
- Informe de auditoría.
- Hallazgos y detalle de auditoría.
- Revisión por dirección.

### 9. Mejora

- No conformidades.
- Acciones correctivas.
- Seguimiento de acciones.
- Verificación de eficacia.
- Mejora continua.

### 10. Agente SGSTA

- Chat contextual por organización.
- Diagnóstico guiado.
- Generación de documentos borrador.
- Revisión de evidencias.
- Detección de tareas vencidas.
- Recomendación de próximas acciones.
- Preparación de auditorías internas.
- Generación de resumen para revisión por dirección.

## Flujo Principal

1. Registrar organización y usuarios.
2. Crear un sistema de gestión para la organización, inicialmente NTC-ISO 21101.
3. Cargar diagnóstico inicial contra numerales ISO 21101.
4. El agente entrevista al responsable y detecta brechas.
5. Crear o asociar documentos mínimos y evidencias.
6. Identificar riesgos por actividad.
7. Definir controles, procedimientos, planes de emergencia y comunicaciones.
8. Ejecutar operación: bitácoras, incidentes, simulacros y seguimiento.
9. Evaluar: indicadores, auditorías y revisión por dirección.
10. Mejorar: acciones correctivas, responsables, fechas y eficacia.

## Arquitectura Propuesta

### Producto

- Aplicación web para gestión y trazabilidad.
- Agente conversacional como capa de implementación y mantenimiento.
- Motor normativo configurable.
- Repositorio documental y evidencias.
- Tableros ejecutivos.

### Backend

Recomendación: API modular con NestJS o Laravel.

Para el enfoque agente y multi-norma, NestJS + PostgreSQL es una buena base porque separa bien dominios, servicios, workers, colas e integraciones. Laravel sigue siendo viable si se prioriza velocidad administrativa.

### Base De Datos

Recomendación: PostgreSQL.

La estructura existente en MySQL sirve como insumo conceptual. No conviene trasladarla tal cual sin antes normalizarla hacia un modelo multi-norma.

### Motor Agente

Componentes sugeridos:

- Orquestador de conversaciones.
- Herramientas del agente para consultar y actualizar la base.
- Generador de documentos y registros.
- Evaluador de cumplimiento.
- Planificador de tareas.
- Memoria de decisiones y evidencias.
- Control de permisos: el agente solo puede actuar dentro de la organización y rol autorizado.

## Pantallas Iniciales

- Inicio de sesión.
- Dashboard del sistema de gestión.
- Chat del agente SGSTA.
- Organizaciones.
- Usuarios y roles.
- Actividades.
- Matriz de cumplimiento por numeral.
- Documentos controlados.
- Mapa de riesgos.
- Planes de emergencia.
- Incidentes.
- Auditorías.
- Acciones correctivas.

## Indicadores Del Dashboard

- Porcentaje de cumplimiento global.
- Cumplimiento por capítulo ISO.
- Riesgos abiertos por nivel.
- Acciones vencidas.
- Documentos pendientes de aprobación.
- Incidentes del periodo.
- Simulacros programados y ejecutados.
- Auditorías pendientes.

## Primer Sprint Recomendado

1. Diseñar modelo multi-norma en PostgreSQL.
2. Migrar lo útil del SQL actual como insumo, no como camisa de fuerza.
3. Crear autenticación, organización, usuarios y sistemas de gestión.
4. Crear catálogo NTC-ISO 21101 con capítulos y numerales.
5. Crear matriz de diagnóstico por requisitos.
6. Crear agente básico de diagnóstico que consulte requisitos, haga preguntas y genere tareas.
7. Crear documentos controlados con carga de evidencias.
8. Crear mapa de riesgos básico por actividad.
