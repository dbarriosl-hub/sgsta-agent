CREATE TABLE IF NOT EXISTS planes_suscripcion (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo TEXT NOT NULL UNIQUE,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  limite_sistemas INTEGER NOT NULL,
  limite_organizaciones INTEGER NOT NULL,
  limite_formularios INTEGER NOT NULL,
  limite_ejecuciones_agente INTEGER NOT NULL,
  limite_normas INTEGER NOT NULL,
  activo BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS suscripciones_organizacion (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES planes_suscripcion(id),
  estado TEXT NOT NULL DEFAULT 'activa' CHECK (estado IN ('activa', 'pausada', 'cancelada', 'vencida')),
  fecha_inicio DATE NOT NULL DEFAULT CURRENT_DATE,
  fecha_fin DATE,
  uso_ejecuciones_agente INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO planes_suscripcion (
  codigo,
  nombre,
  descripcion,
  limite_sistemas,
  limite_organizaciones,
  limite_formularios,
  limite_ejecuciones_agente,
  limite_normas
)
VALUES
  ('basico', 'Basico', 'Un sistema de gestion con diagnostico y agente limitado.', 1, 1, 12, 10, 1),
  ('profesional', 'Profesional', 'Gestion completa para un operador turistico.', 1, 1, 60, 80, 1),
  ('consultor', 'Consultor', 'Gestion multi-cliente para consultores.', 20, 20, 800, 500, 3),
  ('empresarial', 'Empresarial', 'Multi-norma y alto volumen.', 999, 999, 5000, 5000, 20)
ON CONFLICT (codigo) DO UPDATE
  SET nombre = EXCLUDED.nombre,
      descripcion = EXCLUDED.descripcion,
      limite_sistemas = EXCLUDED.limite_sistemas,
      limite_organizaciones = EXCLUDED.limite_organizaciones,
      limite_formularios = EXCLUDED.limite_formularios,
      limite_ejecuciones_agente = EXCLUDED.limite_ejecuciones_agente,
      limite_normas = EXCLUDED.limite_normas,
      activo = true;

CREATE INDEX IF NOT EXISTS idx_suscripciones_organizacion_estado
  ON suscripciones_organizacion(organizacion_id, estado);
