-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th6 17, 2022 lúc 07:33 AM
-- Phiên bản máy phục vụ: 8.0.29
-- Phiên bản PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `momo`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `device`
--

CREATE TABLE `device` (
  `id` int NOT NULL,
  `device` varchar(50) DEFAULT NULL,
  `hardware` varchar(50) DEFAULT NULL,
  `facture` varchar(50) DEFAULT NULL,
  `MODELID` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `device`
--

INSERT INTO `device` (`id`, `device`, `hardware`, `facture`, `MODELID`) VALUES
(1, 'SM-G532F', 'mt6735', 'samsung', 'samsung sm-%s');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_momo`
--

CREATE TABLE `table_momo` (
  `id` int NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `password` varchar(6) DEFAULT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `imei` varchar(100) DEFAULT NULL,
  `AAID` varchar(100) DEFAULT NULL,
  `TOKEN` varchar(300) DEFAULT NULL,
  `refreshToken` varchar(1000) DEFAULT NULL,
  `ohash` varchar(100) DEFAULT NULL,
  `SECUREID` varchar(100) DEFAULT NULL,
  `rkey` varchar(100) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `rowCardId` varchar(100) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `bankCode` varchar(15) DEFAULT NULL,
  `authorization` varchar(2000) NOT NULL DEFAULT 'undefined',
  `agent_id` varchar(100) NOT NULL DEFAULT 'undefined',
  `setupKeyDecrypt` varchar(150) DEFAULT NULL,
  `setupKey` varchar(200) DEFAULT NULL,
  `sessionkey` varchar(150) DEFAULT ' ',
  `RSA_PUBLIC_KEY` text,
  `BALANCE` int DEFAULT NULL,
  `device` varchar(50) DEFAULT NULL,
  `hardware` varchar(50) DEFAULT NULL,
  `facture` varchar(50) DEFAULT NULL,
  `MODELID` varchar(100) DEFAULT NULL,
  `TimeLogin` int DEFAULT '0',
  `DataJson` varchar(5000) DEFAULT NULL,
  `BankVerify` varchar(2) NOT NULL DEFAULT '1',
  `walletStatus` varchar(30) DEFAULT NULL,
  `success` varchar(20) DEFAULT NULL,
  `messages_sent` int DEFAULT '0',
  `identify` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `REQUEST_ENCRYPT_KEY` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `table_momo`
--

INSERT INTO `table_momo` (`id`, `phone`, `password`, `Name`, `gender`, `email`, `imei`, `AAID`, `TOKEN`, `refreshToken`, `ohash`, `SECUREID`, `rkey`, `rowCardId`, `bankCode`, `authorization`, `agent_id`, `setupKeyDecrypt`, `setupKey`, `sessionkey`, `RSA_PUBLIC_KEY`, `BALANCE`, `device`, `hardware`, `facture`, `MODELID`, `TimeLogin`, `DataJson`, `BankVerify`, `walletStatus`, `success`, `messages_sent`, `identify`, `REQUEST_ENCRYPT_KEY`) VALUES
(2, NULL, NULL, 'ĐỖ MINH HẢI', NULL, NULL, '1b0a0f35-a675-6084-d2fd-b9c9dd27d7f4', 'd44899f5-d63e-f9ab-01d5-ebd4074f859a', 'TZaIgf3cly5QG9PEiZyAYQ:PA6bX5jwg-PeacQ0C58EwdT6c55LfV-hMC70FR0uGto-7o1HnHO-NRc3ZH9-2u9TzVKV7kRzAy4RokD8510eJRdhDRJbrTOXvxL4PVyHYrpFTr6a2-MwJlYRTPA_nhPMhVOxxp6-0U4F', '2HFL4i/ymDC98CrQGKChKZgFnZ66NQnvHMqSousg+fGnnMSJHVJHjtXt4ACvwe1gZ5y4z9n8BHwEu4HltEM/ydPOt8FP/VConfjarxzPMR9qjLqXTCQbqK4jqP71AzoD9LHtW+oWTj/jH+EBefF+Ra2xwkZqJyAKethjg7i47ICzSmy2PLtAZ3HjJhLVDhNQHbFW0dQRZ5ZEt/eMJMzMvFNduJddd8pUw1DPJW7RoC/oswSD4DK7kWX30+Ot8mvHB4JhF5UkXaWyCNl5AmPZvGIfrPnQDZypMyevM6DGt72TXSZZWSTLzaTHYd8jMINeMK1zpgU7HTyo/yQJoAe1UMyIH53E/5UDmo24QpiT8eGN3BSwErFuOL3pncP+OsAEStxxxX9XuxSD33dDDUbUJ7sizFA5Q4Vb0qgyTM70pI8wVf9+Loj4TluQJeCSywyrQLZ75aWtWGpSzEQT/Z5k0lDmdbGC+XoN/PGuqETL65DJQ2mJGWH3Oubyr/ZFyc/K9UAM/T/Q7Focz0rOj64qc6LoeudMdOoPKjWvfQ06loek7H/Vq/XtR5uScxJnflNNK7/KZilqN+ZM3F3ZbXPjx/+xhhowM3o6MtQiHxOJE2nl42/ZV6Iz0DAJPwFr4aPR89WK1w4kgQqvxHC8oMSutCnraEh734Oy', '85af95769b3c3438b269ba078a5f606e5b86c4ca805085c37eeeda899d205589', '38091ecbb5bbd1f79', 'aco7N52rlv0ejB6zwjY2', NULL, '12345', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyIjoiMDE2MzY1NjQ5ODkiLCJpbWVpIjoiMWIwYTBmMzUtYTY3NS02MDg0LWQyZmQtYjljOWRkMjdkN2Y0IiwiQkFOS19DT0RFIjoiMTIzNDUiLCJCQU5LX05BTUUiOiJWaWV0Y29tYmFuayIsIk1BUF9TQUNPTV9DQVJEIjowLCJOQU1FIjoixJDhu5YgTUlOSCBI4bqiSSIsIklERU5USUZZIjoiQ09ORklSTSIsIkRFVklDRV9PUyI6IkFuZHJvaWQiLCJBUFBfVkVSIjozMTAyOCwiYWdlbnRfaWQiOjQxNDg1NDEwLCJzZXNzaW9uS2V5IjoiR3FGbExPSVBVM0hDOUV3aDMzcmZnSk9FSFNhQnBKRlU4ZVBFZmRWd3BxQlZXaHZHclRaQXdRPT0iLCJORVdfTE9HSU4iOnRydWUsInBpbiI6IklVSklRblpNelBJPSIsImlzU2hvcCI6ZmFsc2UsInJlZnJlc2hUb2tlbklkIjoiMDJkMDliNDItYjZiNC00NWE5LWIxYTAtZTkzYWE3OGQ2N2I5IiwidXNlcl90eXBlIjowLCJleHAiOjE2NTU0MDA5NTh9.Namat4Db8vaX6aQGajZLBabGmSh73b6MCmY6VoS6oBBpBEJmWv5qLcTKC-iv9YBoXTSp1YW2VOpqsF-0JF2LR_WtfmE8cAo_HIx2_P7pRHWklh8Wh0hM4io4OZw-zS-dmAVVMNbjvwUrys8zpzgcaZbqUR2yUEl36WvB000KIjED5-gmR9uEkWdfd7hFrpJiDwmhztXXBKPU-dBArhpd4dnWlrvnEKSEPIYa0AEW_jT6v9sXvi6NDkbB94BmwSzq7QNDa5PDYqHjX9fY8W8mtENvyH4NyE4NK8qzdsw3mesFNV478O_JBLqC9596pxsSiUhOE201S48Btdxdh3RKbA', '41485410', '17f0a68a-e6f7-4949-b3f7-2b3e8ff43c72', 'yFmlLYffMDBt7dLoW05zDuQCh22sq+/Cxkm0PM7KsQdGsC7gQ9iFmnq/d+uQFgVN', '763e096c-6846-4857-9ac7-cd0084f67329', '-----BEGIN RSA PUBLIC KEY-----\nMEgCQQDjtTNZJnbMWXON/mhhLzENzQW8TOH/gaOZ72u6FEzfjyWSfGsP6/rMIVjY\n2w44ZyqNG2p45PGmp3Y8bquPAQGnAgMBAAE=\n-----END RSA PUBLIC KEY-----\n', 4363, 'SM-G532F', 'mt6735', 'samsung', 'samsung sm-x9kU8bjZE2jrkfYvXjRk', 1655395557, NULL, '2', '1100000000', 'true', 0, 'CONFIRM', 'JerafRCVHSR2ee4z+tQMePLVs77Bzl65eWxe8UfI7xLiVjYcA1RBzHDVdg4kA5H2dcglmD8iUCT1oiFBZr2q0w==');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `table_momo`
--
ALTER TABLE `table_momo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `device`
--
ALTER TABLE `device`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `table_momo`
--
ALTER TABLE `table_momo`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
