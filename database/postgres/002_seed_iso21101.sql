WITH norma AS (
  INSERT INTO normas (codigo, nombre, familia, emisor, descripcion)
  VALUES (
    'NTC-ISO-21101',
    'Turismo de aventura. Sistemas de gestión de seguridad. Requisitos',
    'Turismo de aventura',
    'ICONTEC / ISO',
    'Norma para implementar sistemas de gestión de seguridad en turismo de aventura.'
  )
  ON CONFLICT (codigo) DO UPDATE
    SET nombre = EXCLUDED.nombre,
        familia = EXCLUDED.familia,
        emisor = EXCLUDED.emisor,
        descripcion = EXCLUDED.descripcion
  RETURNING id
),
version AS (
  INSERT INTO norma_versiones (norma_id, version, fecha_publicacion, estado, notas)
  SELECT id, '2020', DATE '2020-11-25', 'vigente', 'Adopción colombiana de ISO 21101:2014, revisada y confirmada en 2019.'
  FROM norma
  ON CONFLICT (norma_id, version) DO UPDATE
    SET fecha_publicacion = EXCLUDED.fecha_publicacion,
        estado = EXCLUDED.estado,
        notas = EXCLUDED.notas
  RETURNING id
)
INSERT INTO requisitos_normativos (norma_version_id, codigo, titulo, texto_resumen, orden, es_evaluable)
SELECT version.id, item.codigo, item.titulo, item.resumen, item.orden, item.es_evaluable
FROM version
CROSS JOIN (
  VALUES
    ('4', 'Contexto de la organización', 'Comprender el contexto, partes interesadas, alcance y sistema de gestión.', 4.000, false),
    ('4.1', 'Comprensión de la organización y de su contexto', 'Identificar cuestiones internas y externas pertinentes para el SGSTA.', 4.100, true),
    ('4.2', 'Comprensión de necesidades y expectativas de partes interesadas', 'Determinar partes interesadas y requisitos pertinentes.', 4.200, true),
    ('4.3', 'Determinación del alcance del sistema de gestión de seguridad', 'Definir límites, aplicabilidad y alcance del SGSTA.', 4.300, true),
    ('4.4', 'Sistema de gestión de seguridad de turismo de aventura', 'Establecer, implementar, mantener y mejorar el sistema.', 4.400, true),
    ('5', 'Liderazgo', 'Compromiso, política y responsabilidades.', 5.000, false),
    ('5.1', 'Liderazgo y compromiso', 'La alta dirección demuestra liderazgo y compromiso con el SGSTA.', 5.100, true),
    ('5.2', 'Política', 'Establecer, comunicar y mantener una política de seguridad adecuada.', 5.200, true),
    ('5.3', 'Roles, responsabilidades y autoridades', 'Asignar responsabilidades y autoridades pertinentes.', 5.300, true),
    ('6', 'Planificación', 'Riesgos, oportunidades, requisitos legales y objetivos.', 6.000, false),
    ('6.1', 'Acciones para abordar riesgos y oportunidades', 'Planificar acciones para riesgos y oportunidades del SGSTA.', 6.100, true),
    ('6.1.1', 'Generalidades', 'Determinar riesgos y oportunidades asociados al contexto y partes interesadas.', 6.110, true),
    ('6.1.2', 'Proceso de gestión del riesgo de turismo de aventura', 'Establecer un proceso de gestión del riesgo aplicable a las actividades.', 6.120, true),
    ('6.1.3', 'Requisitos legales', 'Identificar y cumplir requisitos legales y otros requisitos aplicables.', 6.130, true),
    ('6.2', 'Objetivos de seguridad y planificación para lograrlos', 'Definir objetivos medibles y planes para alcanzarlos.', 6.200, true),
    ('7', 'Apoyo', 'Recursos, competencia, conciencia, comunicación e información documentada.', 7.000, false),
    ('7.1', 'Recursos', 'Determinar y proporcionar recursos para el SGSTA.', 7.100, true),
    ('7.2', 'Competencia', 'Asegurar competencias de personas que afectan el desempeño de seguridad.', 7.200, true),
    ('7.3', 'Toma de conciencia', 'Asegurar conciencia sobre política, contribución y consecuencias.', 7.300, true),
    ('7.4', 'Comunicación', 'Definir comunicaciones internas y externas pertinentes.', 7.400, true),
    ('7.4.1', 'Generalidades de comunicación', 'Determinar qué, cuándo, con quién y cómo comunicar.', 7.410, true),
    ('7.4.2', 'Comunicación con personas que prestan el servicio', 'Consultar y comunicar a quienes participan en la prestación.', 7.420, true),
    ('7.4.3', 'Comunicación y consulta con participantes', 'Comunicar información de seguridad a participantes.', 7.430, true),
    ('7.5', 'Información documentada', 'Controlar información documentada requerida por el SGSTA.', 7.500, true),
    ('7.5.1', 'Generalidades de información documentada', 'Mantener la documentación requerida por la norma y la organización.', 7.510, true),
    ('7.5.2', 'Creación y actualización', 'Controlar identificación, formato, revisión y aprobación.', 7.520, true),
    ('8', 'Operación', 'Planificación operacional, emergencias e incidentes.', 8.000, false),
    ('8.1', 'Planificación y control operacional', 'Planificar, implementar y controlar procesos operacionales.', 8.100, true),
    ('8.2', 'Preparación y respuesta ante emergencias', 'Establecer procesos para prepararse y responder a emergencias.', 8.200, true),
    ('8.3', 'Gestión de incidentes', 'Registrar, responder, analizar y aprender de incidentes.', 8.300, true),
    ('9', 'Evaluación del desempeño', 'Seguimiento, medición, auditoría interna y revisión por dirección.', 9.000, false),
    ('9.1', 'Seguimiento, medición, análisis y evaluación', 'Medir y evaluar el desempeño del SGSTA.', 9.100, true),
    ('9.2', 'Auditoría interna', 'Realizar auditorías internas a intervalos planificados.', 9.200, true),
    ('9.3', 'Revisión por la dirección', 'Revisar el SGSTA para asegurar conveniencia, adecuación y eficacia.', 9.300, true),
    ('10', 'Mejora', 'No conformidad, acción correctiva y mejora continua.', 10.000, false),
    ('10.1', 'No conformidad y acción correctiva', 'Gestionar no conformidades y acciones correctivas.', 10.100, true),
    ('10.2', 'Mejora continua', 'Mejorar continuamente la conveniencia, adecuación y eficacia.', 10.200, true)
) AS item(codigo, titulo, resumen, orden, es_evaluable)
ON CONFLICT (norma_version_id, codigo) DO UPDATE
  SET titulo = EXCLUDED.titulo,
      texto_resumen = EXCLUDED.texto_resumen,
      orden = EXCLUDED.orden,
      es_evaluable = EXCLUDED.es_evaluable;

WITH version AS (
  SELECT nv.id
  FROM norma_versiones nv
  JOIN normas n ON n.id = nv.norma_id
  WHERE n.codigo = 'NTC-ISO-21101' AND nv.version = '2020'
)
INSERT INTO evidencias_requeridas (requisito_id, nombre, descripcion, tipo_esperado, obligatoria)
SELECT r.id, item.nombre, item.descripcion, item.tipo_esperado, item.obligatoria
FROM version
JOIN requisitos_normativos r ON r.norma_version_id = version.id
JOIN (
  VALUES
    ('4.1', 'Análisis de contexto interno y externo', 'Registro o matriz con cuestiones internas y externas pertinentes.', 'registro', true),
    ('4.2', 'Matriz de partes interesadas', 'Identificación de partes interesadas, necesidades, expectativas y requisitos.', 'registro', true),
    ('4.3', 'Alcance del SGSTA', 'Declaración documentada del alcance del sistema.', 'documento', true),
    ('5.2', 'Política de seguridad', 'Política aprobada, comunicada y vigente.', 'documento', true),
    ('5.3', 'Roles y responsabilidades', 'Asignación de responsabilidades y autoridades.', 'registro', true),
    ('6.1.2', 'Mapa de riesgos por actividad', 'Identificación, análisis, evaluación y tratamiento de riesgos.', 'registro', true),
    ('6.1.3', 'Normograma', 'Requisitos legales y otros requisitos aplicables.', 'registro', true),
    ('6.2', 'Objetivos y plan de acción', 'Objetivos de seguridad medibles y planificación para lograrlos.', 'registro', true),
    ('7.2', 'Matriz de competencias', 'Competencias requeridas y evidencia de verificación.', 'registro', true),
    ('7.4', 'Plan de comunicaciones', 'Qué, cuándo, cómo y a quién comunicar sobre seguridad.', 'documento', true),
    ('7.5', 'Listado maestro de documentos', 'Control de documentos y registros del SGSTA.', 'registro', true),
    ('8.1', 'Procedimientos operacionales', 'Procedimientos de planificación y control de actividades.', 'documento', true),
    ('8.2', 'Plan de emergencias', 'Preparación y respuesta ante emergencias por actividad.', 'documento', true),
    ('8.3', 'Registro de incidentes', 'Registros de incidentes, análisis y acciones derivadas.', 'registro', true),
    ('9.1', 'Indicadores de seguimiento', 'Medición, análisis y evaluación del desempeño.', 'registro', true),
    ('9.2', 'Programa e informes de auditoría interna', 'Planificación, ejecución, hallazgos e informes de auditoría.', 'registro', true),
    ('9.3', 'Acta de revisión por dirección', 'Entradas, decisiones y salidas de la revisión.', 'registro', true),
    ('10.1', 'Acciones correctivas', 'No conformidades, causa, acción, seguimiento y eficacia.', 'registro', true)
) AS item(codigo, nombre, descripcion, tipo_esperado, obligatoria)
  ON item.codigo = r.codigo
ON CONFLICT DO NOTHING;

INSERT INTO roles (codigo, nombre, descripcion)
VALUES
  ('admin_org', 'Administrador de organización', 'Configura usuarios, sistemas de gestión y permisos de la organización.'),
  ('responsable_sg', 'Responsable del sistema de gestión', 'Lidera implementación, seguimiento y mejora del sistema.'),
  ('lider_actividad', 'Líder de actividad', 'Gestiona operación, riesgos, bitácoras e incidentes de actividades.'),
  ('auditor', 'Auditor interno', 'Consulta evidencias y registra hallazgos de auditoría.'),
  ('consulta', 'Consulta', 'Puede consultar información autorizada sin modificar registros críticos.')
ON CONFLICT (codigo) DO UPDATE
  SET nombre = EXCLUDED.nombre,
      descripcion = EXCLUDED.descripcion;
