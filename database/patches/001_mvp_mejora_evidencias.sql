USE `sgs_iso21101`;

-- Evidencias reutilizables para documentos, auditorias, incidentes, simulacros,
-- acciones correctivas y cualquier registro del SGSTA.
CREATE TABLE IF NOT EXISTS `evidencias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_organizacion` INT NOT NULL,
  `entidad_tipo` VARCHAR(100) NOT NULL,
  `entidad_id` INT NOT NULL,
  `titulo` VARCHAR(255) NOT NULL,
  `descripcion` TEXT NULL DEFAULT NULL,
  `tipo_archivo` VARCHAR(100) NULL DEFAULT NULL,
  `ruta_archivo` VARCHAR(500) NOT NULL,
  `hash_archivo` VARCHAR(128) NULL DEFAULT NULL,
  `subido_por_usuario_id` INT NULL DEFAULT NULL,
  `fecha_subida` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_evidencias_organizacion` (`id_organizacion` ASC),
  INDEX `idx_evidencias_entidad` (`entidad_tipo` ASC, `entidad_id` ASC),
  CONSTRAINT `evidencias_fk_organizacion`
    FOREIGN KEY (`id_organizacion`)
    REFERENCES `organizaciones` (`id`),
  CONSTRAINT `evidencias_fk_usuario`
    FOREIGN KEY (`subido_por_usuario_id`)
    REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Registro formal de no conformidades y acciones correctivas para cumplir el ciclo
-- de mejora de la norma.
CREATE TABLE IF NOT EXISTS `acciones_correctivas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_organizacion` INT NOT NULL,
  `origen` ENUM('Incidente', 'Auditoria', 'Revision direccion', 'Seguimiento', 'Otro') NOT NULL,
  `origen_id` INT NULL DEFAULT NULL,
  `numeral_iso` VARCHAR(20) NULL DEFAULT NULL,
  `descripcion_no_conformidad` TEXT NOT NULL,
  `correccion_inmediata` TEXT NULL DEFAULT NULL,
  `analisis_causa` TEXT NULL DEFAULT NULL,
  `accion_correctiva` TEXT NOT NULL,
  `responsable_usuario_id` INT NULL DEFAULT NULL,
  `fecha_apertura` DATE NOT NULL,
  `fecha_vencimiento` DATE NULL DEFAULT NULL,
  `fecha_cierre` DATE NULL DEFAULT NULL,
  `estado` ENUM('Abierta', 'En proceso', 'Cerrada', 'Vencida', 'Cancelada') NOT NULL DEFAULT 'Abierta',
  `verificacion_eficacia` TEXT NULL DEFAULT NULL,
  `eficaz` TINYINT(1) NULL DEFAULT NULL,
  `observaciones` TEXT NULL DEFAULT NULL,
  `fecha_creacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_acciones_correctivas_organizacion` (`id_organizacion` ASC),
  INDEX `idx_acciones_correctivas_estado` (`estado` ASC),
  INDEX `idx_acciones_correctivas_responsable` (`responsable_usuario_id` ASC),
  CONSTRAINT `acciones_correctivas_fk_organizacion`
    FOREIGN KEY (`id_organizacion`)
    REFERENCES `organizaciones` (`id`),
  CONSTRAINT `acciones_correctivas_fk_responsable`
    FOREIGN KEY (`responsable_usuario_id`)
    REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `seguimiento_acciones_correctivas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_accion_correctiva` INT NOT NULL,
  `fecha_seguimiento` DATE NOT NULL,
  `avance` TEXT NOT NULL,
  `porcentaje_avance` TINYINT UNSIGNED NULL DEFAULT NULL,
  `registrado_por_usuario_id` INT NULL DEFAULT NULL,
  `proxima_accion` TEXT NULL DEFAULT NULL,
  `fecha_proxima_accion` DATE NULL DEFAULT NULL,
  `fecha_creacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_seguimiento_accion` (`id_accion_correctiva` ASC),
  CONSTRAINT `seguimiento_acciones_fk_accion`
    FOREIGN KEY (`id_accion_correctiva`)
    REFERENCES `acciones_correctivas` (`id`),
  CONSTRAINT `seguimiento_acciones_fk_usuario`
    FOREIGN KEY (`registrado_por_usuario_id`)
    REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Revisión por la dirección, pendiente en SQL pero documentada en el Excel.
CREATE TABLE IF NOT EXISTS `revision_direccion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_organizacion` INT NOT NULL,
  `fecha_revision` DATE NOT NULL,
  `periodo_evaluado` VARCHAR(100) NULL DEFAULT NULL,
  `participantes` TEXT NULL DEFAULT NULL,
  `estado_acciones_previas` TEXT NULL DEFAULT NULL,
  `cambios_contexto` TEXT NULL DEFAULT NULL,
  `desempeno_seguridad` TEXT NULL DEFAULT NULL,
  `resultados_auditoria` TEXT NULL DEFAULT NULL,
  `incidentes_y_no_conformidades` TEXT NULL DEFAULT NULL,
  `cumplimiento_objetivos` TEXT NULL DEFAULT NULL,
  `oportunidades_mejora` TEXT NULL DEFAULT NULL,
  `decisiones` TEXT NULL DEFAULT NULL,
  `necesidad_recursos` TEXT NULL DEFAULT NULL,
  `responsable_usuario_id` INT NULL DEFAULT NULL,
  `estado` ENUM('Borrador', 'Aprobada', 'Cerrada') NOT NULL DEFAULT 'Borrador',
  `fecha_creacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_revision_direccion_organizacion` (`id_organizacion` ASC),
  CONSTRAINT `revision_direccion_fk_organizacion`
    FOREIGN KEY (`id_organizacion`)
    REFERENCES `organizaciones` (`id`),
  CONSTRAINT `revision_direccion_fk_responsable`
    FOREIGN KEY (`responsable_usuario_id`)
    REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

