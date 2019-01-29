CREATE TABLE `voto` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `id_competencia` int(11) unsigned NOT NULL,
  `id_pelicula` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`)
);