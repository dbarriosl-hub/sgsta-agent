window.formMatrix = [
  {
    "form": "Organizaciones",
    "code": "FORM-ORGANIZACIONES",
    "table": "organizaciones",
    "module": "empresa",
    "requirement": "4.1",
    "phva": "planear",
    "fields": [
      "id",
      "nombre",
      "nit",
      "direccion",
      "correo_contacto",
      "fecha_creacion"
    ],
    "relatedTables": [
      "usuarios",
      "sistemas_gestion",
      "personas",
      "documentos",
      "evidencias"
    ],
    "evidence": "Registro diligenciado de Organizaciones",
    "agentAction": "Preparar contexto, alcance y datos base de la organizacion."
  },
  {
    "form": "Usuarios",
    "code": "FORM-USUARIOS",
    "table": "usuarios",
    "module": "usuarios",
    "requirement": "5.3",
    "phva": "planear",
    "fields": [
      "id",
      "nombre",
      "correo",
      "contrasena_hash",
      "rol",
      "id_organizacion"
    ],
    "relatedTables": [
      "organizaciones",
      "usuario_roles",
      "acciones_gestion",
      "evidencias"
    ],
    "evidence": "Registro diligenciado de Usuarios",
    "agentAction": "Asignar responsables y validar roles del sistema."
  },
  {
    "form": "Capitulos Iso",
    "code": "FORM-CAPITULOS-ISO",
    "table": "capitulos_iso",
    "module": "norma",
    "requirement": "4.4",
    "phva": "planear",
    "fields": [
      "id",
      "codigo",
      "titulo"
    ],
    "relatedTables": [
      "normas",
      "norma_versiones",
      "requisitos_normativos"
    ],
    "evidence": "Registro diligenciado de Capitulos Iso",
    "agentAction": "Conectar registros con requisitos normativos y PHVA."
  },
  {
    "form": "Compromiso Liderazgo",
    "code": "FORM-COMPROMISO-LIDERAZGO",
    "table": "compromiso_liderazgo",
    "module": "liderazgo",
    "requirement": "5.1",
    "phva": "planear",
    "fields": [
      "id",
      "id_organizacion",
      "id_usuario",
      "nombre_empresa",
      "nit",
      "nombre_representante",
      "cargo_representante",
      "fecha_firma",
      "firma_imagen_url",
      "archivo_adjunto",
      "fecha_creacion",
      "fecha_actualizacion",
      "estado"
    ],
    "relatedTables": [
      "organizaciones",
      "usuarios",
      "evidencias",
      "acciones_gestion"
    ],
    "evidence": "Registro diligenciado de Compromiso Liderazgo",
    "agentAction": "Preparar borradores para aprobacion de la direccion."
  },
  {
    "form": "Contexto Interno Externo",
    "code": "FORM-CONTEXTO-INTERNO-EXTERNO",
    "table": "contexto_interno_externo",
    "module": "planificacion",
    "requirement": "4.1",
    "phva": "planear",
    "fields": [
      "id",
      "id_organizacion",
      "id_usuario",
      "alcance",
      "contexto_social_cultural",
      "contexto_politico_legal",
      "contexto_economico",
      "contexto_geografico_ambiental",
      "tendencias",
      "partes_interesadas",
      "vision",
      "mision",
      "valores",
      "organigrama",
      "objetivos",
      "politica",
      "cultura",
      "capacidades_personal",
      "equipos_utilizados",
      "procesos",
      "sistemas_informacion",
      "relaciones_contratuales",
      "objetivos_gestion_riesgo",
      "relacion_sgsst",
      "metodologias_riesgo",
      "archivo_adjunto",
      "fecha_creacion",
      "fecha_actualizacion",
      "estado"
    ],
    "relatedTables": [
      "organizaciones",
      "usuarios",
      "evidencias"
    ],
    "evidence": "Registro diligenciado de Contexto Interno Externo",
    "agentAction": "Detectar brechas de contexto, alcance y partes interesadas."
  },
  {
    "form": "Contexto Actividades",
    "code": "FORM-CONTEXTO-ACTIVIDADES",
    "table": "contexto_actividades",
    "module": "actividades",
    "requirement": "4.3",
    "phva": "planear",
    "fields": [
      "id",
      "id_organizacion",
      "nombre_actividad",
      "descripcion",
      "fecha_inicio",
      "fecha_fin",
      "riesgo_asociado",
      "estado",
      "fecha_creacion"
    ],
    "relatedTables": [
      "organizaciones",
      "actividades_servicios",
      "riesgos"
    ],
    "evidence": "Registro diligenciado de Contexto Actividades",
    "agentAction": "Cruzar actividad, personal, equipos, riesgos y participantes."
  },
  {
    "form": "Impacto Riesgo",
    "code": "FORM-IMPACTO-RIESGO",
    "table": "impacto_riesgo",
    "module": "riesgos",
    "requirement": "6.1.2",
    "phva": "planear",
    "fields": [
      "valor",
      "categoria",
      "descripcion"
    ],
    "relatedTables": [
      "mapa_riesgos",
      "riesgos"
    ],
    "evidence": "Registro diligenciado de Impacto Riesgo",
    "agentAction": "Calcular brechas y proponer acciones preventivas."
  },
  {
    "form": "Probabilidad Riesgo",
    "code": "FORM-PROBABILIDAD-RIESGO",
    "table": "probabilidad_riesgo",
    "module": "riesgos",
    "requirement": "6.1.2",
    "phva": "planear",
    "fields": [
      "valor",
      "categoria",
      "descripcion"
    ],
    "relatedTables": [
      "mapa_riesgos",
      "riesgos"
    ],
    "evidence": "Registro diligenciado de Probabilidad Riesgo",
    "agentAction": "Calcular brechas y proponer acciones preventivas."
  },
  {
    "form": "Mapa Riesgos",
    "code": "FORM-MAPA-RIESGOS",
    "table": "mapa_riesgos",
    "module": "riesgos",
    "requirement": "6.1.2",
    "phva": "planear",
    "fields": [
      "id",
      "id_organizacion",
      "id_usuario",
      "actividad",
      "peligro",
      "riesgo",
      "consecuencia",
      "impacto_inicial",
      "probabilidad_inicial",
      "nivel_riesgo_inicial",
      "control_accion",
      "impacto_residual",
      "probabilidad_residual",
      "nivel_riesgo_residual",
      "responsable_control",
      "estado_control",
      "fecha_creacion",
      "fecha_actualizacion"
    ],
    "relatedTables": [
      "sistemas_gestion",
      "actividades_servicios",
      "usuarios",
      "acciones_gestion",
      "evidencias"
    ],
    "evidence": "Registro diligenciado de Mapa Riesgos",
    "agentAction": "Calcular brechas y proponer acciones preventivas."
  },
  {
    "form": "Plantillas Documentos",
    "code": "FORM-PLANTILLAS-DOCUMENTOS",
    "table": "plantillas_documentos",
    "module": "documentos",
    "requirement": "7.5",
    "phva": "hacer",
    "fields": [
      "id",
      "codigo",
      "titulo",
      "tipo",
      "contenido",
      "aplicacion",
      "fecha_creacion"
    ],
    "relatedTables": [
      "documentos",
      "documento_versiones"
    ],
    "evidence": "Registro diligenciado de Plantillas Documentos",
    "agentAction": "Generar borradores, controlar versiones y asociar evidencias."
  },
  {
    "form": "Procedimientos Sgs",
    "code": "FORM-PROCEDIMIENTOS-SGS",
    "table": "procedimientos_sgs",
    "module": "documentos",
    "requirement": "4.4",
    "phva": "planear",
    "fields": [
      "id",
      "id_organizacion",
      "titulo",
      "codigo",
      "numeral_iso",
      "contenido",
      "archivo_adj",
      "responsable",
      "version",
      "fecha_aprobacion",
      "estado",
      "proxima_accion",
      "fecha_proxima_accion",
      "fecha_creacion"
    ],
    "relatedTables": [
      "organizaciones",
      "documentos",
      "procedimientos_implementados"
    ],
    "evidence": "Registro diligenciado de Procedimientos Sgs",
    "agentAction": "Generar borradores, controlar versiones y asociar evidencias."
  },
  {
    "form": "Politica Seguridad",
    "code": "FORM-POLITICA-SEGURIDAD",
    "table": "politica_seguridad",
    "module": "liderazgo",
    "requirement": "5.2",
    "phva": "planear",
    "fields": [
      "id",
      "id_organizacion",
      "id_usuario",
      "contenido",
      "fecha_firma",
      "firma_imagen_url",
      "archivo_adjunto",
      "fecha_creacion",
      "fecha_actualizacion",
      "estado"
    ],
    "relatedTables": [
      "organizaciones",
      "usuarios",
      "documentos",
      "evidencias"
    ],
    "evidence": "Registro diligenciado de Politica Seguridad",
    "agentAction": "Preparar borradores para aprobacion de la direccion."
  },
  {
    "form": "Roles Responsabilidades",
    "code": "FORM-ROLES-RESPONSABILIDADES",
    "table": "roles_responsabilidades",
    "module": "personal",
    "requirement": "5.3",
    "phva": "planear",
    "fields": [
      "id",
      "id_organizacion",
      "id_usuario",
      "nombre_rol",
      "responsabilidades",
      "autoridad",
      "fecha_creacion",
      "fecha_actualizacion"
    ],
    "relatedTables": [
      "organizaciones",
      "usuarios",
      "personas",
      "cargos"
    ],
    "evidence": "Registro diligenciado de Roles Responsabilidades",
    "agentAction": "Detectar brechas de competencia, conciencia y asignacion."
  },
  {
    "form": "Normograma",
    "code": "FORM-NORMOGRAMA",
    "table": "normograma",
    "module": "legal",
    "requirement": "6.1.3",
    "phva": "planear",
    "fields": [
      "id",
      "id_organizacion",
      "id_usuario",
      "tipo_norma",
      "numero_norma",
      "titulo",
      "entidad_emisora",
      "fecha_emision",
      "fecha_vigencia",
      "aplicabilidad",
      "responsable_cumplimiento",
      "medio_verificacion",
      "estado_cumplimiento",
      "enlace_norma",
      "fecha_creacion",
      "fecha_actualizacion"
    ],
    "relatedTables": [
      "organizaciones",
      "usuarios",
      "requisitos_normativos",
      "acciones_gestion"
    ],
    "evidence": "Registro diligenciado de Normograma",
    "agentAction": "Alertar vencimientos y requisitos legales sin evidencia."
  },
  {
    "form": "Politica Sgs",
    "code": "FORM-POLITICA-SGS",
    "table": "politica_sgs",
    "module": "liderazgo",
    "requirement": "5.2",
    "phva": "planear",
    "fields": [
      "id",
      "id_organizacion",
      "id_usuario",
      "contenido",
      "fecha_firma",
      "archivo_adjunto",
      "fecha_creacion",
      "fecha_actualizacion",
      "estado"
    ],
    "relatedTables": [
      "organizaciones",
      "usuarios",
      "objetivos_sgs",
      "documentos"
    ],
    "evidence": "Registro diligenciado de Politica Sgs",
    "agentAction": "Preparar borradores para aprobacion de la direccion."
  },
  {
    "form": "Objetivos Sgs",
    "code": "FORM-OBJETIVOS-SGS",
    "table": "objetivos_sgs",
    "module": "objetivos",
    "requirement": "6.2",
    "phva": "planear",
    "fields": [
      "id",
      "id_politica",
      "objetivo",
      "indicador",
      "meta"
    ],
    "relatedTables": [
      "politica_sgs",
      "plan_objetivos_sgs",
      "seguimiento_medicion"
    ],
    "evidence": "Registro diligenciado de Objetivos Sgs",
    "agentAction": "Preparar planes, indicadores y seguimiento de objetivos."
  },
  {
    "form": "Plan Objetivos Sgs",
    "code": "FORM-PLAN-OBJETIVOS-SGS",
    "table": "plan_objetivos_sgs",
    "module": "objetivos",
    "requirement": "6.2",
    "phva": "planear",
    "fields": [
      "id",
      "id_objetivo",
      "que_se_hara",
      "recursos",
      "responsable",
      "cuando",
      "como_se_evaluara"
    ],
    "relatedTables": [
      "objetivos_sgs",
      "acciones_gestion",
      "seguimiento_medicion"
    ],
    "evidence": "Registro diligenciado de Plan Objetivos Sgs",
    "agentAction": "Preparar planes, indicadores y seguimiento de objetivos."
  },
  {
    "form": "Cargos",
    "code": "FORM-CARGOS",
    "table": "cargos",
    "module": "personal",
    "requirement": "5.3",
    "phva": "planear",
    "fields": [
      "id",
      "nombre",
      "descripcion",
      "fecha_creacion"
    ],
    "relatedTables": [
      "personas",
      "competencias_minimas",
      "asignaciones_personal"
    ],
    "evidence": "Registro diligenciado de Cargos",
    "agentAction": "Detectar brechas de competencia, conciencia y asignacion."
  },
  {
    "form": "Competencias Minimas",
    "code": "FORM-COMPETENCIAS-MINIMAS",
    "table": "competencias_minimas",
    "module": "personal",
    "requirement": "7.2",
    "phva": "hacer",
    "fields": [
      "id",
      "id_cargo",
      "competencia",
      "fuente_normativa",
      "observaciones"
    ],
    "relatedTables": [
      "cargos",
      "evaluaciones_competencia",
      "certificados_competencia"
    ],
    "evidence": "Registro diligenciado de Competencias Minimas",
    "agentAction": "Detectar brechas de competencia, conciencia y asignacion."
  },
  {
    "form": "Personas",
    "code": "FORM-PERSONAS",
    "table": "personas",
    "module": "personal",
    "requirement": "7.2",
    "phva": "hacer",
    "fields": [
      "id",
      "id_organizacion",
      "nombre_completo",
      "numero_identificacion",
      "tipo_identificacion",
      "telefono",
      "correo_electronico",
      "perfil_general",
      "fecha_creacion"
    ],
    "relatedTables": [
      "organizaciones",
      "cargos",
      "asignaciones_personal",
      "capacitacion_asistentes",
      "certificados_competencia"
    ],
    "evidence": "Registro diligenciado de Personas",
    "agentAction": "Detectar brechas de competencia, conciencia y asignacion."
  },
  {
    "form": "Compromiso Personal",
    "code": "FORM-COMPROMISO-PERSONAL",
    "table": "compromiso_personal",
    "module": "personal",
    "requirement": "7.3",
    "phva": "hacer",
    "fields": [
      "id",
      "id_persona",
      "id_organizacion",
      "cargo_funcion",
      "fecha_firma",
      "archivo_firma",
      "observaciones",
      "fecha_creacion"
    ],
    "relatedTables": [
      "personas",
      "sistemas_gestion",
      "evidencias"
    ],
    "evidence": "Registro diligenciado de Compromiso Personal",
    "agentAction": "Detectar brechas de competencia, conciencia y asignacion."
  },
  {
    "form": "Plan Comunicaciones",
    "code": "FORM-PLAN-COMUNICACIONES",
    "table": "plan_comunicaciones",
    "module": "comunicaciones",
    "requirement": "7.4",
    "phva": "hacer",
    "fields": [],
    "relatedTables": [
      "organizaciones",
      "registro_comunicaciones_seguridad"
    ],
    "evidence": "Registro diligenciado de Plan Comunicaciones",
    "agentAction": "Validar comunicaciones requeridas y evidencias."
  },
  {
    "form": "Registro Comunicaciones Seguridad",
    "code": "FORM-REGISTRO-COMUNICACIONES-SEGURIDAD",
    "table": "registro_comunicaciones_seguridad",
    "module": "comunicaciones",
    "requirement": "7.4",
    "phva": "hacer",
    "fields": [],
    "relatedTables": [
      "organizaciones",
      "plan_comunicaciones",
      "evidencias"
    ],
    "evidence": "Registro diligenciado de Registro Comunicaciones Seguridad",
    "agentAction": "Validar comunicaciones requeridas y evidencias."
  },
  {
    "form": "Documentos Controlados",
    "code": "FORM-DOCUMENTOS-CONTROLADOS",
    "table": "documentos_controlados",
    "module": "documentos",
    "requirement": "7.5",
    "phva": "hacer",
    "fields": [
      "id",
      "id_organizacion",
      "titulo",
      "codigo",
      "tipo_documento",
      "version",
      "fecha_emision",
      "autor",
      "formato",
      "medio",
      "ubicacion",
      "estado",
      "control_cambios",
      "origen",
      "acceso",
      "restricciones_acceso",
      "responsable_aprobacion",
      "fecha_aprobacion",
      "retencion_minima",
      "disposicion_final",
      "fecha_creacion_registro"
    ],
    "relatedTables": [
      "organizaciones",
      "documentacion_minima",
      "documentos",
      "documento_versiones"
    ],
    "evidence": "Registro diligenciado de Documentos Controlados",
    "agentAction": "Generar borradores, controlar versiones y asociar evidencias."
  },
  {
    "form": "Documentacion Minima",
    "code": "FORM-DOCUMENTACION-MINIMA",
    "table": "documentacion_minima",
    "module": "documentos",
    "requirement": "7.5",
    "phva": "hacer",
    "fields": [
      "id",
      "numeral_iso",
      "tipo",
      "descripcion",
      "obligatorio"
    ],
    "relatedTables": [
      "documentos_controlados",
      "requisitos_normativos"
    ],
    "evidence": "Registro diligenciado de Documentacion Minima",
    "agentAction": "Generar borradores, controlar versiones y asociar evidencias."
  },
  {
    "form": "Politica Datos Personales",
    "code": "FORM-POLITICA-DATOS-PERSONALES",
    "table": "politica_datos_personales",
    "module": "participantes",
    "requirement": "7.4",
    "phva": "hacer",
    "fields": [],
    "relatedTables": [
      "organizaciones",
      "participantes_evidencia_externa"
    ],
    "evidence": "Registro diligenciado de Politica Datos Personales",
    "agentAction": "Registrar soporte externo sin guardar datos sensibles."
  },
  {
    "form": "Bitacora Actividades",
    "code": "FORM-BITACORA-ACTIVIDADES",
    "table": "bitacora_actividades",
    "module": "actividades",
    "requirement": "8.1",
    "phva": "hacer",
    "fields": [],
    "relatedTables": [
      "organizaciones",
      "actividades_servicios",
      "personas",
      "registro_participantes_evidencia"
    ],
    "evidence": "Registro diligenciado de Bitacora Actividades",
    "agentAction": "Cruzar actividad, personal, equipos, riesgos y participantes."
  },
  {
    "form": "Procedimientos Servicio",
    "code": "FORM-PROCEDIMIENTOS-SERVICIO",
    "table": "procedimientos_servicio",
    "module": "actividades",
    "requirement": "8.1",
    "phva": "hacer",
    "fields": [],
    "relatedTables": [
      "organizaciones",
      "actividades_servicios",
      "documentos"
    ],
    "evidence": "Registro diligenciado de Procedimientos Servicio",
    "agentAction": "Cruzar actividad, personal, equipos, riesgos y participantes."
  },
  {
    "form": "Equipos",
    "code": "FORM-EQUIPOS",
    "table": "equipos",
    "module": "equipos",
    "requirement": "7.1",
    "phva": "hacer",
    "fields": [],
    "relatedTables": [
      "organizaciones",
      "actividades_servicios",
      "personas",
      "inspecciones_equipos",
      "mantenimientos_equipos"
    ],
    "evidence": "Registro diligenciado de Equipos",
    "agentAction": "Alertar inspecciones, mantenimientos y equipos no operativos."
  },
  {
    "form": "Plan Emergencia",
    "code": "FORM-PLAN-EMERGENCIA",
    "table": "plan_emergencia",
    "module": "emergencias",
    "requirement": "8.2",
    "phva": "hacer",
    "fields": [
      "id",
      "id_organizacion",
      "id_actividad",
      "ubicacion_operacion",
      "riesgos_emergencias",
      "consecuencias",
      "procedimientos",
      "roles_personal",
      "evacuacion_heridos",
      "personal_capacitado",
      "equipos_disponibles",
      "entidades_contacto",
      "gestion_datos_participantes",
      "proteccion_datos",
      "frecuencia_simulacros",
      "registro_simulacros",
      "comunicacion_participantes",
      "revision_mejora",
      "proxima_accion",
      "fecha_proxima_accion",
      "fecha_creacion"
    ],
    "relatedTables": [
      "organizaciones",
      "actividades_servicios",
      "simulacros",
      "documentos"
    ],
    "evidence": "Registro diligenciado de Plan Emergencia",
    "agentAction": "Preparar planes, simulacros y acciones derivadas."
  },
  {
    "form": "Simulacros",
    "code": "FORM-SIMULACROS",
    "table": "simulacros",
    "module": "emergencias",
    "requirement": "8.2",
    "phva": "hacer",
    "fields": [
      "id",
      "id_organizacion",
      "id_actividad",
      "id_plan_emergencia",
      "tipo_simulacro",
      "fecha_simulacro",
      "participantes",
      "descripcion",
      "resultados",
      "proxima_accion",
      "fecha_proxima_accion",
      "archivo_evidencia",
      "fecha_creacion"
    ],
    "relatedTables": [
      "sistemas_gestion",
      "actividades_servicios",
      "plan_emergencia",
      "acciones_gestion"
    ],
    "evidence": "Registro diligenciado de Simulacros",
    "agentAction": "Preparar planes, simulacros y acciones derivadas."
  },
  {
    "form": "Simulacro Evidencias",
    "code": "FORM-SIMULACRO-EVIDENCIAS",
    "table": "simulacro_evidencias",
    "module": "emergencias",
    "requirement": "8.2",
    "phva": "hacer",
    "fields": [
      "id",
      "id_simulacro",
      "tipo_archivo",
      "descripcion",
      "url_archivo",
      "fecha_subida"
    ],
    "relatedTables": [
      "simulacros",
      "evidencias",
      "acciones_gestion"
    ],
    "evidence": "Registro diligenciado de Simulacro Evidencias",
    "agentAction": "Preparar planes, simulacros y acciones derivadas."
  },
  {
    "form": "Registro Participantes Evidencia",
    "code": "FORM-REGISTRO-PARTICIPANTES-EVIDENCIA",
    "table": "registro_participantes_evidencia",
    "module": "participantes",
    "requirement": "7.4",
    "phva": "hacer",
    "fields": [
      "id",
      "id_bitacora",
      "tipo_evidencia",
      "descripcion",
      "url_evidencia",
      "fecha_creacion"
    ],
    "relatedTables": [
      "bitacora_actividades",
      "actividades_servicios",
      "evidencias"
    ],
    "evidence": "Registro diligenciado de Registro Participantes Evidencia",
    "agentAction": "Registrar soporte externo sin guardar datos sensibles."
  },
  {
    "form": "Registro Incidentes",
    "code": "FORM-REGISTRO-INCIDENTES",
    "table": "registro_incidentes",
    "module": "incidentes",
    "requirement": "8.3",
    "phva": "hacer",
    "fields": [
      "id",
      "id_organizacion",
      "id_actividad",
      "fecha_hora_incidente",
      "ubicacion",
      "personas_involucradas",
      "condiciones_ambientales",
      "equipo_asociado",
      "descripcion_incidente",
      "causas_probables",
      "respuesta_emergencia",
      "consecuencias",
      "medidas_correctivas",
      "fuente_informacion",
      "archivo_evidencia",
      "incorporado_mapa_riesgos",
      "proxima_accion",
      "fecha_proxima_accion",
      "fecha_registro"
    ],
    "relatedTables": [
      "sistemas_gestion",
      "actividades_servicios",
      "equipos",
      "acciones_gestion",
      "evidencias"
    ],
    "evidence": "Registro diligenciado de Registro Incidentes",
    "agentAction": "Crear acciones correctivas y actualizar riesgos."
  },
  {
    "form": "Acciones Sugeridas",
    "code": "FORM-ACCIONES-SUGERIDAS",
    "table": "acciones_sugeridas",
    "module": "mejora",
    "requirement": "10.2",
    "phva": "actuar",
    "fields": [
      "id",
      "id_incidente",
      "sugerencia",
      "fecha_sugerencia"
    ],
    "relatedTables": [
      "acciones_gestion",
      "requisitos_normativos",
      "evidencias"
    ],
    "evidence": "Registro diligenciado de Acciones Sugeridas",
    "agentAction": "Crear acciones, seguimientos y verificacion de eficacia."
  },
  {
    "form": "Seguimiento Medicion",
    "code": "FORM-SEGUIMIENTO-MEDICION",
    "table": "seguimiento_medicion",
    "module": "indicadores",
    "requirement": "9.1",
    "phva": "verificar",
    "fields": [
      "id",
      "id_organizacion",
      "id_actividad",
      "fecha_registro",
      "tipo_seguimiento",
      "indicador",
      "medicion",
      "observaciones",
      "acciones_a_tomar",
      "proxima_accion",
      "fecha_proxima_accion",
      "archivo_evidencia",
      "fecha_creacion"
    ],
    "relatedTables": [
      "organizaciones",
      "actividades_servicios",
      "objetivos_sgs",
      "acciones_gestion"
    ],
    "evidence": "Registro diligenciado de Seguimiento Medicion",
    "agentAction": "Consolidar mediciones para revision y mejora."
  },
  {
    "form": "Programa Auditorias",
    "code": "FORM-PROGRAMA-AUDITORIAS",
    "table": "programa_auditorias",
    "module": "auditorias",
    "requirement": "9.2",
    "phva": "verificar",
    "fields": [
      "id",
      "id_organizacion",
      "periodo",
      "proceso_auditar",
      "criterios_auditoria",
      "auditor_responsable",
      "alcance",
      "frecuencia",
      "observaciones",
      "fecha_planeada",
      "fecha_creacion"
    ],
    "relatedTables": [
      "sistemas_gestion",
      "auditorias"
    ],
    "evidence": "Registro diligenciado de Programa Auditorias",
    "agentAction": "Preparar programa, plan, hallazgos y acciones."
  },
  {
    "form": "Plan Auditoria",
    "code": "FORM-PLAN-AUDITORIA",
    "table": "plan_auditoria",
    "module": "auditorias",
    "requirement": "9.2",
    "phva": "verificar",
    "fields": [
      "id",
      "id_programa_auditoria",
      "fecha_auditoria",
      "dia",
      "hora_inicio",
      "hora_fin",
      "actividad",
      "lugar",
      "responsable_actividad",
      "observaciones",
      "fecha_creacion"
    ],
    "relatedTables": [
      "programa_auditorias",
      "auditorias"
    ],
    "evidence": "Registro diligenciado de Plan Auditoria",
    "agentAction": "Preparar programa, plan, hallazgos y acciones."
  },
  {
    "form": "Informe Auditoria Detalle",
    "code": "FORM-INFORME-AUDITORIA-DETALLE",
    "table": "informe_auditoria_detalle",
    "module": "auditorias",
    "requirement": "9.2",
    "phva": "verificar",
    "fields": [
      "id",
      "id_informe_auditoria",
      "numeral_norma",
      "requisito",
      "conforme",
      "evidencia"
    ],
    "relatedTables": [
      "informe_auditoria",
      "hallazgos_auditoria",
      "acciones_gestion"
    ],
    "evidence": "Registro diligenciado de Informe Auditoria Detalle",
    "agentAction": "Preparar programa, plan, hallazgos y acciones."
  },
  {
    "form": "Referencia Norma Iso21101",
    "code": "FORM-REFERENCIA-NORMA-ISO21101",
    "table": "referencia_norma_iso21101",
    "module": "norma",
    "requirement": "4.4",
    "phva": "planear",
    "fields": [
      "id",
      "capitulo",
      "numeral",
      "titulo",
      "requisito"
    ],
    "relatedTables": [
      "normas",
      "norma_versiones",
      "requisitos_normativos"
    ],
    "evidence": "Registro diligenciado de Referencia Norma Iso21101",
    "agentAction": "Conectar registros con requisitos normativos y PHVA."
  },
  {
    "form": "Acciones Correctivas",
    "code": "FORM-ACCIONES-CORRECTIVAS",
    "table": "acciones_correctivas",
    "module": "mejora",
    "requirement": "10.1",
    "phva": "actuar",
    "fields": [
      "id",
      "id_informe_auditoria",
      "origen",
      "descripcion_no_conformidad",
      "accion_propuesta",
      "responsable",
      "fecha_implementacion_esperada",
      "estado",
      "fecha_creacion"
    ],
    "relatedTables": [
      "acciones_gestion",
      "seguimientos_acciones_gestion",
      "evidencias"
    ],
    "evidence": "Registro diligenciado de Acciones Correctivas",
    "agentAction": "Crear acciones, seguimientos y verificacion de eficacia."
  },
  {
    "form": "Informe Auditoria",
    "code": "FORM-INFORME-AUDITORIA",
    "table": "informe_auditoria",
    "module": "auditorias",
    "requirement": "9.2",
    "phva": "verificar",
    "fields": [
      "id",
      "id_plan_auditoria",
      "auditor",
      "fecha_informe",
      "conclusiones",
      "recomendaciones",
      "archivo_soporte",
      "fecha_creacion"
    ],
    "relatedTables": [
      "plan_auditoria",
      "auditorias",
      "hallazgos_auditoria"
    ],
    "evidence": "Registro diligenciado de Informe Auditoria",
    "agentAction": "Preparar programa, plan, hallazgos y acciones."
  },
  {
    "form": "Seguimiento Acciones Correctivas",
    "code": "FORM-SEGUIMIENTO-ACCIONES-CORRECTIVAS",
    "table": "seguimiento_acciones_correctivas",
    "module": "mejora",
    "requirement": "10.1",
    "phva": "actuar",
    "fields": [
      "id",
      "id_accion_correctiva",
      "fecha_seguimiento",
      "descripcion_seguimiento",
      "estado_accion",
      "verificacion_eficacia",
      "usuario_seguimiento",
      "archivo_evidencia",
      "fecha_creacion"
    ],
    "relatedTables": [
      "acciones_gestion",
      "seguimientos_acciones_gestion",
      "evidencias"
    ],
    "evidence": "Registro diligenciado de Seguimiento Acciones Correctivas",
    "agentAction": "Crear acciones, seguimientos y verificacion de eficacia."
  },
  {
    "form": "Revision Direccion",
    "code": "FORM-REVISION-DIRECCION",
    "table": "revision_direccion",
    "module": "revision_direccion",
    "requirement": "9.3",
    "phva": "verificar",
    "fields": [
      "id",
      "id_organizacion",
      "fecha_revision",
      "estado_acciones_previas",
      "cambios_contexto",
      "resumen_no_conformidades",
      "resumen_medicion_seguimiento",
      "resumen_auditorias",
      "oportunidades_mejora",
      "decisiones_tomadas",
      "proxima_accion",
      "fecha_proxima_accion",
      "archivo_evidencia",
      "fecha_creacion"
    ],
    "relatedTables": [
      "revisiones_direccion",
      "acciones_gestion",
      "auditorias",
      "incidentes",
      "capacitaciones"
    ],
    "evidence": "Registro diligenciado de Revision Direccion",
    "agentAction": "Consolidar entradas y salidas para aprobacion directiva."
  },
  {
    "form": "Procedimientos Obligatorios",
    "code": "FORM-PROCEDIMIENTOS-OBLIGATORIOS",
    "table": "procedimientos_obligatorios",
    "module": "documentos",
    "requirement": "4.4",
    "phva": "planear",
    "fields": [
      "id",
      "codigo",
      "titulo",
      "numeral_iso",
      "descripcion",
      "obligatorio"
    ],
    "relatedTables": [
      "procedimientos_sgs",
      "procedimientos_implementados",
      "requisitos_normativos"
    ],
    "evidence": "Registro diligenciado de Procedimientos Obligatorios",
    "agentAction": "Generar borradores, controlar versiones y asociar evidencias."
  },
  {
    "form": "Procedimientos Implementados",
    "code": "FORM-PROCEDIMIENTOS-IMPLEMENTADOS",
    "table": "procedimientos_implementados",
    "module": "documentos",
    "requirement": "8.1",
    "phva": "hacer",
    "fields": [
      "id",
      "id_procedimiento_sgs",
      "id_procedimiento_obligatorio",
      "fecha_vinculacion",
      "cumple_requisitos",
      "comentarios"
    ],
    "relatedTables": [
      "procedimientos_sgs",
      "procedimientos_obligatorios",
      "documentos",
      "evidencias"
    ],
    "evidence": "Registro diligenciado de Procedimientos Implementados",
    "agentAction": "Generar borradores, controlar versiones y asociar evidencias."
  }
];
