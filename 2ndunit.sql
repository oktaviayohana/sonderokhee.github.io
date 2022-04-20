-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 18, 2022 at 11:49 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `2ndunit`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` tinytext NOT NULL,
  `email` tinytext NOT NULL,
  `password` longtext NOT NULL,
  `vkey` varchar(255) DEFAULT NULL,
  `verified` tinyint(1) DEFAULT 0,
  `creation_date` date NOT NULL DEFAULT current_timestamp(),
  `producer` tinyint(1) DEFAULT 0,
  `client` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password`, `vkey`, `verified`, `creation_date`, `producer`, `client`) VALUES
(16, 'mmmm', 'mjm.munro@hotmail.com', '$2a$08$lLyzQmHGCijS2gW3FmMEwOoB8nL1KSvsqv7N1YjOL/H6CgidyZhay', NULL, 0, '2021-04-18', 0, 0),
(17, 'eeee', 'mjm.munro@hotmail.com', '$2a$08$GtOIHuSzSwuSwdOM84ud0eRfZxUeKgXh6D1d58/QJPOb.Tl.d6Mhu', NULL, 0, '2021-04-18', 0, 0),
(18, 'mmmm', 'mjm.munro@hotmail.com', '$2a$08$/DyN4NGMTOCPXVQfrQunweaWkYFkmEkhdPFD.J6ec57TMKWE90t1C', NULL, 0, '2021-07-01', 0, 0),
(19, 'mmmm', 'mjm.munro@hotmail.com', '$2a$08$ad120VLD.xnRqfkF4QIr9OhEJKf.CDEL53JUqapEf7ShtOGSsBxGW', NULL, 0, '2021-07-01', 0, 0),
(20, 'mmmm', 'mjm.munro@gmail.com', '$2a$08$HTbgSm8KRLbKwIPjnymWjODHVLdWaHzrpjTdTDQngVwtJIxeUkwou', NULL, 0, '2021-07-01', 0, 0),
(21, 'momo', 'mjm.munro@hotmail.com', '$2a$08$PETe6CA3.onMycVu5qszWuKHQBeIxAxt.dUQEIjz0/b3Rip.fpAIq', NULL, 0, '2021-07-01', 0, 0),
(22, 'jmunro96', 'mjm.munro@hotmail.com', '$2a$08$QEMeW73pxT5LWolNxdOqbuDyB3233lNKgdotHqcFE8C8rG7I3/hom', NULL, 0, '2021-07-01', 0, 0),
(23, 'jmunro96', 'mjm.munro@gmail.com', '$2a$08$8UZ3lNEDEV/TUc6d0G8vseQqBEe.KEp5U5FkXjdMWGdTwvNqAS2FW', NULL, 0, '2021-07-01', 0, 0),
(24, 'atech', 'morgan@atech.industries', '$2a$08$haw7HskeaY553HWPWBjf5.ETUcUsiybTyYTrOkDvzp74x2hAz9V.u', NULL, 0, '2022-04-19', 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
