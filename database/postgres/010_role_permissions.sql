CREATE TABLE IF NOT EXISTS permisos_roles_sistema (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rol_codigo TEXT NOT NULL,
  permiso_codigo TEXT NOT NULL,
  descripcion TEXT,
  activo BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (rol_codigo, permiso_codigo)
);

INSERT INTO permisos_roles_sistema (rol_codigo, permiso_codigo, descripcion)
VALUES
  ('admin', 'aprobar_formulario', 'Puede aprobar formularios y evidencias del sistema.'),
  ('direccion', 'aprobar_formulario', 'Puede aprobar formularios que soportan requisitos del sistema.'),
  ('direccion', 'aprobar_revision_direccion', 'Puede aprobar salidas de revision por la direccion.'),
  ('responsable_sgsta', 'crear_borrador_formulario', 'Puede crear y editar borradores de formularios.'),
  ('responsable_sgsta', 'enviar_formulario_revision', 'Puede enviar formularios a revision.'),
  ('consultor', 'crear_borrador_formulario', 'Puede preparar borradores para revision del cliente.'),
  ('consultor', 'crear_accion_gestion', 'Puede crear acciones sugeridas de implementacion.'),
  ('guia', 'registrar_operacion', 'Puede registrar operacion, equipos, participantes e incidentes.')
ON CONFLICT (rol_codigo, permiso_codigo) DO UPDATE
  SET descripcion = EXCLUDED.descripcion,
      activo = true;

CREATE INDEX IF NOT EXISTS idx_permisos_roles_sistema_rol
  ON permisos_roles_sistema(rol_codigo, activo);
