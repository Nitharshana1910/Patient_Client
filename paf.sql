-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2020 at 02:25 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `paf`
--

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `PID` int(50) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `FirstName` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Role` varchar(100) DEFAULT NULL,
  `StreetNo` varchar(100) DEFAULT NULL,
  `City` varchar(100) DEFAULT NULL,
  `Postalcode` varchar(100) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`PID`, `LastName`, `FirstName`, `Email`, `Role`, `StreetNo`, `City`, `Postalcode`, `password`) VALUES
(1, 'amarasinghe', 'amalya', 'amalya@gmail.com', 'patient', '6', 'matara', '234', 'amalya@123'),
(2, 'yogarajah', 'umai', 'umai123@gmail.com', 'patient', '32', 'kokuvil', '260', 'umai@321'),
(3, 'perera', 'lathusha', 'lathusha@gmail.com', 'patient', '12', 'malabe', '5233', 'lathu123'),
(4, 'perera', 'lathusha', 'lathusha@gmail.com', 'patient', '12', 'malabe', '5233', 'lathu123'),
(5, 'perera', 'lathusha', 'lathusha@gmail.com', 'patient', '12', 'malabe', '5233', 'lathu123'),
(6, 'amarasinghe', 'amalya', 'amalya@gmail.com', 'patient', '6', 'matara', '234', 'amalya@123'),
(7, 'yogarajah', 'umai', 'umai123@gmail.com', 'patient', '32', 'kokuvil', '260', 'umai@321');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`PID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `PID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
