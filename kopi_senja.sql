-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 14, 2023 at 08:44 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kopi_senja`
--

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `id_produk` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id` int(11) NOT NULL,
  `nama_produk` varchar(100) NOT NULL,
  `jenis_kopi` varchar(100) NOT NULL,
  `harga` int(11) NOT NULL,
  `deskripsi` varchar(1000) DEFAULT NULL,
  `url_gambar` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `nama_produk`, `jenis_kopi`, `harga`, `deskripsi`, `url_gambar`) VALUES
(1, 'Senja Amer', 'Americano', 20000, 'Americano adalah minuman kopi yang populer di seluruh dunia. Secara umum, Americano terbuat dari ekstraksi espresso yang dituangkan ke dalam air panas. Namun, Americano memiliki perbandingan espresso dan air yang berbeda dengan beberapa jenis minuman kopi lainnya. Americano memiliki tingkat kepekatan kopi yang lebih rendah karena penambahan air, tetapi masih mempertahankan sebagian besar karakteristik rasa dan aroma dari espresso. Rasanya bisa dianggap sebagai kombinasi antara espresso dan kopi ', '/images/kopi/americano-removebg.png'),
(2, 'Senja Latte', 'Caffe Latte', 25000, 'Caffe Latte, juga dikenal sebagai Latte, adalah minuman kopi yang populer di seluruh dunia. Ia memiliki kombinasi antara espresso, susu, dan lapisan busa susu yang lembut di atasnya. Caffe Latte biasanya disajikan panas, meskipun beberapa variasi seperti iced latte atau latte dingin dengan es juga populer. Beberapa orang mungkin menambahkan sirup rasa, seperti vanilla atau karamel, untuk memberikan sentuhan manis atau variasi rasa pada Caffe Latte mereka.', '/images/kopi/senja-latte-removebg.png'),
(3, 'Senja Manis', 'Caramel Macchiato', 30000, 'Caramel Macchiato adalah minuman kopi yang populer di kalangan pecinta kopi yang menyajikan kombinasi antara espresso, susu, busa susu, dan sirup karamel. Ini adalah minuman yang lezat dan manis dengan sentuhan karamel yang khas. Proses pembuatan Caramel Macchiato dimulai dengan mengekstrak satu atau dua shot espresso menggunakan mesin kopi espresso. Espresso adalah metode ekstraksi kopi yang melibatkan mengalirkan air panas dengan tekanan tinggi melalui bubuk kopi yang halus. Ini menghasilkan m', '/images/kopi/senja-manis-removebg.png'),
(4, 'Senja Pait', 'Espresso Machiato', 21000, 'Espresso Macchiato adalah minuman kopi yang terdiri dari satu atau dua shot espresso yang ditambahkan dengan sejumlah kecil susu atau busa susu di atasnya. \"Macchiato\" dalam bahasa Italia berarti \"bercoret\" atau \"bercak\", yang menunjukkan bahwa espresso \"diberi tanda\" dengan susu. Espresso Macchiato biasanya disajikan dalam cangkir kecil atau gelas kecil, dan disajikan panas. Ini adalah minuman yang cocok untuk mereka yang menyukai rasa kuat dari espresso namun ingin sedikit sentuhan dari susu.', '/images/kopi/senja-pait-removebg.png'),
(5, 'Senja Nilla', 'Vanilla Latte', 30000, 'Vanilla Latte adalah minuman kopi yang lezat dan populer yang menggabungkan rasa kopi dengan sentuhan manis dan aroma vanilla. Ini adalah variasi dari Caffe Latte yang dibuat dengan menambahkan sirup vanilla ke dalam campuran espresso dan susu. Proses pembuatan Vanilla Latte dimulai dengan mengekstrak satu atau dua shot espresso menggunakan mesin kopi espresso. Espresso adalah metode ekstraksi kopi yang melibatkan mengalirkan air panas dengan tekanan tinggi melalui bubuk kopi yang halus.', '/images/kopi/senja-nilla-removebg.png'),
(6, 'Senja Mocha', 'Caffe Mocha', 25000, 'Caffe Mocha, juga dikenal sebagai Mocha, adalah minuman kopi yang menggabungkan rasa kopi, cokelat, dan susu. Ini adalah minuman yang kaya, manis, dan cocok untuk pecinta kopi dan cokelat.Proses pembuatan Caffe Mocha dimulai dengan mengekstrak satu atau dua shot espresso menggunakan mesin kopi espresso. Espresso adalah metode ekstraksi kopi yang melibatkan mengalirkan air panas dengan tekanan tinggi melalui bubuk kopi yang halus. ', '/images/kopi/senja-mocha-removebg.png'),
(7, 'Senja Mocha Freeze', 'Ice Caffe Mocha', 27000, 'Iced Caffe Mocha adalah variasi Caffe Mocha yang disajikan dalam bentuk dingin dengan es. Ini adalah minuman yang menyegarkan dan cocok untuk dinikmati saat cuaca panas. Proses pembuatan Iced Caffe Mocha mirip dengan Caffe Mocha panas, tetapi dengan penambahan es dan beberapa penyesuaian dalam proporsi bahan. ', '/images/kopi/senja-mocha-frezze-removebg.png'),
(8, 'Senjacino', 'Cappucino', 30000, 'Cappuccino adalah minuman kopi yang terdiri dari espresso, susu steamed, dan busa susu yang lembut di atasnya. Ini adalah salah satu minuman kopi yang populer dan banyak disukai di seluruh dunia. Proses pembuatan Cappuccino dimulai dengan mengekstrak satu atau dua shot espresso menggunakan mesin kopi espresso. Espresso adalah metode ekstraksi kopi yang melibatkan mengalirkan air panas dengan tekanan tinggi melalui bubuk kopi yang halus. Ini menghasilkan minuman kopi yang kental dan pekat dengan ', '/images/kopi/senjacino-removebg.png');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `is_login` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `is_login`) VALUES
(2, 'larryjo', '$2a$12$66qzaYQ71IbEIAsCDe73ge9FjYQ/7gqQ.w/qHCvSFtDoG077.uKty', 0),
(3, 'larryrondonuwu', '$2b$12$oyB82fFOf8L2EOrZCA6MN.Naf2B414sAvgYqCTgbBXbZA86Nf1at6', 0),
(4, 'christian', '$2b$12$i0mgNJxAiqE2bxBzft3VduRFK2QV/h/wza99Qe/sykwbn/1r6/PTy', 0),
(6, 'backend', '$2b$12$b9anLNJugN.14rN/JCrcueUmVFAyVUHINwZ4MKkWfLGqvGXJJAA4u', 0),
(7, 'asfsfa', '$2b$12$1psQG7MOl80i2dTZC7qmeOIt2ZHbGXBWQeSp/SBAwIToUj37TOKMC', 0),
(8, 'deo', '$2b$12$yS9wyIhpbTwssT6xB0bsbeG75fizZoSLgF1CGhXMHGjfNExVaJ352', 1),
(9, 'christianlarry', '$2b$12$i9fREFbrY7Yn5/b/NVverO5Up4OJ7AOZpxz.15uVjLcr0z9YdQkmm', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_ibfk_1` (`id_produk`),
  ADD KEY `order_ibfk_2` (`id_user`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
