CREATE TABLE IF NOT EXISTS reglas_alerta_sistema (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo TEXT NOT NULL UNIQUE,
  nombre TEXT NOT NULL,
  modulo TEXT NOT NULL,
  requisito_codigo TEXT,
  severidad TEXT NOT NULL DEFAULT 'media' CHECK (severidad IN ('baja', 'media', 'alta', 'critica')),
  condicion JSONB NOT NULL DEFAULT '{}'::jsonb,
  accion_sugerida TEXT NOT NULL,
  activo BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS alertas_sistema (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  sistema_gestion_id UUID REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  regla_alerta_id UUID REFERENCES reglas_alerta_sistema(id) ON DELETE SET NULL,
  requisito_id UUID REFERENCES requisitos_normativos(id) ON DELETE SET NULL,
  titulo TEXT NOT NULL,
  detalle TEXT,
  severidad TEXT NOT NULL DEFAULT 'media' CHECK (severidad IN ('baja', 'media', 'alta', 'critica')),
  estado TEXT NOT NULL DEFAULT 'abierta' CHECK (estado IN ('abierta', 'gestionada', 'cerrada')),
  accion_gestion_id UUID REFERENCES acciones_gestion(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  closed_at TIMESTAMPTZ
);

INSERT INTO reglas_alerta_sistema (codigo, nombre, modulo, requisito_codigo, severidad, condicion, accion_sugerida)
VALUES
  ('POLIZA_NO_VIGENTE', 'Poliza no vigente', 'seguros', '6.1.3', 'alta', '{"campo":"estado","operador":"!=","valor":"vigente"}', 'Validar vigencia y cobertura de poliza.'),
  ('EQUIPO_REVISION', 'Equipo requiere inspeccion o mantenimiento', 'equipos', '7.1', 'alta', '{"campo":"estado","operador":"!=","valor":"operativo"}', 'Programar inspeccion o mantenimiento.'),
  ('CAPACITACION_PENDIENTE', 'Capacitacion pendiente', 'capacitacion', '7.2', 'media', '{"campo":"estado","operador":"!=","valor":"cerrada"}', 'Programar y evaluar capacitacion.'),
  ('FORMULARIO_SIN_APROBAR', 'Formulario sin aprobacion humana', 'formularios', '7.5', 'media', '{"campo":"estado","operador":"in","valor":["borrador","revision"]}', 'Revisar y aprobar formulario.'),
  ('REVISION_DIRECCION_PENDIENTE', 'Revision por direccion pendiente', 'revision_direccion', '9.3', 'media', '{"campo":"existe","operador":"=","valor":false}', 'Preparar revision por la direccion.')
ON CONFLICT (codigo) DO UPDATE
  SET nombre = EXCLUDED.nombre,
      modulo = EXCLUDED.modulo,
      requisito_codigo = EXCLUDED.requisito_codigo,
      severidad = EXCLUDED.severidad,
      condicion = EXCLUDED.condicion,
      accion_sugerida = EXCLUDED.accion_sugerida,
      activo = true;

CREATE INDEX IF NOT EXISTS idx_alertas_sistema_estado
  ON alertas_sistema(organizacion_id, estado, severidad);
