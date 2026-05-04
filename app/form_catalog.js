window.formCatalog = [
  {
    "table": "organizaciones",
    "title": "Organizaciones",
    "requirement": "4.1",
    "description": "Informacion basica de cada organizacion registrada en el sistema.",
    "operation": "Creaciony gestion por Auth.",
    "notes": "Tabla de registro en el sistema para los usuarios. Tiene todo que ver con la autenticacion del usuario cliente. Esta tabla tambien relaciona todas las demas como llave.",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico de la organizacion.",
        "type": "TEXT"
      },
      {
        "name": "nombre",
        "label": "Nombre",
        "description": "Nombre legal de la organizacion.",
        "type": "TEXT"
      },
      {
        "name": "nit",
        "label": "Nit",
        "description": "Numero de identificacion tributaria.",
        "type": "TEXT"
      },
      {
        "name": "direccion",
        "label": "Direccion",
        "description": "Direccion principal.",
        "type": "TEXT"
      },
      {
        "name": "correo_contacto",
        "label": "Correo Contacto",
        "description": "Correo de contacto.",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de registro en el sistema.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "usuarios",
    "title": "Usuarios",
    "requirement": "5.3",
    "description": "Tabla de usuarios con su rol y vinculacion a una organizacion.",
    "operation": "",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador del usuario.",
        "type": "TEXT"
      },
      {
        "name": "nombre",
        "label": "Nombre",
        "description": "Nombre del usuario.",
        "type": "TEXT"
      },
      {
        "name": "correo",
        "label": "Correo",
        "description": "Correo electronico.",
        "type": "TEXT"
      },
      {
        "name": "contrasena_hash",
        "label": "Contrasena Hash",
        "description": "Contrasena en formato hash.",
        "type": "TEXT"
      },
      {
        "name": "rol",
        "label": "Rol",
        "description": "Rol del usuario en el sistema.",
        "type": "TEXT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion a la que esta asociado.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "capitulos_iso",
    "title": "Capitulos Iso",
    "requirement": "4.4",
    "description": "Capitulos de la norma ISO 21101 con su codigo y titulo.",
    "operation": "Tabla de referencia",
    "notes": "Llenar con los capitulos de la ISO 21101",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador del capitulo (clave primaria).",
        "type": "TEXT"
      },
      {
        "name": "codigo",
        "label": "Codigo",
        "description": "Codigo del capitulo de la norma (ej: 4.1, 5.2).",
        "type": "TEXT"
      },
      {
        "name": "titulo",
        "label": "Titulo",
        "description": "Titulo o nombre del capitulo.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "compromiso_liderazgo",
    "title": "Compromiso Liderazgo",
    "requirement": "5.1",
    "description": "Formulario R1 donde se registra el compromiso formal de la alta direccion.",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Un texto y su firma (la firma podria ser digital)",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador del registro.",
        "type": "TEXT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion que emite el compromiso.",
        "type": "TEXT"
      },
      {
        "name": "id_usuario",
        "label": "Id Usuario",
        "description": "Usuario que registra el compromiso.",
        "type": "TEXT"
      },
      {
        "name": "nombre_empresa",
        "label": "Nombre Empresa",
        "description": "Nombre legal de la empresa.",
        "type": "TEXT"
      },
      {
        "name": "nit",
        "label": "Nit",
        "description": "Numero de identificacion tributaria.",
        "type": "TEXT"
      },
      {
        "name": "nombre_representante",
        "label": "Nombre Representante",
        "description": "Nombre de la persona que representa la alta direccion.",
        "type": "TEXT"
      },
      {
        "name": "cargo_representante",
        "label": "Cargo Representante",
        "description": "Cargo del representante.",
        "type": "TEXT"
      },
      {
        "name": "fecha_firma",
        "label": "Fecha Firma",
        "description": "Fecha en que se firma el documento.",
        "type": "TEXT"
      },
      {
        "name": "firma_imagen_url",
        "label": "Firma Imagen Url",
        "description": "URL donde se almacena la firma en imagen.",
        "type": "TEXT"
      },
      {
        "name": "archivo_adjunto",
        "label": "Archivo Adjunto",
        "description": "Archivo PDF u original del compromiso firmado.",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de creacion del registro.",
        "type": "TEXT"
      },
      {
        "name": "fecha_actualizacion",
        "label": "Fecha Actualizacion",
        "description": "Fecha de ultima modificacion.",
        "type": "TEXT"
      },
      {
        "name": "estado",
        "label": "Estado",
        "description": "Estado del compromiso (borrador, firmado, etc.).",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "contexto_interno_externo",
    "title": "Contexto Interno Externo",
    "requirement": "4.1",
    "description": "Formulario R23 con informacion sobre contexto interno y externo de la organizacion.",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador del registro.",
        "type": "TEXT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion que describe su contexto.",
        "type": "TEXT"
      },
      {
        "name": "id_usuario",
        "label": "Id Usuario",
        "description": "Usuario que diligencia el contexto.",
        "type": "TEXT"
      },
      {
        "name": "alcance",
        "label": "Alcance",
        "description": "Descripcion del alcance de las actividades cubiertas.",
        "type": "TEXT"
      },
      {
        "name": "contexto_social_cultural",
        "label": "Contexto Social Cultural",
        "description": "Factores sociales y culturales externos.",
        "type": "TEXT"
      },
      {
        "name": "contexto_politico_legal",
        "label": "Contexto Politico Legal",
        "description": "Factores politicos y legales.",
        "type": "TEXT"
      },
      {
        "name": "contexto_economico",
        "label": "Contexto Economico",
        "description": "Factores economicos relevantes.",
        "type": "TEXT"
      },
      {
        "name": "contexto_geografico_ambiental",
        "label": "Contexto Geografico Ambiental",
        "description": "Factores ambientales y geograficos.",
        "type": "TEXT"
      },
      {
        "name": "tendencias",
        "label": "Tendencias",
        "description": "Tendencias que afectan los objetivos.",
        "type": "TEXT"
      },
      {
        "name": "partes_interesadas",
        "label": "Partes Interesadas",
        "description": "JSON con partes interesadas externas.",
        "type": "TEXT"
      },
      {
        "name": "vision",
        "label": "Vision",
        "description": "Vision organizacional.",
        "type": "TEXT"
      },
      {
        "name": "mision",
        "label": "Mision",
        "description": "Mision organizacional.",
        "type": "TEXT"
      },
      {
        "name": "valores",
        "label": "Valores",
        "description": "Valores fundamentales.",
        "type": "TEXT"
      },
      {
        "name": "organigrama",
        "label": "Organigrama",
        "description": "Estructura organizacional.",
        "type": "TEXT"
      },
      {
        "name": "objetivos",
        "label": "Objetivos",
        "description": "Objetivos del SGS.",
        "type": "TEXT"
      },
      {
        "name": "politica",
        "label": "Politica",
        "description": "Politica general.",
        "type": "TEXT"
      },
      {
        "name": "cultura",
        "label": "Cultura",
        "description": "Descripcion de la cultura organizacional.",
        "type": "TEXT"
      },
      {
        "name": "capacidades_personal",
        "label": "Capacidades Personal",
        "description": "Competencias y certificaciones del personal.",
        "type": "TEXT"
      },
      {
        "name": "equipos_utilizados",
        "label": "Equipos Utilizados",
        "description": "Inventario y tipos de equipos.",
        "type": "TEXT"
      },
      {
        "name": "procesos",
        "label": "Procesos",
        "description": "Principales procesos operativos.",
        "type": "TEXT"
      },
      {
        "name": "sistemas_informacion",
        "label": "Sistemas Informacion",
        "description": "Sistemas y canales de informacion.",
        "type": "TEXT"
      },
      {
        "name": "relaciones_contratuales",
        "label": "Relaciones Contratuales",
        "description": "Contratos internos relevantes.",
        "type": "TEXT"
      },
      {
        "name": "objetivos_gestion_riesgo",
        "label": "Objetivos Gestion Riesgo",
        "description": "Objetivos para la gestion de riesgos.",
        "type": "TEXT"
      },
      {
        "name": "relacion_sgsst",
        "label": "Relacion Sgsst",
        "description": "Vinculo con el sistema SGSST.",
        "type": "TEXT"
      },
      {
        "name": "metodologias_riesgo",
        "label": "Metodologias Riesgo",
        "description": "Metodologias usadas para evaluar riesgos.",
        "type": "TEXT"
      },
      {
        "name": "archivo_adjunto",
        "label": "Archivo Adjunto",
        "description": "Documento adjunto opcional.",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de creacion.",
        "type": "TEXT"
      },
      {
        "name": "fecha_actualizacion",
        "label": "Fecha Actualizacion",
        "description": "Ultima modificacion.",
        "type": "TEXT"
      },
      {
        "name": "estado",
        "label": "Estado",
        "description": "Estado del documento.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "contexto_actividades",
    "title": "Contexto Actividades",
    "requirement": "4.3",
    "description": "Lista de actividades ofrecidas por una organizacion en turismo de aventura",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Debe crearse antes de contexto o con currente (por ejemplo si van a",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico de la actividad",
        "type": "TEXT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion que declara la actividad",
        "type": "TEXT"
      },
      {
        "name": "nombre_actividad",
        "label": "Nombre Actividad",
        "description": "Nombre de la actividad turistica",
        "type": "TEXT"
      },
      {
        "name": "descripcion",
        "label": "Descripcion",
        "description": "Descripcion de la actividad",
        "type": "TEXT"
      },
      {
        "name": "fecha_inicio",
        "label": "Fecha Inicio",
        "description": "Fecha de inicio de operacion",
        "type": "TEXT"
      },
      {
        "name": "fecha_fin",
        "label": "Fecha Fin",
        "description": "Fecha de finalizacion, si aplica",
        "type": "TEXT"
      },
      {
        "name": "riesgo_asociado",
        "label": "Riesgo Asociado",
        "description": "Riesgos generales asociados a la actividad",
        "type": "TEXT"
      },
      {
        "name": "estado",
        "label": "Estado",
        "description": "Estado actual de la actividad: activa/inactiva",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de creacion del registro",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "impacto_riesgo",
    "title": "Impacto Riesgo",
    "requirement": "6.1.2",
    "description": "Tabla referencial que define categorias y descripciones del impacto del riesgo.",
    "operation": "Tabla de referencia",
    "notes": "",
    "fields": [
      {
        "name": "valor",
        "label": "Valor",
        "description": "Valor numerico del impacto (1 a 5).",
        "type": "TEXT"
      },
      {
        "name": "categoria",
        "label": "Categoria",
        "description": "Nombre de la categoria (ej. Critico).",
        "type": "TEXT"
      },
      {
        "name": "descripcion",
        "label": "Descripcion",
        "description": "Descripcion textual del nivel de impacto.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "probabilidad_riesgo",
    "title": "Probabilidad Riesgo",
    "requirement": "6.1.2",
    "description": "Tabla referencial que define categorias y descripciones de probabilidad del riesgo.",
    "operation": "Tabla de referencia",
    "notes": "",
    "fields": [
      {
        "name": "valor",
        "label": "Valor",
        "description": "Valor numerico de la probabilidad (1 a 5).",
        "type": "TEXT"
      },
      {
        "name": "categoria",
        "label": "Categoria",
        "description": "Nombre de la categoria (ej. Muy probable).",
        "type": "TEXT"
      },
      {
        "name": "descripcion",
        "label": "Descripcion",
        "description": "Descripcion textual del nivel de probabilidad.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "mapa_riesgos",
    "title": "Mapa Riesgos",
    "requirement": "6.1.2",
    "description": "Formulario R4 que registra la evaluacion de riesgos, controles y niveles de riesgo.",
    "operation": "Creacion de registros (Incluye calculos), edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador del registro.",
        "type": "TEXT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion responsable del riesgo.",
        "type": "TEXT"
      },
      {
        "name": "id_usuario",
        "label": "Id Usuario",
        "description": "Usuario que registra la informacion.",
        "type": "TEXT"
      },
      {
        "name": "actividad",
        "label": "Actividad",
        "description": "Nombre de la actividad evaluada.",
        "type": "TEXT"
      },
      {
        "name": "peligro",
        "label": "Peligro",
        "description": "Peligro identificado.",
        "type": "TEXT"
      },
      {
        "name": "riesgo",
        "label": "Riesgo",
        "description": "Descripcion del riesgo.",
        "type": "TEXT"
      },
      {
        "name": "consecuencia",
        "label": "Consecuencia",
        "description": "Consecuencia potencial.",
        "type": "TEXT"
      },
      {
        "name": "impacto_inicial",
        "label": "Impacto Inicial",
        "description": "Valor inicial del impacto (1 a 5).",
        "type": "TEXT"
      },
      {
        "name": "probabilidad_inicial",
        "label": "Probabilidad Inicial",
        "description": "Valor inicial de probabilidad (1 a 5).",
        "type": "TEXT"
      },
      {
        "name": "nivel_riesgo_inicial",
        "label": "Nivel Riesgo Inicial",
        "description": "Nivel calculado de riesgo antes del control.",
        "type": "TEXT"
      },
      {
        "name": "control_accion",
        "label": "Control Accion",
        "description": "Medidas propuestas o implementadas.",
        "type": "TEXT"
      },
      {
        "name": "impacto_residual",
        "label": "Impacto Residual",
        "description": "Valor posterior del impacto.",
        "type": "TEXT"
      },
      {
        "name": "probabilidad_residual",
        "label": "Probabilidad Residual",
        "description": "Valor posterior de probabilidad.",
        "type": "TEXT"
      },
      {
        "name": "nivel_riesgo_residual",
        "label": "Nivel Riesgo Residual",
        "description": "Nivel calculado del riesgo residual.",
        "type": "TEXT"
      },
      {
        "name": "responsable_control",
        "label": "Responsable Control",
        "description": "Responsable de aplicar los controles.",
        "type": "TEXT"
      },
      {
        "name": "estado_control",
        "label": "Estado Control",
        "description": "Estado del control (Implementado, Pendiente).",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de creacion del registro.",
        "type": "TEXT"
      },
      {
        "name": "fecha_actualizacion",
        "label": "Fecha Actualizacion",
        "description": "Ultima modificacion del registro.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "plantillas_documentos",
    "title": "Plantillas Documentos",
    "requirement": "7.5",
    "description": "Textos base sugeridos para formularios, procedimientos, politicas, etc.",
    "operation": "Tabla de referencia",
    "notes": "Contiene ejemplos guias de la tabla procedimientos_sgs.",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador del registro.",
        "type": "TEXT"
      },
      {
        "name": "codigo",
        "label": "Codigo",
        "description": "Codigo del documento o plantilla (ej: R1).",
        "type": "TEXT"
      },
      {
        "name": "titulo",
        "label": "Titulo",
        "description": "Nombre de la plantilla.",
        "type": "TEXT"
      },
      {
        "name": "tipo",
        "label": "Tipo",
        "description": "Tipo de documento (procedimiento, politica, etc.).",
        "type": "TEXT"
      },
      {
        "name": "contenido",
        "label": "Contenido",
        "description": "Texto base en formato HTML.",
        "type": "TEXT"
      },
      {
        "name": "aplicacion",
        "label": "Aplicacion",
        "description": "Tabla o modulo relacionado.",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de creacion de la plantilla.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "procedimientos_sgs",
    "title": "Procedimientos Sgs",
    "requirement": "4.4",
    "description": "Esta tabla unifica todos los procedimientos obligatorios del sistema de gestion.",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del procedimiento",
        "type": "INT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion a la que pertenece el SGS",
        "type": "INT"
      },
      {
        "name": "titulo",
        "label": "Titulo",
        "description": "Titulo del procedimiento (Ej. Gestion de Incidentes)",
        "type": "VARCHAR(255)"
      },
      {
        "name": "codigo",
        "label": "Codigo",
        "description": "Codigo del documento (Ej. P-SGS-04)",
        "type": "VARCHAR(50)"
      },
      {
        "name": "numeral_iso",
        "label": "Numeral Iso",
        "description": "Numeral ISO relacionado (Ej. 8.3)",
        "type": "VARCHAR(10)"
      },
      {
        "name": "contenido",
        "label": "Contenido",
        "description": "Texto completo del procedimiento (alternativamente se puede subir archivo)",
        "type": "LONGTEXT"
      },
      {
        "name": "archivo_adj",
        "label": "Archivo Adj",
        "description": "Ruta del archivo cargado (opcional)",
        "type": "VARCHAR(255)"
      },
      {
        "name": "responsable",
        "label": "Responsable",
        "description": "Nombre o cargo de quien elaboro o controla el documento",
        "type": "VARCHAR(100)"
      },
      {
        "name": "version",
        "label": "Version",
        "description": "Version del procedimiento",
        "type": "VARCHAR(20)"
      },
      {
        "name": "fecha_aprobacion",
        "label": "Fecha Aprobacion",
        "description": "Fecha de ultima aprobacion",
        "type": "DATE"
      },
      {
        "name": "estado",
        "label": "Estado",
        "description": "'Vigente', 'En revision', 'Obsoleto'",
        "type": "ENUM(...)"
      },
      {
        "name": "proxima_accion",
        "label": "Proxima Accion",
        "description": "Revision, ajuste, capacitacion, etc.",
        "type": "TEXT"
      },
      {
        "name": "fecha_proxima_accion",
        "label": "Fecha Proxima Accion",
        "description": "Fecha de proxima revision o actualizacion",
        "type": "DATE"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Registro de creacion",
        "type": "DATETIME"
      }
    ]
  },
  {
    "table": "politica_seguridad",
    "title": "Politica Seguridad",
    "requirement": "5.2",
    "description": "Formulario R2 donde se consigna la politica de seguridad de la organizacion.",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Puede tener un texto sugerido en plantilla_documentos",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador del registro.",
        "type": "TEXT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion que emite la politica.",
        "type": "TEXT"
      },
      {
        "name": "id_usuario",
        "label": "Id Usuario",
        "description": "Usuario que diligencia.",
        "type": "TEXT"
      },
      {
        "name": "contenido",
        "label": "Contenido",
        "description": "Texto de la politica.",
        "type": "TEXT"
      },
      {
        "name": "fecha_firma",
        "label": "Fecha Firma",
        "description": "Fecha de firma.",
        "type": "TEXT"
      },
      {
        "name": "firma_imagen_url",
        "label": "Firma Imagen Url",
        "description": "URL con imagen de la firma.",
        "type": "TEXT"
      },
      {
        "name": "archivo_adjunto",
        "label": "Archivo Adjunto",
        "description": "Documento adjunto con la politica firmada.",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de creacion.",
        "type": "TEXT"
      },
      {
        "name": "fecha_actualizacion",
        "label": "Fecha Actualizacion",
        "description": "Ultima modificacion.",
        "type": "TEXT"
      },
      {
        "name": "estado",
        "label": "Estado",
        "description": "Estado del documento.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "roles_responsabilidades",
    "title": "Roles Responsabilidades",
    "requirement": "5.3",
    "description": "Formulario R3 donde se definen los roles, responsabilidades y autoridad.",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Esta tabla tiene relcion con la tabla cargos",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador del rol.",
        "type": "TEXT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion a la que pertenece.",
        "type": "TEXT"
      },
      {
        "name": "id_usuario",
        "label": "Id Usuario",
        "description": "Usuario que registra la informacion.",
        "type": "TEXT"
      },
      {
        "name": "nombre_rol",
        "label": "Nombre Rol",
        "description": "Nombre del rol (ej. Guia, Coordinador).",
        "type": "TEXT"
      },
      {
        "name": "responsabilidades",
        "label": "Responsabilidades",
        "description": "Descripcion de sus funciones.",
        "type": "TEXT"
      },
      {
        "name": "autoridad",
        "label": "Autoridad",
        "description": "Atribuciones o decisiones que puede tomar.",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de creacion.",
        "type": "TEXT"
      },
      {
        "name": "fecha_actualizacion",
        "label": "Fecha Actualizacion",
        "description": "Ultima modificacion.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "normograma",
    "title": "Normograma",
    "requirement": "6.1.3",
    "description": "Listado de normas relativas a la seguridad y el turismo que aplican",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del registro (clave primaria).",
        "type": "TEXT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Referencia a la organizacian que gestiona la norma.",
        "type": "TEXT"
      },
      {
        "name": "id_usuario",
        "label": "Id Usuario",
        "description": "Usuario que registra la informacian.",
        "type": "TEXT"
      },
      {
        "name": "tipo_norma",
        "label": "Tipo Norma",
        "description": "Tipo de norma o requisito (Ley, Resolucian, Norma Tecnica).",
        "type": "TEXT"
      },
      {
        "name": "numero_norma",
        "label": "Numero Norma",
        "description": "Numero o cadigo de la norma (ej: Ley 300 de 1996).",
        "type": "TEXT"
      },
      {
        "name": "titulo",
        "label": "Titulo",
        "description": "Titulo o nombre completo de la norma.",
        "type": "TEXT"
      },
      {
        "name": "entidad_emisora",
        "label": "Entidad Emisora",
        "description": "Entidad que emitia la norma (ej: Mincomercio, ICONTEC).",
        "type": "TEXT"
      },
      {
        "name": "fecha_emision",
        "label": "Fecha Emision",
        "description": "Fecha en que fue emitida la norma.",
        "type": "TEXT"
      },
      {
        "name": "fecha_vigencia",
        "label": "Fecha Vigencia",
        "description": "Fecha en que entra en vigencia la norma.",
        "type": "TEXT"
      },
      {
        "name": "aplicabilidad",
        "label": "Aplicabilidad",
        "description": "Descripcian de camo aplica la norma a la organizacian.",
        "type": "TEXT"
      },
      {
        "name": "responsable_cumplimiento",
        "label": "Responsable Cumplimiento",
        "description": "Persona responsable del cumplimiento de la norma.",
        "type": "TEXT"
      },
      {
        "name": "medio_verificacion",
        "label": "Medio Verificacion",
        "description": "Evidencias o metodos para verificar cumplimiento.",
        "type": "TEXT"
      },
      {
        "name": "estado_cumplimiento",
        "label": "Estado Cumplimiento",
        "description": "Estado actual: 'Cumple', 'No cumple' o 'En revisian'.",
        "type": "TEXT"
      },
      {
        "name": "enlace_norma",
        "label": "Enlace Norma",
        "description": "Hipervinculo o URL al texto completo de la norma.",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha en que se crea el registro.",
        "type": "TEXT"
      },
      {
        "name": "fecha_actualizacion",
        "label": "Fecha Actualizacion",
        "description": "Fecha de la ultima modificacian del registro.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "politica_sgs",
    "title": "Politica Sgs",
    "requirement": "5.2",
    "description": "Almacena el texto de la politica de seguridad de la organizacion, incluyendo fecha y estado.",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Tiene un texto basico sugerido dentro de la tablaplantillas_documentos que deberia insertarse a peticion del usuario.",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del registro de politica.",
        "type": "TEXT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion a la que pertenece la politica.",
        "type": "TEXT"
      },
      {
        "name": "id_usuario",
        "label": "Id Usuario",
        "description": "Usuario que registra o edita la politica.",
        "type": "TEXT"
      },
      {
        "name": "contenido",
        "label": "Contenido",
        "description": "Texto completo de la politica de seguridad.",
        "type": "TEXT"
      },
      {
        "name": "fecha_firma",
        "label": "Fecha Firma",
        "description": "Fecha de firma de la politica.",
        "type": "TEXT"
      },
      {
        "name": "archivo_adjunto",
        "label": "Archivo Adjunto",
        "description": "Enlace al documento firmado o complementario.",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha en la que se creo el registro.",
        "type": "TEXT"
      },
      {
        "name": "fecha_actualizacion",
        "label": "Fecha Actualizacion",
        "description": "Fecha de ultima modificacion.",
        "type": "TEXT"
      },
      {
        "name": "estado",
        "label": "Estado",
        "description": "Estado del documento (borrador, firmado, aprobado, etc.).",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "objetivos_sgs",
    "title": "Objetivos Sgs",
    "requirement": "6.2",
    "description": "Registra los objetivos especificos de seguridad vinculados a una politica, junto con sus metas.",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Los objetivos se relacionan directamente de la politica. Tiene relacion con plan_objetivos_sgs y politica_seguridad",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador del objetivo.",
        "type": "TEXT"
      },
      {
        "name": "id_politica",
        "label": "Id Politica",
        "description": "Referencia a la politica a la que pertenece el objetivo.",
        "type": "TEXT"
      },
      {
        "name": "objetivo",
        "label": "Objetivo",
        "description": "Descripcion del objetivo de seguridad.",
        "type": "TEXT"
      },
      {
        "name": "indicador",
        "label": "Indicador",
        "description": "Indicador medible asociado al objetivo.",
        "type": "TEXT"
      },
      {
        "name": "meta",
        "label": "Meta",
        "description": "Meta definida para el indicador.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "plan_objetivos_sgs",
    "title": "Plan Objetivos Sgs",
    "requirement": "6.2",
    "description": "Detalla como se alcanzara cada objetivo: acciones, recursos, responsables, plazos y evaluacion.",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador del plan.",
        "type": "TEXT"
      },
      {
        "name": "id_objetivo",
        "label": "Id Objetivo",
        "description": "Referencia al objetivo al que pertenece el plan.",
        "type": "TEXT"
      },
      {
        "name": "que_se_hara",
        "label": "Que Se Hara",
        "description": "Acciones o actividades especificas para alcanzar el objetivo.",
        "type": "TEXT"
      },
      {
        "name": "recursos",
        "label": "Recursos",
        "description": "Recursos humanos, tecnicos o financieros necesarios.",
        "type": "TEXT"
      },
      {
        "name": "responsable",
        "label": "Responsable",
        "description": "Persona o rol responsable de la ejecucion.",
        "type": "TEXT"
      },
      {
        "name": "cuando",
        "label": "Cuando",
        "description": "Plazo o cronograma para completar las acciones.",
        "type": "TEXT"
      },
      {
        "name": "como_se_evaluara",
        "label": "Como Se Evaluara",
        "description": "Metodo de evaluacion de resultados (auditoria, revision, etc.).",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "cargos",
    "title": "Cargos",
    "requirement": "5.3",
    "description": "Define los diferentes cargos existentes en el sistema (guia, lider, etc.)",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Debe haber al menos un lider definido por actividad. Estos lider debe cumplir con las competencias minimas de la tabla competencias_minimas",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del cargo",
        "type": "TEXT"
      },
      {
        "name": "nombre",
        "label": "Nombre",
        "description": "Nombre del cargo (Ej. Guia, Lider)",
        "type": "TEXT"
      },
      {
        "name": "descripcion",
        "label": "Descripcion",
        "description": "Descripcion general del rol o funciones",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de creacion del registro",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "competencias_minimas",
    "title": "Competencias Minimas",
    "requirement": "7.2",
    "description": "Competencias requeridas por cargo, segun normas como la ISO 21102",
    "operation": "Tabla de referencia",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico de la competencia minima",
        "type": "TEXT"
      },
      {
        "name": "id_cargo",
        "label": "Id Cargo",
        "description": "Cargo al que aplica la competencia",
        "type": "TEXT"
      },
      {
        "name": "competencia",
        "label": "Competencia",
        "description": "Descripcion de la competencia minima",
        "type": "TEXT"
      },
      {
        "name": "fuente_normativa",
        "label": "Fuente Normativa",
        "description": "Norma o fuente que respalda la competencia",
        "type": "TEXT"
      },
      {
        "name": "observaciones",
        "label": "Observaciones",
        "description": "Notas u observaciones adicionales",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "personas",
    "title": "Personas",
    "requirement": "7.2",
    "description": "Personas registradas en el sistema, con datos basicos y perfil general",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Tratamiento confidencial.",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico de la persona",
        "type": "TEXT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion a la que pertenece la persona",
        "type": "TEXT"
      },
      {
        "name": "nombre_completo",
        "label": "Nombre Completo",
        "description": "Nombre completo de la persona",
        "type": "TEXT"
      },
      {
        "name": "numero_identificacion",
        "label": "Numero Identificacion",
        "description": "Numero del documento de identidad",
        "type": "TEXT"
      },
      {
        "name": "tipo_identificacion",
        "label": "Tipo Identificacion",
        "description": "Tipo de documento (CC, CE, PAS)",
        "type": "TEXT"
      },
      {
        "name": "telefono",
        "label": "Telefono",
        "description": "Numero de telefono de contacto",
        "type": "TEXT"
      },
      {
        "name": "correo_electronico",
        "label": "Correo Electronico",
        "description": "Correo electronico de la persona",
        "type": "TEXT"
      },
      {
        "name": "perfil_general",
        "label": "Perfil General",
        "description": "Perfil o funcion general en la organizacion",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de creacion del registro",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "compromiso_personal",
    "title": "Compromiso Personal",
    "requirement": "7.3",
    "description": "Registro de las personas que firmaron el compromiso con la politica de seguridad",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Que tenga un texto suguerido en plantilla_documentos",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador del registro de compromiso",
        "type": "TEXT"
      },
      {
        "name": "id_persona",
        "label": "Id Persona",
        "description": "Persona que firma el compromiso",
        "type": "TEXT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion a la que pertenece",
        "type": "TEXT"
      },
      {
        "name": "cargo_funcion",
        "label": "Cargo Funcion",
        "description": "Cargo que desempena al momento de firmar",
        "type": "TEXT"
      },
      {
        "name": "fecha_firma",
        "label": "Fecha Firma",
        "description": "Fecha en que se firmo el compromiso",
        "type": "TEXT"
      },
      {
        "name": "archivo_firma",
        "label": "Archivo Firma",
        "description": "Ruta o nombre del archivo de firma escaneada",
        "type": "TEXT"
      },
      {
        "name": "observaciones",
        "label": "Observaciones",
        "description": "Comentarios u observaciones",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de creacion del registro",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "plan_comunicaciones",
    "title": "Plan Comunicaciones",
    "requirement": "7.4",
    "description": "Planificacion de los temas, medios, y audiencias de comunicacion del SGS",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Deberia sugerir segun los distintos medios (Charlas y reuniones presenciales, Avisos fisicoa, reuniones virtuales, capacitaciones presenciales y virtuales, pagina web, otras paginas, redes sociales, email, whatsapp, otros). Tiene relacion con registro_comunicaciones",
    "fields": []
  },
  {
    "table": "registro_comunicaciones_seguridad",
    "title": "Registro Comunicaciones Seguridad",
    "requirement": "7.4",
    "description": "Evidencia de actos de comunicacion como capacitaciones, reuniones y avisos",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Se deberia relacionar con el plan y aqui se registra el resultado de ejecucion de las acciones planeadas (plan_comunicaciones)",
    "fields": []
  },
  {
    "table": "documentos_controlados",
    "title": "Documentos Controlados",
    "requirement": "7.5",
    "description": "Gestion de la documentacion del SGS segun el requisito 7.5 de la ISO 21101",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del documento en el sistema.",
        "type": "TEXT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Identificador de la organizacion a la que pertenece el documento.",
        "type": "TEXT"
      },
      {
        "name": "titulo",
        "label": "Titulo",
        "description": "Titulo descriptivo del documento.",
        "type": "TEXT"
      },
      {
        "name": "codigo",
        "label": "Codigo",
        "description": "Codigo interno del documento (por ejemplo, PROC-01).",
        "type": "TEXT"
      },
      {
        "name": "tipo_documento",
        "label": "Tipo Documento",
        "description": "Clasificacion del documento: Procedimiento, Registro, Externo, Otro.",
        "type": "TEXT"
      },
      {
        "name": "version",
        "label": "Version",
        "description": "Version actual del documento.",
        "type": "TEXT"
      },
      {
        "name": "fecha_emision",
        "label": "Fecha Emision",
        "description": "Fecha en que el documento fue emitido.",
        "type": "TEXT"
      },
      {
        "name": "autor",
        "label": "Autor",
        "description": "Persona que elaboro el documento.",
        "type": "TEXT"
      },
      {
        "name": "formato",
        "label": "Formato",
        "description": "Formato del documento (por ejemplo, PDF, Word).",
        "type": "TEXT"
      },
      {
        "name": "medio",
        "label": "Medio",
        "description": "Medio en el que se conserva: Electronico o Fisico.",
        "type": "TEXT"
      },
      {
        "name": "ubicacion",
        "label": "Ubicacion",
        "description": "Ubicacion donde se almacena el documento (puede ser una carpeta fisica o ruta digital).",
        "type": "TEXT"
      },
      {
        "name": "estado",
        "label": "Estado",
        "description": "Estado actual del documento: Vigente, Obsoleto o En revision.",
        "type": "TEXT"
      },
      {
        "name": "control_cambios",
        "label": "Control Cambios",
        "description": "Resumen de los cambios realizados al documento.",
        "type": "TEXT"
      },
      {
        "name": "origen",
        "label": "Origen",
        "description": "Origen del documento: Interno (generado por la organizacion) o Externo.",
        "type": "TEXT"
      },
      {
        "name": "acceso",
        "label": "Acceso",
        "description": "Nivel de acceso permitido: Solo lectura o Lectura y escritura.",
        "type": "TEXT"
      },
      {
        "name": "restricciones_acceso",
        "label": "Restricciones Acceso",
        "description": "Restricciones especiales para consultar o editar el documento.",
        "type": "TEXT"
      },
      {
        "name": "responsable_aprobacion",
        "label": "Responsable Aprobacion",
        "description": "Persona que aprueba formalmente el documento.",
        "type": "TEXT"
      },
      {
        "name": "fecha_aprobacion",
        "label": "Fecha Aprobacion",
        "description": "Fecha en que se aprobo el documento.",
        "type": "TEXT"
      },
      {
        "name": "retencion_minima",
        "label": "Retencion Minima",
        "description": "Tiempo minimo que debe conservarse el documento.",
        "type": "TEXT"
      },
      {
        "name": "disposicion_final",
        "label": "Disposicion Final",
        "description": "Forma en que se debe eliminar o archivar el documento tras su retencion.",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion_registro",
        "label": "Fecha Creacion Registro",
        "description": "Fecha y hora en que se registro el documento en el sistema.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "documentacion_minima",
    "title": "Documentacion Minima",
    "requirement": "7.5",
    "description": "Listado de documentos obigatorios de la norma",
    "operation": "Tabla de referencia",
    "notes": "Se relaciona con documentos_controlados",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del requisito documental.",
        "type": "TEXT"
      },
      {
        "name": "numeral_iso",
        "label": "Numeral Iso",
        "description": "Numeral de la norma ISO 21101 relacionado con el documento (por ejemplo, '8.2').",
        "type": "TEXT"
      },
      {
        "name": "tipo",
        "label": "Tipo",
        "description": "Tipo de documento exigido: Procedimiento, Registro, Politica, Manual, u Otro.",
        "type": "TEXT"
      },
      {
        "name": "descripcion",
        "label": "Descripcion",
        "description": "Descripcion del contenido que debe tener el documento segAon la norma.",
        "type": "TEXT"
      },
      {
        "name": "obligatorio",
        "label": "Obligatorio",
        "description": "Indica si el documento es obligatorio (TRUE) o solo recomendado (FALSE).",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "politica_datos_personales",
    "title": "Politica Datos Personales",
    "requirement": "7.4",
    "description": "Registro de la politica de tratamiento de datos personales de la organizacion",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Tiene un texto basico sugerido dentro de la tabla plantillas_documentos que deberia insertarse a peticion del usuario.",
    "fields": []
  },
  {
    "table": "bitacora_actividades",
    "title": "Bitacora Actividades",
    "requirement": "8.1",
    "description": "Registro de la ejecucion de actividades con observaciones y eventos durante la operacion",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Tiene un texto basico sugerido dentro de la tabla plantillas_documentos que deberia insertarse a peticion del usuario.",
    "fields": []
  },
  {
    "table": "procedimientos_servicio",
    "title": "Procedimientos Servicio",
    "requirement": "8.1",
    "description": "Procedimientos estandarizados de operacion para cada actividad turistica",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Debe asegurarse que haya un procedimiento por cada actividad de contexto_actividad",
    "fields": []
  },
  {
    "table": "equipos",
    "title": "Equipos",
    "requirement": "7.1",
    "description": "Inventario de equipos utilizados en las actividades, su estado y mantenimiento",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Debe ahaber un inventario por cada actividad de contexto_actividad",
    "fields": []
  },
  {
    "table": "plan_emergencia",
    "title": "Plan Emergencia",
    "requirement": "8.2",
    "description": "Disposiciones del plan de emergencia",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Este documento podria estar por fuera del registro y en los campos solo se refieriria al registro.",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del plan",
        "type": "INT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion responsable",
        "type": "INT"
      },
      {
        "name": "id_actividad",
        "label": "Id Actividad",
        "description": "Actividad turistica a la que aplica este plan",
        "type": "INT"
      },
      {
        "name": "ubicacion_operacion",
        "label": "Ubicacion Operacion",
        "description": "Ubicacion principal de ejecucion del plan",
        "type": "VARCHAR(255)"
      },
      {
        "name": "riesgos_emergencias",
        "label": "Riesgos Emergencias",
        "description": "Lista de emergencias y riesgos identificados",
        "type": "TEXT"
      },
      {
        "name": "consecuencias",
        "label": "Consecuencias",
        "description": "Posibles consecuencias de los eventos identificados",
        "type": "TEXT"
      },
      {
        "name": "procedimientos",
        "label": "Procedimientos",
        "description": "Acciones frente a cada tipo de emergencia",
        "type": "TEXT"
      },
      {
        "name": "roles_personal",
        "label": "Roles Personal",
        "description": "Asignacion de roles dentro del plan",
        "type": "TEXT"
      },
      {
        "name": "evacuacion_heridos",
        "label": "Evacuacion Heridos",
        "description": "Procedimiento especifico de evacuacion medica",
        "type": "TEXT"
      },
      {
        "name": "personal_capacitado",
        "label": "Personal Capacitado",
        "description": "Nombres y certificaciones del personal capacitado",
        "type": "TEXT"
      },
      {
        "name": "equipos_disponibles",
        "label": "Equipos Disponibles",
        "description": "Listado de equipos disponibles",
        "type": "TEXT"
      },
      {
        "name": "entidades_contacto",
        "label": "Entidades Contacto",
        "description": "Entidades externas de apoyo y sus telefonos",
        "type": "TEXT"
      },
      {
        "name": "gestion_datos_participantes",
        "label": "Gestion Datos Participantes",
        "description": "Metodo de recoleccion de datos sensibles de participantes",
        "type": "TEXT"
      },
      {
        "name": "proteccion_datos",
        "label": "Proteccion Datos",
        "description": "Medidas de proteccion de datos personales",
        "type": "TEXT"
      },
      {
        "name": "frecuencia_simulacros",
        "label": "Frecuencia Simulacros",
        "description": "Periodicidad de simulacros",
        "type": "VARCHAR(100)"
      },
      {
        "name": "registro_simulacros",
        "label": "Registro Simulacros",
        "description": "Forma de registrar y evaluar los simulacros",
        "type": "TEXT"
      },
      {
        "name": "comunicacion_participantes",
        "label": "Comunicacion Participantes",
        "description": "Como se informa a los participantes sobre procedimientos",
        "type": "TEXT"
      },
      {
        "name": "revision_mejora",
        "label": "Revision Mejora",
        "description": "Metodo y momento de actualizacion del plan",
        "type": "TEXT"
      },
      {
        "name": "proxima_accion",
        "label": "Proxima Accion",
        "description": "Revision, simulacro o actualizacion pendiente",
        "type": "TEXT"
      },
      {
        "name": "fecha_proxima_accion",
        "label": "Fecha Proxima Accion",
        "description": "Fecha programada para la proxima accion",
        "type": "DATE"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha en que se creo el registro del plan",
        "type": "DATETIME"
      }
    ]
  },
  {
    "table": "simulacros",
    "title": "Simulacros",
    "requirement": "8.2",
    "description": "Registro de simulacros del plan de emergencia",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Esta tabla se relaciona con simulacro_evidencias",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del simulacro",
        "type": "INT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion responsable",
        "type": "INT"
      },
      {
        "name": "id_actividad",
        "label": "Id Actividad",
        "description": "Actividad turistica relacionada",
        "type": "INT"
      },
      {
        "name": "id_plan_emergencia",
        "label": "Id Plan Emergencia",
        "description": "Plan de emergencia bajo el cual se ejecuto",
        "type": "INT"
      },
      {
        "name": "tipo_simulacro",
        "label": "Tipo Simulacro",
        "description": "Ej: evacuacion, rescate, primeros auxilios",
        "type": "VARCHAR(100)"
      },
      {
        "name": "fecha_simulacro",
        "label": "Fecha Simulacro",
        "description": "Fecha en que se realizo",
        "type": "DATE"
      },
      {
        "name": "participantes",
        "label": "Participantes",
        "description": "Nombres, roles o cantidad de participantes",
        "type": "TEXT"
      },
      {
        "name": "descripcion",
        "label": "Descripcion",
        "description": "Descripcion general del simulacro",
        "type": "TEXT"
      },
      {
        "name": "resultados",
        "label": "Resultados",
        "description": "Lecciones aprendidas, fallas identificadas",
        "type": "TEXT"
      },
      {
        "name": "proxima_accion",
        "label": "Proxima Accion",
        "description": "Mejora o verificacion pendiente posterior al simulacro",
        "type": "TEXT"
      },
      {
        "name": "fecha_proxima_accion",
        "label": "Fecha Proxima Accion",
        "description": "Fecha programada para la accion",
        "type": "DATE"
      },
      {
        "name": "archivo_evidencia",
        "label": "Archivo Evidencia",
        "description": "Archivo adjunto (fotos, actas, etc.)",
        "type": "VARCHAR(255)"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de creacion del registro",
        "type": "DATETIME"
      }
    ]
  },
  {
    "table": "simulacro_evidencias",
    "title": "Simulacro Evidencias",
    "requirement": "8.2",
    "description": "Guarda evidencias como fotos, videos o documentos relativos al simulacro de emergencia",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Esta tabla se relaciona con simulacros",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico",
        "type": "TEXT"
      },
      {
        "name": "id_simulacro",
        "label": "Id Simulacro",
        "description": "Identificador del simulacro",
        "type": "TEXT"
      },
      {
        "name": "tipo_archivo",
        "label": "Tipo Archivo",
        "description": "Decir ('foto', 'video', 'otro')",
        "type": "TEXT"
      },
      {
        "name": "descripcion",
        "label": "Descripcion",
        "description": "Decripcion del archicvo",
        "type": "TEXT"
      },
      {
        "name": "url_archivo",
        "label": "Url Archivo",
        "description": "URL del archivo de evidencia del simulacro",
        "type": "TEXT"
      },
      {
        "name": "fecha_subida",
        "label": "Fecha Subida",
        "description": "fecha",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "registro_participantes_evidencia",
    "title": "Registro Participantes Evidencia",
    "requirement": "7.4",
    "description": "Registro de las evidencias. No guarda datos personales pues estos se guardan por parte de la agencia",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Lo ideal es que esto se guarde en otro lado ya que son datos personales de los participantes.",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico",
        "type": "INT"
      },
      {
        "name": "id_bitacora",
        "label": "Id Bitacora",
        "description": "Actividad en la que participaron",
        "type": "INT"
      },
      {
        "name": "tipo_evidencia",
        "label": "Tipo Evidencia",
        "description": "'formulario externo', 'archivo escaneado', 'otro'",
        "type": "ENUM"
      },
      {
        "name": "descripcion",
        "label": "Descripcion",
        "description": "Que contiene la evidencia (ej. acta de firmas, lista de asistencia)",
        "type": "TEXT"
      },
      {
        "name": "url_evidencia",
        "label": "Url Evidencia",
        "description": "Enlace al documento o formulario externo",
        "type": "VARCHAR(255)"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de ingreso",
        "type": "DATETIME"
      }
    ]
  },
  {
    "table": "registro_incidentes",
    "title": "Registro Incidentes",
    "requirement": "8.3",
    "description": "Se registran los incidentes de seguridad reportados durante la actividad, si es que los hay",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "Todos los incidentes deben tener una accion en el mapa de riesgos.",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del incidente",
        "type": "INT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion que reporta el incidente",
        "type": "INT"
      },
      {
        "name": "id_actividad",
        "label": "Id Actividad",
        "description": "Actividad en la que ocurrio el incidente",
        "type": "INT"
      },
      {
        "name": "fecha_hora_incidente",
        "label": "Fecha Hora Incidente",
        "description": "Fecha y hora exacta del incidente",
        "type": "DATETIME"
      },
      {
        "name": "ubicacion",
        "label": "Ubicacion",
        "description": "Lugar fisico del incidente",
        "type": "VARCHAR(255)"
      },
      {
        "name": "personas_involucradas",
        "label": "Personas Involucradas",
        "description": "Participantes, personal, u otros testigos",
        "type": "TEXT"
      },
      {
        "name": "condiciones_ambientales",
        "label": "Condiciones Ambientales",
        "description": "Estado del clima, terreno u otras condiciones",
        "type": "TEXT"
      },
      {
        "name": "equipo_asociado",
        "label": "Equipo Asociado",
        "description": "Equipos involucrados o en uso",
        "type": "TEXT"
      },
      {
        "name": "descripcion_incidente",
        "label": "Descripcion Incidente",
        "description": "Que ocurrio exactamente",
        "type": "TEXT"
      },
      {
        "name": "causas_probables",
        "label": "Causas Probables",
        "description": "Causas directas o indirectas identificadas",
        "type": "TEXT"
      },
      {
        "name": "respuesta_emergencia",
        "label": "Respuesta Emergencia",
        "description": "Acciones tomadas, incluyendo primeros auxilios o evacuacion",
        "type": "TEXT"
      },
      {
        "name": "consecuencias",
        "label": "Consecuencias",
        "description": "Resultados o danos derivados del incidente",
        "type": "TEXT"
      },
      {
        "name": "medidas_correctivas",
        "label": "Medidas Correctivas",
        "description": "Acciones implementadas para evitar recurrencia",
        "type": "TEXT"
      },
      {
        "name": "fuente_informacion",
        "label": "Fuente Informacion",
        "description": "Quien reporto o de donde se obtuvo la informacion",
        "type": "TEXT"
      },
      {
        "name": "archivo_evidencia",
        "label": "Archivo Evidencia",
        "description": "Ruta a archivo anexo (foto, informe, video)",
        "type": "VARCHAR(255)"
      },
      {
        "name": "incorporado_mapa_riesgos",
        "label": "Incorporado Mapa Riesgos",
        "description": "Si el incidente fue incorporado en el mapa de riesgos",
        "type": "BOOLEAN"
      },
      {
        "name": "proxima_accion",
        "label": "Proxima Accion",
        "description": "Accion pendiente relacionada con este caso",
        "type": "TEXT"
      },
      {
        "name": "fecha_proxima_accion",
        "label": "Fecha Proxima Accion",
        "description": "Fecha limite para la accion",
        "type": "DATE"
      },
      {
        "name": "fecha_registro",
        "label": "Fecha Registro",
        "description": "Fecha en que se registro en el sistema",
        "type": "DATETIME"
      }
    ]
  },
  {
    "table": "acciones_sugeridas",
    "title": "Acciones Sugeridas",
    "requirement": "10.2",
    "description": "Es una tabla auxiliar del sistema que registra sugerencias automaticas generadas por el sistema cuando ocurre un evento que podria requerir atencion, seguimiento o mejora, por ejemplo: Cuando se reporta un incidente con consecuencias pero no ha sido incorporado al mapa de riesgos. Cuando se realiza un simulacro que revela fallas que deberian documentarse como mejora. Cuando un documento clave esta proximo a vencer.",
    "operation": "Consulta, reporte",
    "notes": "Esta tabla debe salir de un proceso de auditoria.",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico",
        "type": "TEXT"
      },
      {
        "name": "id_incidente",
        "label": "Id Incidente",
        "description": "(opcional) Relacion al incidente que genero la sugerencia",
        "type": "TEXT"
      },
      {
        "name": "sugerencia",
        "label": "Sugerencia",
        "description": "Texto generado automaticamente (Ej: \"Revisar mapa de riesgos...\")",
        "type": "TEXT"
      },
      {
        "name": "fecha_sugerencia",
        "label": "Fecha Sugerencia",
        "description": "Cuando se genero",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "seguimiento_medicion",
    "title": "Seguimiento Medicion",
    "requirement": "9.1",
    "description": "La tabla seguimiento_medicion tiene como objetivo registrar de manera estructurada las actividades de seguimiento y medicion del Sistema de Gestion de Seguridad (SGS) de una organizacion de turismo de aventura, conforme al numeral 9 de la norma ISO 21101.",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del registro",
        "type": "INT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion que ejecuta el seguimiento",
        "type": "INT"
      },
      {
        "name": "id_actividad",
        "label": "Id Actividad",
        "description": "Actividad a la que corresponde la medicion",
        "type": "INT"
      },
      {
        "name": "fecha_registro",
        "label": "Fecha Registro",
        "description": "Fecha en que se realizo el seguimiento",
        "type": "DATE"
      },
      {
        "name": "tipo_seguimiento",
        "label": "Tipo Seguimiento",
        "description": "Tipo: 'Seguridad', 'SOP', 'Equipo', 'Emergencias', 'Satisfaccion', 'Desempeno'",
        "type": "ENUM(...)"
      },
      {
        "name": "indicador",
        "label": "Indicador",
        "description": "Indicador usado (ej. \"Incidentes de seguridad\")",
        "type": "VARCHAR(100)"
      },
      {
        "name": "medicion",
        "label": "Medicion",
        "description": "Valor observado (numero, si/no, escala, etc.)",
        "type": "VARCHAR(100)"
      },
      {
        "name": "observaciones",
        "label": "Observaciones",
        "description": "Detalles del hallazgo",
        "type": "TEXT"
      },
      {
        "name": "acciones_a_tomar",
        "label": "Acciones A Tomar",
        "description": "Medidas correctivas o preventivas",
        "type": "TEXT"
      },
      {
        "name": "proxima_accion",
        "label": "Proxima Accion",
        "description": "Accion futura planificada",
        "type": "TEXT"
      },
      {
        "name": "fecha_proxima_accion",
        "label": "Fecha Proxima Accion",
        "description": "Fecha en que se realizara la proxima accion",
        "type": "DATE"
      },
      {
        "name": "archivo_evidencia",
        "label": "Archivo Evidencia",
        "description": "Enlace o nombre de archivo con soporte adicional (foto, acta, etc.)",
        "type": "VARCHAR(255)"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de creacion del registro",
        "type": "DATETIME"
      }
    ]
  },
  {
    "table": "programa_auditorias",
    "title": "Programa Auditorias",
    "requirement": "9.2",
    "description": "Esta tabla documenta la planificacion general de auditorias internas en el SGS, conforme a ISO 21101",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del programa",
        "type": "INT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion a la que pertenece el programa",
        "type": "INT"
      },
      {
        "name": "periodo",
        "label": "Periodo",
        "description": "Ej: 2024, 20242025",
        "type": "VARCHAR(50)"
      },
      {
        "name": "proceso_auditar",
        "label": "Proceso Auditar",
        "description": "Proceso o area (ej. SOP, emergencias, satisfaccion)",
        "type": "VARCHAR(255)"
      },
      {
        "name": "criterios_auditoria",
        "label": "Criterios Auditoria",
        "description": "Norma ISO 21101, procedimientos internos, planes, etc.",
        "type": "TEXT"
      },
      {
        "name": "auditor_responsable",
        "label": "Auditor Responsable",
        "description": "Nombre del auditor asignado",
        "type": "VARCHAR(100)"
      },
      {
        "name": "alcance",
        "label": "Alcance",
        "description": "Que se evaluara y hasta que punto",
        "type": "TEXT"
      },
      {
        "name": "frecuencia",
        "label": "Frecuencia",
        "description": "Trimestral, Anual, etc.",
        "type": "VARCHAR(100)"
      },
      {
        "name": "observaciones",
        "label": "Observaciones",
        "description": "Notas sobre condiciones especiales, hallazgos previos, etc.",
        "type": "TEXT"
      },
      {
        "name": "fecha_planeada",
        "label": "Fecha Planeada",
        "description": "Fecha propuesta para realizar la auditoria",
        "type": "DATE"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Registro del programa",
        "type": "DATETIME"
      }
    ]
  },
  {
    "table": "plan_auditoria",
    "title": "Plan Auditoria",
    "requirement": "9.2",
    "description": "Esta tabla detalla el plan especifico de una auditoria programada (dia a dia, hora a hora).",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del plan",
        "type": "INT"
      },
      {
        "name": "id_programa_auditoria",
        "label": "Id Programa Auditoria",
        "description": "Relacion con la tabla programa_auditorias",
        "type": "INT"
      },
      {
        "name": "fecha_auditoria",
        "label": "Fecha Auditoria",
        "description": "Fecha asignada",
        "type": "DATE"
      },
      {
        "name": "dia",
        "label": "Dia",
        "description": "Dia de la semana (ej. Lunes, Martes)",
        "type": "VARCHAR(20)"
      },
      {
        "name": "hora_inicio",
        "label": "Hora Inicio",
        "description": "Hora de inicio de la actividad",
        "type": "TIME"
      },
      {
        "name": "hora_fin",
        "label": "Hora Fin",
        "description": "Hora de finalizacion de la actividad",
        "type": "TIME"
      },
      {
        "name": "actividad",
        "label": "Actividad",
        "description": "Actividad a realizar (revision de documentos, entrevistas, etc.)",
        "type": "TEXT"
      },
      {
        "name": "lugar",
        "label": "Lugar",
        "description": "Sitio donde se llevara a cabo",
        "type": "VARCHAR(100)"
      },
      {
        "name": "responsable_actividad",
        "label": "Responsable Actividad",
        "description": "Personal involucrado o contactado",
        "type": "VARCHAR(100)"
      },
      {
        "name": "observaciones",
        "label": "Observaciones",
        "description": "Detalles adicionales",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Registro del plan",
        "type": "DATETIME"
      }
    ]
  },
  {
    "table": "informe_auditoria_detalle",
    "title": "Informe Auditoria Detalle",
    "requirement": "9.2",
    "description": "Esta tabla contendra cada item evaluado dentro de una auditoria. Se vinculara al plan correspondiente y a su seccion.",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del detalle evaluado.",
        "type": "TEXT"
      },
      {
        "name": "id_informe_auditoria",
        "label": "Id Informe Auditoria",
        "description": "Relacion con el informe de auditoria principal.",
        "type": "TEXT"
      },
      {
        "name": "numeral_norma",
        "label": "Numeral Norma",
        "description": "Numeral auditado de la norma ISO 21101 (ej. 4.1, 5.2...).",
        "type": "TEXT"
      },
      {
        "name": "requisito",
        "label": "Requisito",
        "description": "Texto completo o resumen del requisito auditado.",
        "type": "TEXT"
      },
      {
        "name": "conforme",
        "label": "Conforme",
        "description": "Indica si el numeral fue conforme (1) o no conforme (0).",
        "type": "TEXT"
      },
      {
        "name": "evidencia",
        "label": "Evidencia",
        "description": "Evidencia documentada, observaciones o entrevistas que soportan el resultado.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "referencia_norma_iso21101",
    "title": "Referencia Norma Iso21101",
    "requirement": "4.4",
    "description": "tabla auxiliar con todos los numerales de la norma ISO 21101 y su descripcion.",
    "operation": "Tabla de referencia",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del numeral de la norma.",
        "type": "TEXT"
      },
      {
        "name": "capitulo",
        "label": "Capitulo",
        "description": "Capitulo principal al que pertenece el numeral (ej. 4, 5, 6...).",
        "type": "TEXT"
      },
      {
        "name": "numeral",
        "label": "Numeral",
        "description": "Numeral especifico dentro del capitulo (ej. 4.1, 5.2...).",
        "type": "TEXT"
      },
      {
        "name": "titulo",
        "label": "Titulo",
        "description": "Titulo corto que resume el contenido del numeral.",
        "type": "TEXT"
      },
      {
        "name": "requisito",
        "label": "Requisito",
        "description": "Texto completo del requisito establecido por la norma ISO 21101.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "acciones_correctivas",
    "title": "Acciones Correctivas",
    "requirement": "10.1",
    "description": "Se registran acciones para eliminar las No Conformidades detectadas en auditorias internas o externas u otra fuente.",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico",
        "type": "INT"
      },
      {
        "name": "id_informe_auditoria",
        "label": "Id Informe Auditoria",
        "description": "Se vincula a una auditoria, si proviene de ella",
        "type": "INT (nullable)"
      },
      {
        "name": "origen",
        "label": "Origen",
        "description": "Auditoria, incidente, simulacro, etc.",
        "type": "VARCHAR(100)"
      },
      {
        "name": "descripcion_no_conformidad",
        "label": "Descripcion No Conformidad",
        "description": "Que se detecto y por que requiere accion",
        "type": "TEXT"
      },
      {
        "name": "accion_propuesta",
        "label": "Accion Propuesta",
        "description": "Que se va a hacer para corregir",
        "type": "TEXT"
      },
      {
        "name": "responsable",
        "label": "Responsable",
        "description": "Persona responsable de implementar",
        "type": "VARCHAR(100)"
      },
      {
        "name": "fecha_implementacion_esperada",
        "label": "Fecha Implementacion Esperada",
        "description": "Fecha objetivo para ejecutar la accion",
        "type": "DATE"
      },
      {
        "name": "estado",
        "label": "Estado",
        "description": "'Pendiente', 'Implementada', 'En evaluacion', 'Cerrada'",
        "type": "ENUM(...)"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Registro de creacion",
        "type": "DATETIME"
      }
    ]
  },
  {
    "table": "informe_auditoria",
    "title": "Informe Auditoria",
    "requirement": "9.2",
    "description": "Informe de auditorias. Se complementa con la tabla informe de auditoria detalles y la de referencias normativas.",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del informe de auditoria.",
        "type": "TEXT"
      },
      {
        "name": "id_plan_auditoria",
        "label": "Id Plan Auditoria",
        "description": "Clave foranea que relaciona con el plan de auditoria programado.",
        "type": "TEXT"
      },
      {
        "name": "auditor",
        "label": "Auditor",
        "description": "Nombre del auditor responsable de elaborar el informe.",
        "type": "TEXT"
      },
      {
        "name": "fecha_informe",
        "label": "Fecha Informe",
        "description": "Fecha en que se elaboro el informe.",
        "type": "TEXT"
      },
      {
        "name": "conclusiones",
        "label": "Conclusiones",
        "description": "Conclusiones generales de la auditoria.",
        "type": "TEXT"
      },
      {
        "name": "recomendaciones",
        "label": "Recomendaciones",
        "description": "Recomendaciones propuestas por el auditor.",
        "type": "TEXT"
      },
      {
        "name": "archivo_soporte",
        "label": "Archivo Soporte",
        "description": "Ruta o nombre del archivo con el informe firmado o digitalizado.",
        "type": "TEXT"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha y hora en que se registro este informe en el sistema.",
        "type": "TEXT"
      }
    ]
  },
  {
    "table": "seguimiento_acciones_correctivas",
    "title": "Seguimiento Acciones Correctivas",
    "requirement": "10.1",
    "description": "Permite registrar multiples seguimientos en el tiempo para cada accion correctiva",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico",
        "type": "INT"
      },
      {
        "name": "id_accion_correctiva",
        "label": "Id Accion Correctiva",
        "description": "A que accion se refiere",
        "type": "INT"
      },
      {
        "name": "fecha_seguimiento",
        "label": "Fecha Seguimiento",
        "description": "Cuando se hizo el seguimiento",
        "type": "DATE"
      },
      {
        "name": "descripcion_seguimiento",
        "label": "Descripcion Seguimiento",
        "description": "Que se encontro o verifico",
        "type": "TEXT"
      },
      {
        "name": "estado_accion",
        "label": "Estado Accion",
        "description": "'En progreso', 'Finalizada', 'No eficaz'",
        "type": "ENUM(...)"
      },
      {
        "name": "verificacion_eficacia",
        "label": "Verificacion Eficacia",
        "description": "Evaluacion de si la accion fue eficaz",
        "type": "TEXT"
      },
      {
        "name": "usuario_seguimiento",
        "label": "Usuario Seguimiento",
        "description": "Quien hizo el seguimiento",
        "type": "VARCHAR(100)"
      },
      {
        "name": "archivo_evidencia",
        "label": "Archivo Evidencia",
        "description": "Enlace a soporte (acta, foto, documento)",
        "type": "VARCHAR(255)"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Registro del seguimiento",
        "type": "DATETIME"
      }
    ]
  },
  {
    "table": "revision_direccion",
    "title": "Revision Direccion",
    "requirement": "9.3",
    "description": "Registro del informe de acuerdo al numeral 9.3 de la ISO 21101",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico de la revision",
        "type": "INT"
      },
      {
        "name": "id_organizacion",
        "label": "Id Organizacion",
        "description": "Organizacion que realiza la revision",
        "type": "INT"
      },
      {
        "name": "fecha_revision",
        "label": "Fecha Revision",
        "description": "Fecha en que se llevo a cabo la revision por la direccion",
        "type": "DATE"
      },
      {
        "name": "estado_acciones_previas",
        "label": "Estado Acciones Previas",
        "description": "Estado de las acciones definidas en revisiones anteriores",
        "type": "TEXT"
      },
      {
        "name": "cambios_contexto",
        "label": "Cambios Contexto",
        "description": "Cambios internos o externos relevantes",
        "type": "TEXT"
      },
      {
        "name": "resumen_no_conformidades",
        "label": "Resumen No Conformidades",
        "description": "Tendencias en no conformidades y medidas correctivas",
        "type": "TEXT"
      },
      {
        "name": "resumen_medicion_seguimiento",
        "label": "Resumen Medicion Seguimiento",
        "description": "Resultados del seguimiento y la medicion",
        "type": "TEXT"
      },
      {
        "name": "resumen_auditorias",
        "label": "Resumen Auditorias",
        "description": "Resultados de auditorias internas",
        "type": "TEXT"
      },
      {
        "name": "oportunidades_mejora",
        "label": "Oportunidades Mejora",
        "description": "Oportunidades de mejora identificadas",
        "type": "TEXT"
      },
      {
        "name": "decisiones_tomadas",
        "label": "Decisiones Tomadas",
        "description": "Decisiones para mejora o cambios en el SGS",
        "type": "TEXT"
      },
      {
        "name": "proxima_accion",
        "label": "Proxima Accion",
        "description": "Accion siguiente definida en la reunion",
        "type": "TEXT"
      },
      {
        "name": "fecha_proxima_accion",
        "label": "Fecha Proxima Accion",
        "description": "Fecha de ejecucion o seguimiento",
        "type": "DATE"
      },
      {
        "name": "archivo_evidencia",
        "label": "Archivo Evidencia",
        "description": "Ruta al acta firmada, archivo PDF u otro soporte",
        "type": "VARCHAR(255)"
      },
      {
        "name": "fecha_creacion",
        "label": "Fecha Creacion",
        "description": "Fecha de creacion del registro",
        "type": "DATETIME"
      }
    ]
  },
  {
    "table": "procedimientos_obligatorios",
    "title": "Procedimientos Obligatorios",
    "requirement": "4.4",
    "description": "tabla auxiliar llamada que sirve como referencia estatica de los procedimientos requeridos por la norma, independientemente de su implementacion por parte de una organizacion especifica.",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico del procedimiento",
        "type": "INT"
      },
      {
        "name": "codigo",
        "label": "Codigo",
        "description": "Codigo interno (Ej. P01, P02...)",
        "type": "VARCHAR(10)"
      },
      {
        "name": "titulo",
        "label": "Titulo",
        "description": "Titulo del procedimiento",
        "type": "VARCHAR(255)"
      },
      {
        "name": "numeral_iso",
        "label": "Numeral Iso",
        "description": "Numeral ISO 21101 correspondiente",
        "type": "VARCHAR(10)"
      },
      {
        "name": "descripcion",
        "label": "Descripcion",
        "description": "Descripcion breve del proposito del procedimiento",
        "type": "TEXT"
      },
      {
        "name": "obligatorio",
        "label": "Obligatorio",
        "description": "TRUE si es obligatorio por norma, FALSE si es solo recomendado",
        "type": "BOOLEAN"
      }
    ]
  },
  {
    "table": "procedimientos_implementados",
    "title": "Procedimientos Implementados",
    "requirement": "8.1",
    "description": "tabla intermedia que relaciona cada procedimiento implementado por una organizacion (procedimientos_sgs) con su referencia normativa (procedimientos_obligatorios).",
    "operation": "Creacion de registros, edicion, consulta, reporte",
    "notes": "",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "description": "Identificador unico",
        "type": "INT"
      },
      {
        "name": "id_procedimiento_sgs",
        "label": "Id Procedimiento Sgs",
        "description": "Procedimiento implementado por la organizacion (procedimientos_sgs.id)",
        "type": "INT"
      },
      {
        "name": "id_procedimiento_obligatorio",
        "label": "Id Procedimiento Obligatorio",
        "description": "Procedimiento de referencia normativa (procedimientos_obligatorios.id)",
        "type": "INT"
      },
      {
        "name": "fecha_vinculacion",
        "label": "Fecha Vinculacion",
        "description": "Fecha en que se registro la relacion",
        "type": "DATE"
      },
      {
        "name": "cumple_requisitos",
        "label": "Cumple Requisitos",
        "description": "Indica si cumple con todos los requisitos de la norma",
        "type": "BOOLEAN"
      },
      {
        "name": "comentarios",
        "label": "Comentarios",
        "description": "Observaciones sobre el grado de cumplimiento, mejoras o excepciones detectadas",
        "type": "TEXT"
      }
    ]
  }
];
