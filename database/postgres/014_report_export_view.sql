CREATE OR REPLACE VIEW vw_exportaciones_reportes AS
SELECT
  evento.id,
  evento.organizacion_id,
  evento.sistema_gestion_id,
  evento.actor_tipo,
  evento.evento_tipo,
  evento.titulo,
  evento.descripcion,
  evento.created_at
FROM eventos_auditoria_sistema evento
WHERE evento.evento_tipo IN ('reporte', 'exportacion_reporte')
  OR evento.titulo ILIKE '%reporte%';
