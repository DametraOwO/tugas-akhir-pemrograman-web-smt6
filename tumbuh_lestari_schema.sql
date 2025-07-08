-- Tabel Login Admin
CREATE TABLE login (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

-- Tabel Produk
CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    harga NUMERIC(12,2) NOT NULL,
    link_shopee TEXT,
    deskripsi TEXT,
    gambar TEXT
);

-- Tabel Postingan Blog
CREATE TABLE postingan (
    id SERIAL PRIMARY KEY,
    judul VARCHAR(150) NOT NULL,
    konten TEXT,
    gambar TEXT
); 