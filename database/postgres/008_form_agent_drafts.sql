ALTER TABLE formularios_respuesta
  ADD COLUMN IF NOT EXISTS fuente TEXT NOT NULL DEFAULT 'manual',
  ADD COLUMN IF NOT EXISTS generado_por_agente BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS confianza_agente NUMERIC(5, 2),
  ADD COLUMN IF NOT EXISTS requiere_aprobacion BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS aprobado_por_usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS fecha_aprobacion TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS idx_formularios_respuesta_agente
  ON formularios_respuesta(generado_por_agente, requiere_aprobacion, estado);

CREATE OR REPLACE VIEW vw_borradores_formularios_agente AS
SELECT
  respuesta.id,
  respuesta.organizacion_id,
  respuesta.sistema_gestion_id,
  definicion.codigo AS codigo_formulario,
  definicion.nombre AS formulario,
  definicion.modulo,
  req.codigo AS requisito_codigo,
  respuesta.estado,
  respuesta.fuente,
  respuesta.generado_por_agente,
  respuesta.confianza_agente,
  respuesta.requiere_aprobacion,
  respuesta.created_at,
  respuesta.updated_at
FROM formularios_respuesta respuesta
JOIN formularios_definicion definicion ON definicion.id = respuesta.formulario_definicion_id
LEFT JOIN requisitos_normativos req ON req.id = definicion.requisito_id
WHERE respuesta.generado_por_agente = true;
