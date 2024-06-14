-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 14, 2024 at 03:56 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `learnify`
--

-- --------------------------------------------------------

--
-- Table structure for table `e-category`
--

CREATE TABLE `e-category` (
  `id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `e-prodect`
--

CREATE TABLE `e-prodect` (
  `id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Price` int(200) NOT NULL,
  `Img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `e-prodect`
--

INSERT INTO `e-prodect` (`id`, `Name`, `Price`, `Img`) VALUES
(1, 'Hassan', 200, 'images/dom-hill-nimElTcTNyY-unsplash.jpg'),
(2, 'owmen', 98, 'images/dom-hill-nimElTcTNyY-unsplash.jpg'),
(3, 'childern', 22, 'images/md-salman-tWOz2_EK5EQ-unsplash.jpg'),
(4, 'childern', 434, 'images/janko-ferlic-PWcJ9t7Ne_Q-unsplash.jpg'),
(5, 'man', 232, 'images/waldemar-Db4d6MRIXJc-unsplash.jpg'),
(6, 'man', 11, 'images/caio-coelho-QRN47la37gw-unsplash.jpg'),
(7, 'man', 77, 'images/caio-coelho-rjsee9nKsYE-unsplash.jpg'),
(8, 'owmen', 66, 'images/mediamodifier-PKdcZz-o6bw-unsplash.jpg'),
(9, 'childern', 223, 'images/mediamodifier-fdPlZXc-ZwU-unsplash.jpg'),
(10, 'owmen', 55, 'images/marissa-grootes-D4jRahaUaIc-unsplash.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `e-user`
--

CREATE TABLE `e-user` (
  `id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `e-user`
--

INSERT INTO `e-user` (`id`, `Name`, `Email`, `Password`) VALUES
(1, 'admin', 'admin', 'admin'),
(4, 'mohammed', 'oxnwv5', '777'),
(5, 'ddjf', 'nwdh@', '898');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `e-prodect`
--
ALTER TABLE `e-prodect`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `e-user`
--
ALTER TABLE `e-user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `e-prodect`
--
ALTER TABLE `e-prodect`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `e-user`
--
ALTER TABLE `e-user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
