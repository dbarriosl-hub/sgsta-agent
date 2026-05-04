CREATE TABLE IF NOT EXISTS paquetes_cierre_requisito (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  sistema_gestion_id UUID REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  requisito_id UUID REFERENCES requisitos_normativos(id) ON DELETE SET NULL,
  codigo_requisito TEXT NOT NULL,
  titulo_requisito TEXT,
  resumen TEXT,
  formularios_generados INT NOT NULL DEFAULT 0,
  accion_gestion_id UUID REFERENCES acciones_gestion(id) ON DELETE SET NULL,
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  estado_revision TEXT NOT NULL DEFAULT 'pendiente' CHECK (estado_revision IN ('pendiente', 'en_revision', 'revisado', 'rechazado')),
  preparado_por_agente BOOLEAN NOT NULL DEFAULT true,
  revisado_por_usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  fecha_revision TIMESTAMPTZ,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_paquetes_cierre_estado
  ON paquetes_cierre_requisito(organizacion_id, estado_revision, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_paquetes_cierre_requisito
  ON paquetes_cierre_requisito(sistema_gestion_id, codigo_requisito);

ALTER TABLE acciones_gestion
  ADD COLUMN IF NOT EXISTS seguimiento TEXT,
  ADD COLUMN IF NOT EXISTS estado_eficacia TEXT NOT NULL DEFAULT 'pendiente'
    CHECK (estado_eficacia IN ('pendiente', 'eficaz', 'no_eficaz')),
  ADD COLUMN IF NOT EXISTS fecha_verificacion_eficacia DATE;

CREATE INDEX IF NOT EXISTS idx_acciones_gestion_fecha_limite
  ON acciones_gestion(sistema_gestion_id, estado, fecha_limite);

CREATE INDEX IF NOT EXISTS idx_acciones_gestion_eficacia
  ON acciones_gestion(sistema_gestion_id, estado_eficacia);

INSERT INTO reglas_alerta_sistema (codigo, nombre, modulo, requisito_codigo, severidad, condicion, accion_sugerida)
VALUES
  ('POLIZA_VENCE_30', 'Poliza vence en 30 dias', 'seguros', '6.1.3', 'alta', '{"campo":"fecha_fin","operador":"<=","dias":30}', 'Renovar o validar vigencia de poliza antes del vencimiento.'),
  ('EQUIPO_REVISION_VENCE_15', 'Revision de equipo vence en 15 dias', 'equipos', '7.1', 'alta', '{"campo":"fecha_proxima_revision","operador":"<=","dias":15}', 'Programar inspeccion o mantenimiento del equipo.'),
  ('CERTIFICADO_COMPETENCIA_VENCE_30', 'Certificado de competencia vence en 30 dias', 'capacitacion', '7.2', 'alta', '{"campo":"fecha_vencimiento","operador":"<=","dias":30}', 'Renovar certificado o programar capacitacion/evaluacion.'),
  ('DOCUMENTO_REVISION_PENDIENTE', 'Documento pendiente de revision/aprobacion', 'documentos', '7.5', 'media', '{"campo":"estado","operador":"!=","valor":"aprobado"}', 'Revisar y aprobar documento controlado.')
ON CONFLICT (codigo) DO UPDATE
  SET nombre = EXCLUDED.nombre,
      modulo = EXCLUDED.modulo,
      requisito_codigo = EXCLUDED.requisito_codigo,
      severidad = EXCLUDED.severidad,
      condicion = EXCLUDED.condicion,
      accion_sugerida = EXCLUDED.accion_sugerida,
      activo = true;

CREATE OR REPLACE VIEW vw_auditoria_requisitos AS
WITH formularios AS (
  SELECT
    sg.id AS sistema_gestion_id,
    req.id AS requisito_id,
    COUNT(DISTINCT def.id) AS formularios_total,
    COUNT(DISTINCT respuesta.id) FILTER (
      WHERE respuesta.estado::text IN ('borrador', 'revision', 'en_proceso')
    ) AS formularios_borrador,
    COUNT(DISTINCT respuesta.id) FILTER (
      WHERE respuesta.estado::text IN ('aprobado', 'implementada', 'cerrada')
    ) AS formularios_aprobados
  FROM sistemas_gestion sg
  JOIN requisitos_normativos req ON req.norma_version_id = sg.norma_version_id
  LEFT JOIN formularios_definicion def ON def.requisito_id = req.id AND def.activo = true
  LEFT JOIN formularios_respuesta respuesta
    ON respuesta.formulario_definicion_id = def.id
    AND respuesta.organizacion_id = sg.organizacion_id
    AND (respuesta.sistema_gestion_id = sg.id OR respuesta.sistema_gestion_id IS NULL)
  GROUP BY sg.id, req.id
),
evidencias_resumen AS (
  SELECT
    sg.id AS sistema_gestion_id,
    req.id AS requisito_id,
    COUNT(DISTINCT ev.id) AS evidencias_total,
    COUNT(DISTINCT ev.id) FILTER (
      WHERE COALESCE(ev.metadata->>'estado', 'registrada') <> 'sugerida'
    ) AS evidencias_registradas,
    COUNT(DISTINCT ev.id) FILTER (
      WHERE ev.metadata->>'estado' = 'sugerida'
    ) AS evidencias_sugeridas
  FROM sistemas_gestion sg
  JOIN requisitos_normativos req ON req.norma_version_id = sg.norma_version_id
  LEFT JOIN evidencias ev
    ON ev.requisito_id = req.id
    AND ev.organizacion_id = sg.organizacion_id
    AND (ev.sistema_gestion_id = sg.id OR ev.sistema_gestion_id IS NULL)
  GROUP BY sg.id, req.id
),
acciones_resumen AS (
  SELECT
    sistema_gestion_id,
    requisito_id,
    COUNT(*) FILTER (WHERE estado::text <> 'cerrada') AS acciones_abiertas,
    COUNT(*) FILTER (WHERE estado_eficacia = 'eficaz') AS acciones_eficaces
  FROM acciones_gestion
  GROUP BY sistema_gestion_id, requisito_id
)
SELECT
  org.id AS organizacion_id,
  org.nombre AS organizacion,
  sg.id AS sistema_gestion_id,
  sg.nombre AS sistema_gestion,
  req.id AS requisito_id,
  req.codigo AS requisito_codigo,
  req.titulo AS requisito_titulo,
  req.texto_resumen,
  COALESCE(cumplimiento.estado::text, 'pendiente') AS estado_manual,
  COALESCE(formularios.formularios_total, 0) AS formularios_total,
  COALESCE(formularios.formularios_borrador, 0) AS formularios_borrador,
  COALESCE(formularios.formularios_aprobados, 0) AS formularios_aprobados,
  GREATEST(COALESCE(formularios.formularios_total, 0) - COALESCE(formularios.formularios_borrador, 0) - COALESCE(formularios.formularios_aprobados, 0), 0) AS formularios_pendientes,
  COALESCE(evidencias_resumen.evidencias_total, 0) AS evidencias_total,
  COALESCE(evidencias_resumen.evidencias_registradas, 0) AS evidencias_registradas,
  COALESCE(evidencias_resumen.evidencias_sugeridas, 0) AS evidencias_sugeridas,
  COALESCE(acciones_resumen.acciones_abiertas, 0) AS acciones_abiertas,
  COALESCE(acciones_resumen.acciones_eficaces, 0) AS acciones_eficaces,
  CASE
    WHEN COALESCE(evidencias_resumen.evidencias_registradas, 0) > 0 THEN 100
    WHEN COALESCE(formularios.formularios_total, 0) > 0 THEN
      LEAST(100, ROUND(((COALESCE(formularios.formularios_aprobados, 0) + COALESCE(formularios.formularios_borrador, 0) * 0.4) / formularios.formularios_total::numeric) * 100))
    WHEN cumplimiento.estado::text IN ('cumple', 'no_aplica') THEN 100
    WHEN cumplimiento.estado::text = 'parcial' THEN 50
    WHEN cumplimiento.estado::text = 'en_proceso' THEN 35
    ELSE 0
  END AS porcentaje_completitud,
  CASE
    WHEN COALESCE(evidencias_resumen.evidencias_registradas, 0) > 0 THEN 'Evidencia registrada disponible.'
    WHEN COALESCE(formularios.formularios_total, 0) > COALESCE(formularios.formularios_aprobados, 0) + COALESCE(formularios.formularios_borrador, 0) THEN 'Faltan formularios o registros asociados al requisito.'
    WHEN COALESCE(formularios.formularios_borrador, 0) > 0 THEN 'Existen borradores pendientes de aprobacion humana.'
    WHEN COALESCE(acciones_resumen.acciones_abiertas, 0) > 0 THEN 'Existen acciones abiertas que requieren seguimiento o cierre.'
    ELSE 'Revisar vigencia, trazabilidad y eficacia de la evidencia.'
  END AS lectura_agente
FROM sistemas_gestion sg
JOIN organizaciones org ON org.id = sg.organizacion_id
JOIN requisitos_normativos req ON req.norma_version_id = sg.norma_version_id AND req.es_evaluable = true
LEFT JOIN cumplimiento_requisitos cumplimiento
  ON cumplimiento.sistema_gestion_id = sg.id
  AND cumplimiento.requisito_id = req.id
LEFT JOIN formularios ON formularios.sistema_gestion_id = sg.id AND formularios.requisito_id = req.id
LEFT JOIN evidencias_resumen ON evidencias_resumen.sistema_gestion_id = sg.id AND evidencias_resumen.requisito_id = req.id
LEFT JOIN acciones_resumen ON acciones_resumen.sistema_gestion_id = sg.id AND acciones_resumen.requisito_id = req.id;
