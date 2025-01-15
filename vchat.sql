-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2025 at 02:05 PM
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
-- Database: `vchat`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profileimage` varchar(255) NOT NULL DEFAULT 'assets/images/defaultImage.png',
  `sessionID` varchar(255) NOT NULL,
  `connectionID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `username`, `name`, `email`, `password`, `profileimage`, `sessionID`, `connectionID`) VALUES
(1, 'talha', 'Talha Kamran', 'tkamran004@gmail.com', '$2y$10$9hxCf/rsY04x0Hq55Jw2JesKHADNAvW6WBpi86bJ3FGOHkTz9Ax6u', 'assets/images/talha.jpg', 'te7pfl0sq8oqklf89it27s8ucm', 226),
(2, 'amine', 'Amine Ait Mouss', 'amine004@gmail.com', '$2y$10$Q0HxnXu8WfaDkwIVdV0Bx.vjE35oUrCl2bYfA/L8WyLDyeiadreES', 'assets/images/amine.jpg', 'cv66ndrvg65onlk2prc76l3m2s', 223),
(3, 'karl', '廖国远', 'karl004@gmail.com', '$2y$10$Q0HxnXu8WfaDkwIVdV0Bx.vjE35oUrCl2bYfA/L8WyLDyeiadreES', 'assets/images/karl.jpg', '2', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
