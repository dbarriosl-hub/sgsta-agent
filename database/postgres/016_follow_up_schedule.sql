CREATE TABLE IF NOT EXISTS agenda_seguimiento_sistema (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  sistema_gestion_id UUID REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  requisito_id UUID REFERENCES requisitos_normativos(id) ON DELETE SET NULL,
  titulo TEXT NOT NULL,
  descripcion TEXT,
  origen_tipo TEXT NOT NULL DEFAULT 'agente',
  origen_id UUID,
  prioridad TEXT NOT NULL DEFAULT 'media' CHECK (prioridad IN ('baja', 'media', 'alta', 'critica')),
  fecha_programada DATE,
  estado TEXT NOT NULL DEFAULT 'pendiente' CHECK (estado IN ('pendiente', 'en_proceso', 'cerrada', 'cancelada')),
  accion_gestion_id UUID REFERENCES acciones_gestion(id) ON DELETE SET NULL,
  responsable_usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_agenda_seguimiento_fecha
  ON agenda_seguimiento_sistema(organizacion_id, estado, fecha_programada);

CREATE INDEX IF NOT EXISTS idx_agenda_seguimiento_prioridad
  ON agenda_seguimiento_sistema(sistema_gestion_id, prioridad, estado);
