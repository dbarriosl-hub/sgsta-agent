WITH version AS (
  SELECT nv.id
  FROM norma_versiones nv
  JOIN normas n ON n.id = nv.norma_id
  WHERE n.codigo = 'NTC-ISO-21101' AND nv.version = '2020'
),
req AS (
  SELECT r.id, r.codigo
  FROM requisitos_normativos r
  JOIN version v ON v.id = r.norma_version_id
),
phva AS (
  SELECT *
  FROM (VALUES
    ('4', 'planear', 'Contexto, alcance y sistema base.'),
    ('4.1', 'planear', 'Define cuestiones internas y externas.'),
    ('4.2', 'planear', 'Define partes interesadas y requisitos.'),
    ('4.3', 'planear', 'Define alcance del sistema.'),
    ('4.4', 'planear', 'Estructura el sistema de gestion.'),
    ('5', 'planear', 'Alinea liderazgo, politica y responsabilidades.'),
    ('5.1', 'planear', 'Compromiso de direccion.'),
    ('5.2', 'planear', 'Politica de seguridad.'),
    ('5.3', 'planear', 'Roles y autoridades.'),
    ('6', 'planear', 'Planificacion del sistema.'),
    ('6.1', 'planear', 'Acciones frente a riesgos y oportunidades.'),
    ('6.1.1', 'planear', 'Determinacion inicial de riesgos y oportunidades.'),
    ('6.1.2', 'planear', 'Proceso de gestion del riesgo.'),
    ('6.1.3', 'planear', 'Requisitos legales.'),
    ('6.2', 'planear', 'Objetivos y planes.'),
    ('7', 'hacer', 'Recursos, competencia, conciencia, comunicacion y documentos.'),
    ('7.1', 'hacer', 'Disponibilidad de recursos.'),
    ('7.2', 'hacer', 'Competencia del personal.'),
    ('7.3', 'hacer', 'Toma de conciencia.'),
    ('7.4', 'hacer', 'Comunicacion.'),
    ('7.4.1', 'hacer', 'Planificacion de comunicacion.'),
    ('7.4.2', 'hacer', 'Comunicacion con personas que prestan el servicio.'),
    ('7.4.3', 'hacer', 'Comunicacion con participantes.'),
    ('7.5', 'hacer', 'Informacion documentada.'),
    ('7.5.1', 'hacer', 'Documentacion requerida.'),
    ('7.5.2', 'hacer', 'Creacion y actualizacion documental.'),
    ('8', 'hacer', 'Ejecucion operacional.'),
    ('8.1', 'hacer', 'Control operacional.'),
    ('8.2', 'hacer', 'Preparacion y respuesta ante emergencias.'),
    ('8.3', 'hacer', 'Gestion de incidentes.'),
    ('9', 'verificar', 'Evaluacion del desempeno.'),
    ('9.1', 'verificar', 'Seguimiento, medicion y analisis.'),
    ('9.2', 'verificar', 'Auditoria interna.'),
    ('9.3', 'verificar', 'Revision por la direccion.'),
    ('10', 'actuar', 'Mejora.'),
    ('10.1', 'actuar', 'No conformidad y accion correctiva.'),
    ('10.2', 'actuar', 'Mejora continua.')
  ) AS item(codigo, etapa, justificacion)
)
INSERT INTO requisito_phva_mapeo (requisito_id, etapa, justificacion)
SELECT req.id, phva.etapa::phva_etapa, phva.justificacion
FROM phva
JOIN req ON req.codigo = phva.codigo
ON CONFLICT (requisito_id, etapa) DO UPDATE
  SET justificacion = EXCLUDED.justificacion;

WITH version AS (
  SELECT nv.id
  FROM norma_versiones nv
  JOIN normas n ON n.id = nv.norma_id
  WHERE n.codigo = 'NTC-ISO-21101' AND nv.version = '2020'
),
req AS (
  SELECT r.id, r.codigo
  FROM requisitos_normativos r
  JOIN version v ON v.id = r.norma_version_id
),
forms AS (
  SELECT *
  FROM (VALUES
    ('FORM-PER-001', 'Ficha de personal', 'personal', '7.2', '[{"name":"nombre_completo","type":"text","required":true},{"name":"cargo","type":"text","required":true},{"name":"perfil_general","type":"textarea","required":false}]'::jsonb),
    ('FORM-PER-002', 'Evaluacion de competencia', 'personal', '7.2', '[{"name":"persona","type":"text","required":true},{"name":"competencia","type":"textarea","required":true},{"name":"resultado","type":"select","options":["cumple","parcial","no_cumple"],"required":true},{"name":"observaciones","type":"textarea","required":false}]'::jsonb),
    ('FORM-CAP-001', 'Necesidad de capacitacion', 'capacitacion', '7.2', '[{"name":"tema","type":"text","required":true},{"name":"origen","type":"select","options":["riesgo","competencia","incidente","auditoria","agente"],"required":true},{"name":"prioridad","type":"select","options":["baja","media","alta","critica"],"required":true}]'::jsonb),
    ('FORM-CAP-002', 'Asistencia a capacitacion', 'capacitacion', '7.3', '[{"name":"tema","type":"text","required":true},{"name":"fecha","type":"date","required":true},{"name":"instructor","type":"text","required":false},{"name":"asistentes","type":"textarea","required":true}]'::jsonb),
    ('FORM-CAP-003', 'Evaluacion de capacitacion', 'capacitacion', '7.2', '[{"name":"persona","type":"text","required":true},{"name":"resultado","type":"select","options":["aprobado","no_aprobado","pendiente"],"required":true},{"name":"calificacion","type":"number","required":false}]'::jsonb),
    ('FORM-EQP-001', 'Inspeccion de equipos', 'equipos', '7.1', '[{"name":"equipo","type":"text","required":true},{"name":"resultado","type":"select","options":["operativo","requiere_mantenimiento","fuera_servicio"],"required":true},{"name":"hallazgos","type":"textarea","required":false},{"name":"proxima_inspeccion","type":"date","required":false}]'::jsonb),
    ('FORM-EQP-002', 'Mantenimiento de equipos', 'equipos', '8.1', '[{"name":"equipo","type":"text","required":true},{"name":"tipo","type":"select","options":["preventivo","correctivo"],"required":true},{"name":"descripcion","type":"textarea","required":true},{"name":"proximo_mantenimiento","type":"date","required":false}]'::jsonb),
    ('FORM-MEJ-001', 'Accion de mejora', 'mejora', '10.2', '[{"name":"origen","type":"text","required":true},{"name":"descripcion","type":"textarea","required":true},{"name":"accion_propuesta","type":"textarea","required":true},{"name":"responsable","type":"text","required":true},{"name":"fecha_limite","type":"date","required":false}]'::jsonb),
    ('FORM-INC-001', 'Registro de incidente', 'operacion', '8.3', '[{"name":"fecha_hora","type":"datetime","required":true},{"name":"actividad","type":"text","required":true},{"name":"descripcion","type":"textarea","required":true},{"name":"respuesta_inmediata","type":"textarea","required":false},{"name":"causas_probables","type":"textarea","required":false}]'::jsonb),
    ('FORM-SIM-001', 'Registro de simulacro', 'operacion', '8.2', '[{"name":"tipo","type":"text","required":true},{"name":"fecha","type":"date","required":true},{"name":"resultados","type":"textarea","required":true},{"name":"lecciones_aprendidas","type":"textarea","required":false}]'::jsonb),
    ('FORM-REV-001', 'Revision por la direccion', 'verificacion', '9.3', '[{"name":"periodo_evaluado","type":"text","required":true},{"name":"acciones_previas","type":"textarea","required":true},{"name":"auditorias","type":"textarea","required":true},{"name":"incidentes","type":"textarea","required":true},{"name":"capacitaciones","type":"textarea","required":true},{"name":"decisiones","type":"textarea","required":true}]'::jsonb),
    ('FORM-SEG-001', 'Registro de poliza de seguro', 'seguros', '6.1.3', '[{"name":"numero_poliza","type":"text","required":true},{"name":"aseguradora","type":"text","required":true},{"name":"cobertura","type":"textarea","required":true},{"name":"fecha_fin","type":"date","required":true},{"name":"actividades_cubiertas","type":"textarea","required":true}]'::jsonb),
    ('FORM-PAR-001', 'Evidencia externa de participantes', 'participantes', '7.4.3', '[{"name":"actividad","type":"text","required":true},{"name":"fecha_actividad","type":"date","required":true},{"name":"url_externa","type":"url","required":false},{"name":"consentimiento_recibido","type":"boolean","required":true},{"name":"descripcion","type":"textarea","required":false}]'::jsonb)
  ) AS item(codigo, nombre, modulo, requisito_codigo, campos)
)
INSERT INTO formularios_definicion (codigo, nombre, modulo, requisito_id, campos)
SELECT forms.codigo, forms.nombre, forms.modulo, req.id, forms.campos
FROM forms
LEFT JOIN req ON req.codigo = forms.requisito_codigo
ON CONFLICT (codigo) DO UPDATE
  SET nombre = EXCLUDED.nombre,
      modulo = EXCLUDED.modulo,
      requisito_id = EXCLUDED.requisito_id,
      campos = EXCLUDED.campos,
      activo = true;
