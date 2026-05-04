CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'phva_etapa') THEN
    CREATE TYPE phva_etapa AS ENUM ('planear', 'hacer', 'verificar', 'actuar');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'prioridad_gestion') THEN
    CREATE TYPE prioridad_gestion AS ENUM ('baja', 'media', 'alta', 'critica');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'estado_gestion') THEN
    CREATE TYPE estado_gestion AS ENUM ('borrador', 'pendiente', 'programada', 'en_proceso', 'implementada', 'en_evaluacion', 'cerrada', 'vencida', 'cancelada');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'tipo_accion_gestion') THEN
    CREATE TYPE tipo_accion_gestion AS ENUM ('tarea', 'correctiva', 'preventiva', 'mejora');
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS requisito_phva_mapeo (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  requisito_id UUID NOT NULL REFERENCES requisitos_normativos(id) ON DELETE CASCADE,
  etapa phva_etapa NOT NULL,
  justificacion TEXT,
  UNIQUE (requisito_id, etapa)
);

CREATE TABLE IF NOT EXISTS personas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  nombre_completo TEXT NOT NULL,
  identificacion TEXT,
  telefono TEXT,
  correo TEXT,
  perfil_general TEXT,
  datos_sensibles_externos BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS cargos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID REFERENCES organizaciones(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (organizacion_id, nombre)
);

CREATE TABLE IF NOT EXISTS competencias_minimas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cargo_id UUID NOT NULL REFERENCES cargos(id) ON DELETE CASCADE,
  requisito_id UUID REFERENCES requisitos_normativos(id) ON DELETE SET NULL,
  descripcion TEXT NOT NULL,
  fuente_normativa TEXT,
  vigencia_meses INT,
  obligatoria BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS asignaciones_personal (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sistema_gestion_id UUID NOT NULL REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  actividad_servicio_id UUID REFERENCES actividades_servicios(id) ON DELETE CASCADE,
  persona_id UUID NOT NULL REFERENCES personas(id) ON DELETE CASCADE,
  cargo_id UUID REFERENCES cargos(id) ON DELETE SET NULL,
  rol_operativo TEXT NOT NULL,
  es_lider BOOLEAN NOT NULL DEFAULT false,
  estado TEXT NOT NULL DEFAULT 'activa',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS evaluaciones_competencia (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  persona_id UUID NOT NULL REFERENCES personas(id) ON DELETE CASCADE,
  competencia_minima_id UUID REFERENCES competencias_minimas(id) ON DELETE SET NULL,
  actividad_servicio_id UUID REFERENCES actividades_servicios(id) ON DELETE SET NULL,
  evaluador_usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  fecha_evaluacion DATE NOT NULL,
  resultado TEXT NOT NULL CHECK (resultado IN ('cumple', 'parcial', 'no_cumple')),
  observaciones TEXT,
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  proxima_evaluacion DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS compromisos_personal (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  persona_id UUID NOT NULL REFERENCES personas(id) ON DELETE CASCADE,
  sistema_gestion_id UUID NOT NULL REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  fecha_firma DATE NOT NULL,
  cargo_funcion TEXT,
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  observaciones TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (persona_id, sistema_gestion_id)
);

CREATE TABLE IF NOT EXISTS necesidades_capacitacion (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sistema_gestion_id UUID NOT NULL REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  requisito_id UUID REFERENCES requisitos_normativos(id) ON DELETE SET NULL,
  actividad_servicio_id UUID REFERENCES actividades_servicios(id) ON DELETE SET NULL,
  cargo_id UUID REFERENCES cargos(id) ON DELETE SET NULL,
  persona_id UUID REFERENCES personas(id) ON DELETE SET NULL,
  tema TEXT NOT NULL,
  prioridad prioridad_gestion NOT NULL DEFAULT 'media',
  origen TEXT NOT NULL DEFAULT 'agente',
  justificacion TEXT,
  estado estado_gestion NOT NULL DEFAULT 'pendiente',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS programas_capacitacion (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sistema_gestion_id UUID NOT NULL REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  periodo_inicio DATE,
  periodo_fin DATE,
  responsable_usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  estado estado_gestion NOT NULL DEFAULT 'borrador',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS capacitaciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  programa_capacitacion_id UUID REFERENCES programas_capacitacion(id) ON DELETE SET NULL,
  sistema_gestion_id UUID NOT NULL REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  necesidad_capacitacion_id UUID REFERENCES necesidades_capacitacion(id) ON DELETE SET NULL,
  requisito_id UUID REFERENCES requisitos_normativos(id) ON DELETE SET NULL,
  tema TEXT NOT NULL,
  objetivo TEXT,
  instructor TEXT,
  modalidad TEXT,
  fecha_programada DATE,
  fecha_ejecucion DATE,
  duracion_horas NUMERIC(6, 2),
  estado estado_gestion NOT NULL DEFAULT 'programada',
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS capacitacion_asistentes (
  capacitacion_id UUID NOT NULL REFERENCES capacitaciones(id) ON DELETE CASCADE,
  persona_id UUID NOT NULL REFERENCES personas(id) ON DELETE CASCADE,
  asistio BOOLEAN NOT NULL DEFAULT false,
  observaciones TEXT,
  PRIMARY KEY (capacitacion_id, persona_id)
);

CREATE TABLE IF NOT EXISTS evaluaciones_capacitacion (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  capacitacion_id UUID NOT NULL REFERENCES capacitaciones(id) ON DELETE CASCADE,
  persona_id UUID REFERENCES personas(id) ON DELETE SET NULL,
  resultado TEXT NOT NULL CHECK (resultado IN ('aprobado', 'no_aprobado', 'pendiente', 'no_aplica')),
  calificacion NUMERIC(6, 2),
  observaciones TEXT,
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS certificados_competencia (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  persona_id UUID NOT NULL REFERENCES personas(id) ON DELETE CASCADE,
  competencia_minima_id UUID REFERENCES competencias_minimas(id) ON DELETE SET NULL,
  capacitacion_id UUID REFERENCES capacitaciones(id) ON DELETE SET NULL,
  nombre TEXT NOT NULL,
  entidad_emisora TEXT,
  fecha_emision DATE,
  fecha_vencimiento DATE,
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  estado estado_gestion NOT NULL DEFAULT 'implementada',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS equipos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  actividad_servicio_id UUID REFERENCES actividades_servicios(id) ON DELETE SET NULL,
  codigo TEXT,
  nombre TEXT NOT NULL,
  tipo TEXT,
  marca_modelo TEXT,
  estado TEXT NOT NULL DEFAULT 'operativo',
  responsable_persona_id UUID REFERENCES personas(id) ON DELETE SET NULL,
  fecha_ultima_revision DATE,
  fecha_proxima_revision DATE,
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (organizacion_id, codigo)
);

CREATE TABLE IF NOT EXISTS inspecciones_equipos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  equipo_id UUID NOT NULL REFERENCES equipos(id) ON DELETE CASCADE,
  fecha_inspeccion DATE NOT NULL,
  resultado TEXT NOT NULL CHECK (resultado IN ('operativo', 'requiere_mantenimiento', 'fuera_servicio')),
  hallazgos TEXT,
  responsable_usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  proxima_inspeccion DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS mantenimientos_equipos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  equipo_id UUID NOT NULL REFERENCES equipos(id) ON DELETE CASCADE,
  tipo TEXT NOT NULL DEFAULT 'preventivo',
  fecha_programada DATE,
  fecha_realizada DATE,
  descripcion TEXT NOT NULL,
  proveedor TEXT,
  responsable_usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  estado estado_gestion NOT NULL DEFAULT 'programada',
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  proximo_mantenimiento DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS polizas_seguro (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  sistema_gestion_id UUID REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  numero_poliza TEXT NOT NULL,
  aseguradora TEXT NOT NULL,
  tipo_cobertura TEXT NOT NULL,
  descripcion_cobertura TEXT,
  fecha_inicio DATE,
  fecha_fin DATE NOT NULL,
  estado TEXT NOT NULL DEFAULT 'vigente',
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (organizacion_id, numero_poliza)
);

CREATE TABLE IF NOT EXISTS poliza_actividades (
  poliza_id UUID NOT NULL REFERENCES polizas_seguro(id) ON DELETE CASCADE,
  actividad_servicio_id UUID NOT NULL REFERENCES actividades_servicios(id) ON DELETE CASCADE,
  observaciones TEXT,
  PRIMARY KEY (poliza_id, actividad_servicio_id)
);

CREATE TABLE IF NOT EXISTS participantes_evidencia_externa (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  actividad_servicio_id UUID REFERENCES actividades_servicios(id) ON DELETE SET NULL,
  fecha_actividad DATE,
  tipo_evidencia TEXT NOT NULL DEFAULT 'formulario_externo',
  descripcion TEXT,
  url_externa TEXT,
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  consentimiento_recibido BOOLEAN NOT NULL DEFAULT false,
  estado_recepcion TEXT NOT NULL DEFAULT 'pendiente',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS incidentes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sistema_gestion_id UUID NOT NULL REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  actividad_servicio_id UUID REFERENCES actividades_servicios(id) ON DELETE SET NULL,
  fecha_hora TIMESTAMPTZ NOT NULL,
  ubicacion TEXT,
  descripcion TEXT NOT NULL,
  respuesta_inmediata TEXT,
  causas_probables TEXT,
  consecuencias TEXT,
  equipo_id UUID REFERENCES equipos(id) ON DELETE SET NULL,
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  incorporado_mapa_riesgos BOOLEAN NOT NULL DEFAULT false,
  estado estado_gestion NOT NULL DEFAULT 'pendiente',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS simulacros (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sistema_gestion_id UUID NOT NULL REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  actividad_servicio_id UUID REFERENCES actividades_servicios(id) ON DELETE SET NULL,
  tipo TEXT NOT NULL,
  fecha DATE,
  participantes TEXT,
  resultados TEXT,
  lecciones_aprendidas TEXT,
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  estado estado_gestion NOT NULL DEFAULT 'implementada',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS acciones_gestion (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  sistema_gestion_id UUID REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  requisito_id UUID REFERENCES requisitos_normativos(id) ON DELETE SET NULL,
  tipo tipo_accion_gestion NOT NULL DEFAULT 'tarea',
  origen_tipo TEXT NOT NULL DEFAULT 'agente',
  origen_id UUID,
  titulo TEXT NOT NULL,
  descripcion TEXT,
  causa TEXT,
  correccion_inmediata TEXT,
  accion_propuesta TEXT NOT NULL,
  responsable_usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  responsable_persona_id UUID REFERENCES personas(id) ON DELETE SET NULL,
  prioridad prioridad_gestion NOT NULL DEFAULT 'media',
  fecha_apertura DATE NOT NULL DEFAULT CURRENT_DATE,
  fecha_limite DATE,
  fecha_cierre DATE,
  estado estado_gestion NOT NULL DEFAULT 'pendiente',
  verificacion_eficacia TEXT,
  eficaz BOOLEAN,
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  requiere_aprobacion BOOLEAN NOT NULL DEFAULT false,
  aprobado_por_usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS seguimientos_acciones_gestion (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  accion_gestion_id UUID NOT NULL REFERENCES acciones_gestion(id) ON DELETE CASCADE,
  fecha_seguimiento DATE NOT NULL DEFAULT CURRENT_DATE,
  descripcion TEXT NOT NULL,
  estado_resultante estado_gestion,
  porcentaje_avance INT CHECK (porcentaje_avance BETWEEN 0 AND 100),
  verificacion_eficacia TEXT,
  eficaz BOOLEAN,
  usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE revisiones_direccion
  ADD COLUMN IF NOT EXISTS estado_acciones_previas TEXT,
  ADD COLUMN IF NOT EXISTS cambios_contexto TEXT,
  ADD COLUMN IF NOT EXISTS resumen_no_conformidades TEXT,
  ADD COLUMN IF NOT EXISTS resumen_medicion_seguimiento TEXT,
  ADD COLUMN IF NOT EXISTS resumen_auditorias TEXT,
  ADD COLUMN IF NOT EXISTS resumen_incidentes TEXT,
  ADD COLUMN IF NOT EXISTS resumen_capacitaciones TEXT,
  ADD COLUMN IF NOT EXISTS resumen_competencias TEXT,
  ADD COLUMN IF NOT EXISTS recursos_requeridos TEXT,
  ADD COLUMN IF NOT EXISTS nuevas_capacitaciones TEXT,
  ADD COLUMN IF NOT EXISTS cambios_sistema TEXT,
  ADD COLUMN IF NOT EXISTS evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS aprobado_por_usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS fecha_aprobacion DATE;

CREATE TABLE IF NOT EXISTS formularios_definicion (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo TEXT NOT NULL UNIQUE,
  nombre TEXT NOT NULL,
  modulo TEXT NOT NULL,
  requisito_id UUID REFERENCES requisitos_normativos(id) ON DELETE SET NULL,
  version TEXT NOT NULL DEFAULT '1',
  campos JSONB NOT NULL DEFAULT '[]'::jsonb,
  activo BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS formularios_respuesta (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  formulario_definicion_id UUID NOT NULL REFERENCES formularios_definicion(id) ON DELETE CASCADE,
  organizacion_id UUID NOT NULL REFERENCES organizaciones(id) ON DELETE CASCADE,
  sistema_gestion_id UUID REFERENCES sistemas_gestion(id) ON DELETE CASCADE,
  actividad_servicio_id UUID REFERENCES actividades_servicios(id) ON DELETE SET NULL,
  entidad_tipo TEXT,
  entidad_id UUID,
  respuestas JSONB NOT NULL DEFAULT '{}'::jsonb,
  evidencia_id UUID REFERENCES evidencias(id) ON DELETE SET NULL,
  estado estado_gestion NOT NULL DEFAULT 'borrador',
  creado_por_usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_requisito_phva_etapa ON requisito_phva_mapeo(etapa);
CREATE INDEX IF NOT EXISTS idx_personas_organizacion ON personas(organizacion_id);
CREATE INDEX IF NOT EXISTS idx_asignaciones_personal_actividad ON asignaciones_personal(actividad_servicio_id);
CREATE INDEX IF NOT EXISTS idx_capacitaciones_sistema_estado ON capacitaciones(sistema_gestion_id, estado);
CREATE INDEX IF NOT EXISTS idx_certificados_vencimiento ON certificados_competencia(fecha_vencimiento);
CREATE INDEX IF NOT EXISTS idx_equipos_actividad_estado ON equipos(actividad_servicio_id, estado);
CREATE INDEX IF NOT EXISTS idx_mantenimientos_estado_fecha ON mantenimientos_equipos(estado, fecha_programada);
CREATE INDEX IF NOT EXISTS idx_polizas_vencimiento ON polizas_seguro(fecha_fin, estado);
CREATE INDEX IF NOT EXISTS idx_participantes_actividad ON participantes_evidencia_externa(actividad_servicio_id);
CREATE INDEX IF NOT EXISTS idx_acciones_gestion_estado ON acciones_gestion(sistema_gestion_id, estado);
CREATE INDEX IF NOT EXISTS idx_acciones_gestion_origen ON acciones_gestion(origen_tipo, origen_id);
CREATE INDEX IF NOT EXISTS idx_formularios_modulo ON formularios_definicion(modulo);
