USE `competencias`;

CREATE TABLE `vs_competencias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `vs_competencias` (`id`, `nombre`)
VALUES
(1,'¿Cuál es la mejor película?'),
(2,'¿Qué drama te hizo llorar más?'),
(3,'¿Cuál es la peli más bizarra?'),
(4,'¿Cuál es la que te hizo reir más?'); 