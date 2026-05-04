INSERT INTO normas (codigo, nombre, familia, emisor, descripcion)
VALUES
  ('ISO-9001', 'Sistemas de gestion de la calidad. Requisitos', 'Calidad', 'ISO', 'Plantilla futura para sistemas de gestion de calidad.'),
  ('SG-SST', 'Sistema de gestion de seguridad y salud en el trabajo', 'Seguridad y salud en el trabajo', 'Ministerio de Trabajo', 'Plantilla futura para gestion de seguridad y salud en el trabajo.'),
  ('SOST-TUR', 'Sistema de gestion de sostenibilidad turistica', 'Sostenibilidad turistica', 'Plantilla', 'Plantilla futura para sostenibilidad turistica.')
ON CONFLICT (codigo) DO UPDATE
  SET nombre = EXCLUDED.nombre,
      familia = EXCLUDED.familia,
      emisor = EXCLUDED.emisor,
      descripcion = EXCLUDED.descripcion;

WITH normas_base AS (
  SELECT id, codigo
  FROM normas
  WHERE codigo IN ('ISO-9001', 'SG-SST', 'SOST-TUR')
)
INSERT INTO norma_versiones (norma_id, version, estado, notas)
SELECT
  id,
  'plantilla',
  'plantilla',
  'Version reservada para expansion multi-norma del agente SaaS.'
FROM normas_base
ON CONFLICT (norma_id, version) DO UPDATE
  SET estado = EXCLUDED.estado,
      notas = EXCLUDED.notas;
