CREATE OR REPLACE VIEW vw_formularios_por_requisito AS
SELECT
  requisito_codigo,
  etapa_phva,
  modulo,
  COUNT(*) AS total_formularios,
  jsonb_agg(
    jsonb_build_object(
      'codigo_formulario', codigo_formulario,
      'nombre_formulario', nombre_formulario,
      'tabla_principal', tabla_principal,
      'campos', campos,
      'tablas_relacionadas', tablas_relacionadas,
      'evidencia_generada', evidencia_generada,
      'accion_agente', accion_agente
    )
    ORDER BY nombre_formulario
  ) AS formularios
FROM formulario_tabla_matriz
WHERE activo = true
GROUP BY requisito_codigo, etapa_phva, modulo;

CREATE OR REPLACE VIEW vw_cobertura_formularios_organizacion AS
SELECT
  org.id AS organizacion_id,
  org.nombre AS organizacion,
  sg.id AS sistema_gestion_id,
  matriz.requisito_codigo,
  matriz.etapa_phva,
  COUNT(DISTINCT matriz.codigo_formulario) AS formularios_requeridos,
  COUNT(DISTINCT respuesta.id) AS formularios_respondidos,
  COUNT(DISTINCT matriz.codigo_formulario) - COUNT(DISTINCT respuesta.id) AS formularios_pendientes
FROM organizaciones org
JOIN sistemas_gestion sg ON sg.organizacion_id = org.id
JOIN formulario_tabla_matriz matriz ON matriz.activo = true
LEFT JOIN formularios_definicion def ON def.codigo = matriz.codigo_formulario
LEFT JOIN formularios_respuesta respuesta
  ON respuesta.formulario_definicion_id = def.id
  AND respuesta.organizacion_id = org.id
  AND (respuesta.sistema_gestion_id = sg.id OR respuesta.sistema_gestion_id IS NULL)
GROUP BY org.id, org.nombre, sg.id, matriz.requisito_codigo, matriz.etapa_phva;
