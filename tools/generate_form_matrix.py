from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "app" / "form_catalog.js"
APP_OUTPUT = ROOT / "app" / "form_matrix.js"
SQL_OUTPUT = ROOT / "database" / "postgres" / "005_form_table_matrix.sql"
FORM_DEF_SQL_OUTPUT = ROOT / "database" / "postgres" / "006_seed_all_catalog_forms.sql"

PHVA_BY_REQUIREMENT = {
    "4": "planear",
    "5": "planear",
    "6": "planear",
    "7": "hacer",
    "8": "hacer",
    "9": "verificar",
    "10": "actuar",
}

MODULE_BY_TABLE = {
    "organizaciones": "empresa",
    "usuarios": "usuarios",
    "capitulos_iso": "norma",
    "compromiso_liderazgo": "liderazgo",
    "contexto_interno_externo": "planificacion",
    "contexto_actividades": "actividades",
    "impacto_riesgo": "riesgos",
    "probabilidad_riesgo": "riesgos",
    "mapa_riesgos": "riesgos",
    "plantillas_documentos": "documentos",
    "procedimientos_sgs": "documentos",
    "politica_seguridad": "liderazgo",
    "roles_responsabilidades": "personal",
    "normograma": "legal",
    "politica_sgs": "liderazgo",
    "objetivos_sgs": "objetivos",
    "plan_objetivos_sgs": "objetivos",
    "cargos": "personal",
    "competencias_minimas": "personal",
    "personas": "personal",
    "compromiso_personal": "personal",
    "plan_comunicaciones": "comunicaciones",
    "registro_comunicaciones_seguridad": "comunicaciones",
    "documentos_controlados": "documentos",
    "documentacion_minima": "documentos",
    "politica_datos_personales": "participantes",
    "bitacora_actividades": "actividades",
    "procedimientos_servicio": "actividades",
    "equipos": "equipos",
    "plan_emergencia": "emergencias",
    "simulacros": "emergencias",
    "simulacro_evidencias": "emergencias",
    "registro_participantes_evidencia": "participantes",
    "registro_incidentes": "incidentes",
    "acciones_sugeridas": "mejora",
    "seguimiento_medicion": "indicadores",
    "programa_auditorias": "auditorias",
    "plan_auditoria": "auditorias",
    "informe_auditoria_detalle": "auditorias",
    "referencia_norma_iso21101": "norma",
    "acciones_correctivas": "mejora",
    "informe_auditoria": "auditorias",
    "seguimiento_acciones_correctivas": "mejora",
    "revision_direccion": "revision_direccion",
    "procedimientos_obligatorios": "documentos",
    "procedimientos_implementados": "documentos",
}

RELATIONS_BY_TABLE = {
    "organizaciones": ["usuarios", "sistemas_gestion", "personas", "documentos", "evidencias"],
    "usuarios": ["organizaciones", "usuario_roles", "acciones_gestion", "evidencias"],
    "capitulos_iso": ["normas", "norma_versiones", "requisitos_normativos"],
    "compromiso_liderazgo": ["organizaciones", "usuarios", "evidencias", "acciones_gestion"],
    "contexto_interno_externo": ["organizaciones", "usuarios", "evidencias"],
    "contexto_actividades": ["organizaciones", "actividades_servicios", "riesgos"],
    "impacto_riesgo": ["mapa_riesgos", "riesgos"],
    "probabilidad_riesgo": ["mapa_riesgos", "riesgos"],
    "mapa_riesgos": ["sistemas_gestion", "actividades_servicios", "usuarios", "acciones_gestion", "evidencias"],
    "plantillas_documentos": ["documentos", "documento_versiones"],
    "procedimientos_sgs": ["organizaciones", "documentos", "procedimientos_implementados"],
    "politica_seguridad": ["organizaciones", "usuarios", "documentos", "evidencias"],
    "roles_responsabilidades": ["organizaciones", "usuarios", "personas", "cargos"],
    "normograma": ["organizaciones", "usuarios", "requisitos_normativos", "acciones_gestion"],
    "politica_sgs": ["organizaciones", "usuarios", "objetivos_sgs", "documentos"],
    "objetivos_sgs": ["politica_sgs", "plan_objetivos_sgs", "seguimiento_medicion"],
    "plan_objetivos_sgs": ["objetivos_sgs", "acciones_gestion", "seguimiento_medicion"],
    "cargos": ["personas", "competencias_minimas", "asignaciones_personal"],
    "competencias_minimas": ["cargos", "evaluaciones_competencia", "certificados_competencia"],
    "personas": ["organizaciones", "cargos", "asignaciones_personal", "capacitacion_asistentes", "certificados_competencia"],
    "compromiso_personal": ["personas", "sistemas_gestion", "evidencias"],
    "plan_comunicaciones": ["organizaciones", "registro_comunicaciones_seguridad"],
    "registro_comunicaciones_seguridad": ["organizaciones", "plan_comunicaciones", "evidencias"],
    "documentos_controlados": ["organizaciones", "documentacion_minima", "documentos", "documento_versiones"],
    "documentacion_minima": ["documentos_controlados", "requisitos_normativos"],
    "politica_datos_personales": ["organizaciones", "participantes_evidencia_externa"],
    "bitacora_actividades": ["organizaciones", "actividades_servicios", "personas", "registro_participantes_evidencia"],
    "procedimientos_servicio": ["organizaciones", "actividades_servicios", "documentos"],
    "equipos": ["organizaciones", "actividades_servicios", "personas", "inspecciones_equipos", "mantenimientos_equipos"],
    "plan_emergencia": ["organizaciones", "actividades_servicios", "simulacros", "documentos"],
    "simulacros": ["sistemas_gestion", "actividades_servicios", "plan_emergencia", "acciones_gestion"],
    "simulacro_evidencias": ["simulacros", "evidencias", "acciones_gestion"],
    "registro_participantes_evidencia": ["bitacora_actividades", "actividades_servicios", "evidencias"],
    "registro_incidentes": ["sistemas_gestion", "actividades_servicios", "equipos", "acciones_gestion", "evidencias"],
    "acciones_sugeridas": ["acciones_gestion", "requisitos_normativos", "evidencias"],
    "seguimiento_medicion": ["organizaciones", "actividades_servicios", "objetivos_sgs", "acciones_gestion"],
    "programa_auditorias": ["sistemas_gestion", "auditorias"],
    "plan_auditoria": ["programa_auditorias", "auditorias"],
    "informe_auditoria_detalle": ["informe_auditoria", "hallazgos_auditoria", "acciones_gestion"],
    "referencia_norma_iso21101": ["normas", "norma_versiones", "requisitos_normativos"],
    "acciones_correctivas": ["acciones_gestion", "seguimientos_acciones_gestion", "evidencias"],
    "informe_auditoria": ["plan_auditoria", "auditorias", "hallazgos_auditoria"],
    "seguimiento_acciones_correctivas": ["acciones_gestion", "seguimientos_acciones_gestion", "evidencias"],
    "revision_direccion": ["revisiones_direccion", "acciones_gestion", "auditorias", "incidentes", "capacitaciones"],
    "procedimientos_obligatorios": ["procedimientos_sgs", "procedimientos_implementados", "requisitos_normativos"],
    "procedimientos_implementados": ["procedimientos_sgs", "procedimientos_obligatorios", "documentos", "evidencias"],
}

AGENT_ACTION_BY_MODULE = {
    "empresa": "Preparar contexto, alcance y datos base de la organizacion.",
    "usuarios": "Asignar responsables y validar roles del sistema.",
    "norma": "Conectar registros con requisitos normativos y PHVA.",
    "liderazgo": "Preparar borradores para aprobacion de la direccion.",
    "planificacion": "Detectar brechas de contexto, alcance y partes interesadas.",
    "actividades": "Cruzar actividad, personal, equipos, riesgos y participantes.",
    "riesgos": "Calcular brechas y proponer acciones preventivas.",
    "documentos": "Generar borradores, controlar versiones y asociar evidencias.",
    "personal": "Detectar brechas de competencia, conciencia y asignacion.",
    "legal": "Alertar vencimientos y requisitos legales sin evidencia.",
    "objetivos": "Preparar planes, indicadores y seguimiento de objetivos.",
    "comunicaciones": "Validar comunicaciones requeridas y evidencias.",
    "participantes": "Registrar soporte externo sin guardar datos sensibles.",
    "equipos": "Alertar inspecciones, mantenimientos y equipos no operativos.",
    "emergencias": "Preparar planes, simulacros y acciones derivadas.",
    "incidentes": "Crear acciones correctivas y actualizar riesgos.",
    "mejora": "Crear acciones, seguimientos y verificacion de eficacia.",
    "indicadores": "Consolidar mediciones para revision y mejora.",
    "auditorias": "Preparar programa, plan, hallazgos y acciones.",
    "revision_direccion": "Consolidar entradas y salidas para aprobacion directiva.",
}


def load_catalog() -> list[dict]:
    text = CATALOG.read_text(encoding="utf-8")
    prefix = "window.formCatalog = "
    if not text.startswith(prefix):
        raise ValueError("Unexpected form catalog format")
    return json.loads(text[len(prefix) :].rstrip(";\n"))


def phva_for(requirement: str) -> str:
    chapter = requirement.split(".")[0]
    return PHVA_BY_REQUIREMENT.get(chapter, "planear")


def sql_literal(value: object) -> str:
    if value is None:
        return "NULL"
    text = json.dumps(value, ensure_ascii=True) if isinstance(value, (list, dict)) else str(value)
    return "'" + text.replace("'", "''") + "'"


def build_matrix(catalog: list[dict]) -> list[dict]:
    matrix = []
    for form in catalog:
        table = form["table"]
        module = MODULE_BY_TABLE.get(table, "sistema")
        requirement = form.get("requirement", "4.4")
        matrix.append(
            {
                "form": form["title"],
                "code": f"FORM-{table.upper().replace('_', '-')}",
                "table": table,
                "module": module,
                "requirement": requirement,
                "phva": phva_for(requirement),
                "fields": [field["name"] for field in form.get("fields", [])],
                "relatedTables": RELATIONS_BY_TABLE.get(table, ["organizaciones", "evidencias"]),
                "evidence": f"Registro diligenciado de {form['title']}",
                "agentAction": AGENT_ACTION_BY_MODULE.get(module, "Registrar, revisar y asociar evidencia."),
            }
        )
    return matrix


def write_app_matrix(matrix: list[dict]) -> None:
    payload = json.dumps(matrix, ensure_ascii=True, indent=2)
    APP_OUTPUT.write_text(f"window.formMatrix = {payload};\n", encoding="utf-8")


def write_sql_matrix(matrix: list[dict]) -> None:
    rows = []
    for item in matrix:
        rows.append(
            "  ("
            + ", ".join(
                [
                    sql_literal(item["code"]),
                    sql_literal(item["form"]),
                    sql_literal(item["table"]),
                    sql_literal(item["module"]),
                    sql_literal(item["requirement"]),
                    sql_literal(item["phva"]),
                    sql_literal(item["fields"]),
                    sql_literal(item["relatedTables"]),
                    sql_literal(item["evidence"]),
                    sql_literal(item["agentAction"]),
                ]
            )
            + ")"
        )

    sql = """CREATE TABLE IF NOT EXISTS formulario_tabla_matriz (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_formulario TEXT NOT NULL UNIQUE,
  nombre_formulario TEXT NOT NULL,
  tabla_principal TEXT NOT NULL,
  modulo TEXT NOT NULL,
  requisito_codigo TEXT NOT NULL,
  etapa_phva phva_etapa NOT NULL,
  campos JSONB NOT NULL DEFAULT '[]'::jsonb,
  tablas_relacionadas JSONB NOT NULL DEFAULT '[]'::jsonb,
  evidencia_generada TEXT NOT NULL,
  accion_agente TEXT NOT NULL,
  activo BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

WITH matrix(codigo_formulario, nombre_formulario, tabla_principal, modulo, requisito_codigo, etapa_phva, campos, tablas_relacionadas, evidencia_generada, accion_agente) AS (
VALUES
"""
    sql += ",\n".join(rows)
    sql += """
)
INSERT INTO formulario_tabla_matriz (
  codigo_formulario,
  nombre_formulario,
  tabla_principal,
  modulo,
  requisito_codigo,
  etapa_phva,
  campos,
  tablas_relacionadas,
  evidencia_generada,
  accion_agente
)
SELECT
  codigo_formulario,
  nombre_formulario,
  tabla_principal,
  modulo,
  requisito_codigo,
  etapa_phva::phva_etapa,
  campos::jsonb,
  tablas_relacionadas::jsonb,
  evidencia_generada,
  accion_agente
FROM matrix
ON CONFLICT (codigo_formulario) DO UPDATE
  SET nombre_formulario = EXCLUDED.nombre_formulario,
      tabla_principal = EXCLUDED.tabla_principal,
      modulo = EXCLUDED.modulo,
      requisito_codigo = EXCLUDED.requisito_codigo,
      etapa_phva = EXCLUDED.etapa_phva,
      campos = EXCLUDED.campos,
      tablas_relacionadas = EXCLUDED.tablas_relacionadas,
      evidencia_generada = EXCLUDED.evidencia_generada,
      accion_agente = EXCLUDED.accion_agente,
      activo = true;

CREATE INDEX IF NOT EXISTS idx_formulario_tabla_matriz_requisito ON formulario_tabla_matriz(requisito_codigo);
CREATE INDEX IF NOT EXISTS idx_formulario_tabla_matriz_modulo ON formulario_tabla_matriz(modulo);
CREATE INDEX IF NOT EXISTS idx_formulario_tabla_matriz_phva ON formulario_tabla_matriz(etapa_phva);
"""
    SQL_OUTPUT.write_text(sql, encoding="utf-8")


def write_form_definition_seed(catalog: list[dict], matrix: list[dict]) -> None:
    by_table = {item["table"]: item for item in matrix}
    rows = []
    for form in catalog:
        relation = by_table[form["table"]]
        fields = [
            {
                "name": field["name"],
                "label": field["label"],
                "type": field["type"],
                "description": field["description"],
                "required": field["name"] not in {"id", "fecha_creacion", "fecha_actualizacion"},
            }
            for field in form.get("fields", [])
        ]
        rows.append(
            "  ("
            + ", ".join(
                [
                    sql_literal(relation["code"]),
                    sql_literal(form["title"]),
                    sql_literal(relation["module"]),
                    sql_literal(relation["requirement"]),
                    sql_literal(fields),
                ]
            )
            + ")"
        )

    sql = """WITH version AS (
  SELECT nv.id
  FROM norma_versiones nv
  JOIN normas n ON n.id = nv.norma_id
  WHERE n.codigo = 'NTC-ISO-21101' AND nv.version = '2020'
),
req AS (
  SELECT r.id, r.codigo
  FROM requisitos_normativos r
  JOIN version v ON v.id = r.norma_version_id
),
forms(codigo, nombre, modulo, requisito_codigo, campos) AS (
VALUES
"""
    sql += ",\n".join(rows)
    sql += """
)
INSERT INTO formularios_definicion (codigo, nombre, modulo, requisito_id, campos, activo)
SELECT forms.codigo, forms.nombre, forms.modulo, req.id, forms.campos::jsonb, true
FROM forms
LEFT JOIN req ON req.codigo = forms.requisito_codigo
ON CONFLICT (codigo) DO UPDATE
  SET nombre = EXCLUDED.nombre,
      modulo = EXCLUDED.modulo,
      requisito_id = EXCLUDED.requisito_id,
      campos = EXCLUDED.campos,
      activo = true;
"""
    FORM_DEF_SQL_OUTPUT.write_text(sql, encoding="utf-8")


def main() -> None:
    catalog = load_catalog()
    matrix = build_matrix(catalog)
    write_app_matrix(matrix)
    write_sql_matrix(matrix)
    write_form_definition_seed(catalog, matrix)
    print(f"Wrote {len(matrix)} matrix rows")
    print(APP_OUTPUT)
    print(SQL_OUTPUT)
    print(FORM_DEF_SQL_OUTPUT)


if __name__ == "__main__":
    main()
