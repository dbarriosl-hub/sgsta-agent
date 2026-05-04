CREATE TABLE IF NOT EXISTS reportes_agente (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  sistema_gestion_id UUID REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  requisito_id UUID REFERENCES requisitos_normativos(id) ON DELETE SET NULL,
  tipo TEXT NOT NULL DEFAULT 'ejecutivo',
  titulo TEXT NOT NULL,
  contenido TEXT NOT NULL,
  resumen JSONB NOT NULL DEFAULT '{}'::jsonb,
  estado TEXT NOT NULL DEFAULT 'borrador' CHECK (estado IN ('borrador', 'revision', 'aprobado', 'archivado')),
  generado_por_agente BOOLEAN NOT NULL DEFAULT true,
  aprobado_por_usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  fecha_aprobacion TIMESTAMPTZ,
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_reportes_agente_sistema
  ON reportes_agente(sistema_gestion_id, tipo, estado);

CREATE INDEX IF NOT EXISTS idx_reportes_agente_organizacion
  ON reportes_agente(organizacion_id, created_at DESC);
