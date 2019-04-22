-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 22 Avril 2019 à 18:06
-- Version du serveur :  5.7.17-log
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `api`
--

-- --------------------------------------------------------

--
-- Structure de la table `labeltest`
--

CREATE TABLE IF NOT EXISTS `labeltest` (
  `IpId` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `numero` int(6) DEFAULT NULL,
  PRIMARY KEY (`IpId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=31 ;

--
-- Contenu de la table `labeltest`
--

INSERT INTO `labeltest` (`IpId`, `numero`) VALUES
(1, 1),
(2, 2),
(5, 5),
(8, 8),
(14, 10),
(15, 10),
(20, 20);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
