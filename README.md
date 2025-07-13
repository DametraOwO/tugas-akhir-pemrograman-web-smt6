# Tumbuh Lestari Web

Tumbuh Lestari adalah website untuk brand kopi lokal yang menampilkan profil, produk, blog, dan kontak, serta menyediakan dashboard admin untuk mengelola produk dan blog. Website ini dibangun dengan Next.js (App Router), React, dan IndexedDB (untuk penyimpanan data lokal).

## Fitur Utama

### Public
- Landing page dengan hero, about, proses, dan penawaran produk
- Halaman About (profil, sejarah, kebun, tim)
- Halaman Contact (email, telepon, media sosial, alamat & maps)
- Halaman Products (daftar produk kopi)
- Halaman Blog (artikel seputar kopi)
- Footer & Header konsisten
- Animasi pop-up dan fade-in transisi

### Admin
- Login admin (default: **admin / admin**)
- Dashboard: statistik produk & blog
- CRUD Produk (tambah, edit, hapus)
- CRUD Blog (tambah, edit, hapus)
- Logout admin

## Cara Menjalankan

1. **Clone repo ini:**
   ```bash
   git clone <repo-url>
   cd Tumbuh_Lestari
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # atau
   yarn install
   ```
3. **Jalankan development server:**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```
4. **Buka di browser:**
   http://localhost:3000/public

## Akun Admin Default
- **Username:** admin
- **Password:** admin

## Teknologi
- Next.js App Router
- React
- IndexedDB (via custom utils)
- CSS Modules

## Struktur Folder
- `src/app/public/` — Halaman publik (home, about, contact, products, blog)
- `src/app/admin/` — Halaman admin (dashboard, produk, blog, login)
- `src/utils/indexedDB.js` — Utility untuk penyimpanan data produk & blog
- `public/images/` — Gambar produk, tim, logo, dsb

## Catatan
- Data produk & blog disimpan di browser (IndexedDB), cocok untuk demo/testing offline.
- Animasi transisi sudah diterapkan di seluruh halaman.
- Untuk produksi, backend/API & autentikasi lebih aman perlu ditambahkan.

---

Website ini dikembangkan untuk kebutuhan branding, promosi, dan manajemen produk Tumbuh Lestari. Silakan modifikasi sesuai kebutuhan! 