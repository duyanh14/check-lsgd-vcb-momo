

DROP TABLE IF EXISTS `banks`;
CREATE TABLE IF NOT EXISTS `banks` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `accountNumber` text COLLATE utf8_unicode_ci NOT NULL,
  `shortName` varchar(500) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'VCB',
  `cardHolderName` varchar(500) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Unknown',
  `username` text COLLATE utf8_unicode_ci NOT NULL,
  `password` text COLLATE utf8_unicode_ci NOT NULL,
  `cookies` text COLLATE utf8_unicode_ci,
  `lastLoginInfomation` text COLLATE utf8_unicode_ci,
  `loginStatus` int(11) NOT NULL DEFAULT '0',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `payments`
--

DROP TABLE IF EXISTS `payments`;
CREATE TABLE IF NOT EXISTS `payments` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `customPaymentID` text COLLATE utf8_unicode_ci NOT NULL,
  `amount` int(255) NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `accountNumber` text COLLATE utf8_unicode_ci NOT NULL,
  `transactionStatus` int(11) NOT NULL DEFAULT '0',
  `haveCallback` int(11) NOT NULL DEFAULT '0',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `transactions`
--

DROP TABLE IF EXISTS `transactions`;
CREATE TABLE IF NOT EXISTS `transactions` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `accountNumber` text COLLATE utf8_unicode_ci NOT NULL,
  `amount` int(255) NOT NULL DEFAULT '0',
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `transactionDay` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `soThamChieu` text COLLATE utf8_unicode_ci NOT NULL,
  `isUsed` int(11) NOT NULL DEFAULT '0',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=72 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


