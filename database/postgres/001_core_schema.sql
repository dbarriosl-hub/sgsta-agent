CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE sistema_estado AS ENUM ('borrador', 'activo', 'pausado', 'cerrado');
CREATE TYPE cumplimiento_estado AS ENUM ('pendiente', 'en_proceso', 'cumple', 'parcial', 'no_cumple', 'no_aplica');
CREATE TYPE documento_estado AS ENUM ('borrador', 'en_revision', 'aprobado', 'obsoleto');
CREATE TYPE accion_estado AS ENUM ('abierta', 'en_proceso', 'cerrada', 'vencida', 'cancelada');
CREATE TYPE accion_tipo AS ENUM ('tarea', 'correctiva', 'preventiva', 'mejora');
CREATE TYPE riesgo_estado AS ENUM ('identificado', 'tratado', 'aceptado', 'cerrado');

CREATE TABLE organizaciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  identificacion TEXT,
  correo_contacto TEXT,
  telefono TEXT,
  direccion TEXT,
  pais TEXT DEFAULT 'Colombia',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id),
  nombre TEXT NOT NULL,
  correo TEXT NOT NULL,
  password_hash TEXT,
  activo BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (organizacion_id, correo)
);

CREATE TABLE roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo TEXT NOT NULL UNIQUE,
  nombre TEXT NOT NULL,
  descripcion TEXT
);

CREATE TABLE usuario_roles (
  usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  rol_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  PRIMARY KEY (usuario_id, rol_id)
);

CREATE TABLE normas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo TEXT NOT NULL,
  nombre TEXT NOT NULL,
  familia TEXT,
  emisor TEXT,
  descripcion TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (codigo)
);

CREATE TABLE norma_versiones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  norma_id UUID NOT NULL REFERENCES normas(id) ON DELETE CASCADE,
  version TEXT NOT NULL,
  fecha_publicacion DATE,
  estado TEXT NOT NULL DEFAULT 'vigente',
  notas TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (norma_id, version)
);

CREATE TABLE requisitos_normativos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  norma_version_id UUID NOT NULL REFERENCES norma_versiones(id) ON DELETE CASCADE,
  codigo TEXT NOT NULL,
  titulo TEXT NOT NULL,
  texto_resumen TEXT,
  padre_id UUID REFERENCES requisitos_normativos(id),
  orden NUMERIC(10, 3) NOT NULL DEFAULT 0,
  es_evaluable BOOLEAN NOT NULL DEFAULT true,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  UNIQUE (norma_version_id, codigo)
);

CREATE TABLE evidencias_requeridas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  requisito_id UUID NOT NULL REFERENCES requisitos_normativos(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  tipo_esperado TEXT,
  obligatoria BOOLEAN NOT NULL DEFAULT true,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb
);

CREATE TABLE sistemas_gestion (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  norma_version_id UUID NOT NULL REFERENCES norma_versiones(id),
  nombre TEXT NOT NULL,
  alcance TEXT,
  responsable_usuario_id UUID REFERENCES usuarios(id),
  estado sistema_estado NOT NULL DEFAULT 'borrador',
  fecha_inicio DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (organizacion_id, norma_version_id, nombre)
);

CREATE TABLE actividades_servicios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  ubicacion TEXT,
  estado TEXT NOT NULL DEFAULT 'activa',
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE cumplimiento_requisitos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sistema_gestion_id UUID NOT NULL REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  requisito_id UUID NOT NULL REFERENCES requisitos_normativos(id),
  estado cumplimiento_estado NOT NULL DEFAULT 'pendiente',
  justificacion TEXT,
  responsable_usuario_id UUID REFERENCES usuarios(id),
  fecha_objetivo DATE,
  fecha_evaluacion DATE,
  evaluado_por_usuario_id UUID REFERENCES usuarios(id),
  confianza NUMERIC(4, 3),
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (sistema_gestion_id, requisito_id)
);

CREATE TABLE documentos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  sistema_gestion_id UUID REFERENCES sistemas_gestion(id) ON DELETE SET NULL,
  codigo TEXT,
  titulo TEXT NOT NULL,
  tipo TEXT NOT NULL,
  estado documento_estado NOT NULL DEFAULT 'borrador',
  responsable_usuario_id UUID REFERENCES usuarios(id),
  requisito_id UUID REFERENCES requisitos_normativos(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE documento_versiones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  documento_id UUID NOT NULL REFERENCES documentos(id) ON DELETE CASCADE,
  version TEXT NOT NULL,
  contenido TEXT,
  ruta_archivo TEXT,
  cambios TEXT,
  aprobado_por_usuario_id UUID REFERENCES usuarios(id),
  fecha_aprobacion DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (documento_id, version)
);

CREATE TABLE evidencias (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  sistema_gestion_id UUID REFERENCES sistemas_gestion(id) ON DELETE SET NULL,
  requisito_id UUID REFERENCES requisitos_normativos(id),
  entidad_tipo TEXT,
  entidad_id UUID,
  titulo TEXT NOT NULL,
  descripcion TEXT,
  ruta_archivo TEXT,
  url_externa TEXT,
  hash_archivo TEXT,
  subido_por_usuario_id UUID REFERENCES usuarios(id),
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE riesgos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sistema_gestion_id UUID NOT NULL REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  actividad_servicio_id UUID REFERENCES actividades_servicios(id) ON DELETE SET NULL,
  descripcion TEXT NOT NULL,
  causa TEXT,
  consecuencia TEXT,
  probabilidad INT,
  impacto INT,
  nivel INT GENERATED ALWAYS AS (COALESCE(probabilidad, 0) * COALESCE(impacto, 0)) STORED,
  controles_existentes TEXT,
  tratamiento TEXT,
  responsable_usuario_id UUID REFERENCES usuarios(id),
  estado riesgo_estado NOT NULL DEFAULT 'identificado',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE acciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  sistema_gestion_id UUID REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  requisito_id UUID REFERENCES requisitos_normativos(id),
  tipo accion_tipo NOT NULL DEFAULT 'tarea',
  origen_tipo TEXT,
  origen_id UUID,
  titulo TEXT NOT NULL,
  descripcion TEXT,
  causa TEXT,
  accion_propuesta TEXT,
  responsable_usuario_id UUID REFERENCES usuarios(id),
  fecha_apertura DATE NOT NULL DEFAULT CURRENT_DATE,
  fecha_vencimiento DATE,
  fecha_cierre DATE,
  estado accion_estado NOT NULL DEFAULT 'abierta',
  verificacion_eficacia TEXT,
  eficaz BOOLEAN,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE auditorias (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sistema_gestion_id UUID NOT NULL REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  tipo TEXT NOT NULL DEFAULT 'interna',
  objetivo TEXT,
  alcance TEXT,
  auditor TEXT,
  fecha_inicio DATE,
  fecha_fin DATE,
  estado TEXT NOT NULL DEFAULT 'programada',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE hallazgos_auditoria (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auditoria_id UUID NOT NULL REFERENCES auditorias(id) ON DELETE CASCADE,
  requisito_id UUID REFERENCES requisitos_normativos(id),
  tipo TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  evidencia TEXT,
  accion_id UUID REFERENCES acciones(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE revisiones_direccion (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sistema_gestion_id UUID NOT NULL REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  fecha_revision DATE NOT NULL,
  periodo_evaluado TEXT,
  entradas JSONB NOT NULL DEFAULT '{}'::jsonb,
  decisiones TEXT,
  oportunidades_mejora TEXT,
  responsable_usuario_id UUID REFERENCES usuarios(id),
  estado TEXT NOT NULL DEFAULT 'borrador',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE agente_conversaciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  sistema_gestion_id UUID REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  usuario_id UUID REFERENCES usuarios(id),
  titulo TEXT,
  contexto JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE agente_mensajes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversacion_id UUID NOT NULL REFERENCES agente_conversaciones(id) ON DELETE CASCADE,
  rol TEXT NOT NULL,
  contenido TEXT NOT NULL,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE agente_decisiones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversacion_id UUID REFERENCES agente_conversaciones(id) ON DELETE SET NULL,
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  sistema_gestion_id UUID REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  usuario_id UUID REFERENCES usuarios(id),
  tipo TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  entidad_tipo TEXT,
  entidad_id UUID,
  requiere_aprobacion BOOLEAN NOT NULL DEFAULT false,
  aprobado_por_usuario_id UUID REFERENCES usuarios(id),
  fecha_aprobacion TIMESTAMPTZ,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_requisitos_normativos_version ON requisitos_normativos(norma_version_id, codigo);
CREATE INDEX idx_cumplimiento_sistema_estado ON cumplimiento_requisitos(sistema_gestion_id, estado);
CREATE INDEX idx_evidencias_requisito ON evidencias(requisito_id);
CREATE INDEX idx_acciones_sistema_estado ON acciones(sistema_gestion_id, estado);
CREATE INDEX idx_riesgos_sistema_nivel ON riesgos(sistema_gestion_id, nivel DESC);
