CREATE TABLE IF NOT EXISTS eventos_auditoria_sistema (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  sistema_gestion_id UUID REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  requisito_id UUID REFERENCES requisitos_normativos(id) ON DELETE SET NULL,
  actor_tipo TEXT NOT NULL CHECK (actor_tipo IN ('agente', 'humano', 'sistema')),
  actor_usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  evento_tipo TEXT NOT NULL,
  titulo TEXT NOT NULL,
  descripcion TEXT,
  entidad_tipo TEXT,
  entidad_id UUID,
  antes JSONB,
  despues JSONB,
  requiere_aprobacion BOOLEAN NOT NULL DEFAULT false,
  aprobado_por_usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  fecha_aprobacion TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_eventos_auditoria_org_fecha
  ON eventos_auditoria_sistema(organizacion_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_eventos_auditoria_requisito
  ON eventos_auditoria_sistema(requisito_id);

CREATE INDEX IF NOT EXISTS idx_eventos_auditoria_actor
  ON eventos_auditoria_sistema(actor_tipo, evento_tipo);
