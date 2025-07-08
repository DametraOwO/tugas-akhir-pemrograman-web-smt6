'use client';
import React, { useEffect, useRef } from "react";
import styles from "./public/page.module.css";
import Header from "./public/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";

const sections = [
  {
    id: 1,
    content: (
      <>
        <div className={styles.sectionTitle} style={{ color: '#a86b3c', fontWeight: 700, fontSize: '3.5rem' }}>
          <span style={{ color: '#a86b3c' }}>Tumbuh</span> <span style={{ color: '#fff' }}>Lestari</span>
        </div>
        <div className={styles.sectionSubtitle} style={{ color: '#fff', fontWeight: 400, fontSize: '1.2rem' }}>
          Menyulam Keharmonisan <span style={{ color: '#a86b3c' }}>Lingkungan</span> dan Kenikmatan Rasa
        </div>
        <button style={{ background: '#a86b3c', color: '#fff', border: 'none', padding: '0.7rem 2rem', borderRadius: 4, fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>Explore</button>
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        <div className={styles.sectionTitle} style={{ color: '#a86b3c', fontWeight: 700, fontSize: '2.5rem', textAlign: 'left', width: '100%' }}>
          About Us
        </div>
        <div className={styles.sectionSubtitle} style={{ color: '#fff', fontWeight: 700, fontSize: '2rem', textAlign: 'left', width: '100%' }}>
          Nikmati kopi terbaik <span style={{ color: '#a86b3c' }}>dengan cita rasa otentik</span>
        </div>
        <div className={styles.sectionContent} style={{ color: '#fff', textAlign: 'left' }}>
          Sambutlah aroma segar dan kenikmatan yang tiada tara dengan setiap tegukan kopi kami. Kopi Tumbuh Lestari menghadirkan lebih dari sekadar secangkir kopi. Tapi di balik setiap biji yang dipanggang dengan cermat, terdapat cerita tentang cinta pada alam. Dengan setiap tanaman yang kami pelihara, kami menghidupkan kembali bumi yang kita cintai.
        </div>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <div style={{ color: '#a86b3c', fontWeight: 700, fontSize: '1.5rem' }}>100%</div>
            <div style={{ color: '#fff' }}>Biji kopi asli dipetik oleh petani profesional.</div>
          </div>
          <div>
            <div style={{ color: '#a86b3c', fontWeight: 700, fontSize: '1.5rem' }}>50+</div>
            <div style={{ color: '#fff' }}>Biji kopi asli dipetik oleh petani profesional.</div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        <div className={styles.sectionTitle} style={{ color: '#a86b3c', fontWeight: 700, fontSize: '2.5rem' }}>
          Proses Pengerjaan
        </div>
        <div className={styles.sectionContent}>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 200 }}>
              <div style={{ color: '#a86b3c', fontWeight: 700 }}>1. Panen</div>
              <div style={{ color: '#fff' }}>Proses kopi dimulai dengan panen, di mana buah kopi dipetik secara selektif</div>
            </div>
            <div style={{ minWidth: 200 }}>
              <div style={{ color: '#a86b3c', fontWeight: 700 }}>2. Roasting</div>
              <div style={{ color: '#fff' }}>Biji kopi mentah dipanggang pada suhu tinggi untuk mengembangkan rasa dan aroma.</div>
            </div>
            <div style={{ minWidth: 200 }}>
              <div style={{ color: '#a86b3c', fontWeight: 700 }}>3. Packaging</div>
              <div style={{ color: '#fff' }}>Bubuk atau biji kopi yang sudah dipanggang dikemas dalam kemasan yang sesuai untuk menjaga kesegarannya.</div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        <div className={styles.sectionTitle} style={{ color: '#a86b3c', fontWeight: 700, fontSize: '2.5rem' }}>
          Penawaran Terbaik Kami
        </div>
        <div className={styles.sectionContent}>
          Kami menyediakan berbagai macam produk berkualitas yang bisa Anda dapatkan dengan harga terbaik.
        </div>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 8, padding: 16, minWidth: 200 }}>
            <div style={{ color: '#a86b3c', fontWeight: 700 }}>Classic Arabica</div>
            <div style={{ color: '#a86b3c', fontWeight: 400 }}>Semiwash Process</div>
            <div style={{ color: '#333' }}>Proses olah giling basah (semi wash process), berlangsung dengan cara mengupas biji kopi setengah kering...</div>
          </div>
          <div style={{ background: '#fff', borderRadius: 8, padding: 16, minWidth: 200 }}>
            <div style={{ color: '#a86b3c', fontWeight: 700 }}>Natural Robusta</div>
            <div style={{ color: '#a86b3c', fontWeight: 400 }}>Semiwash Process</div>
            <div style={{ color: '#333' }}>Proses olah giling buah (natural process), berlangsung dengan cara mengupas biji kopi setengah kering...</div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 5,
    content: (
      <>
        <div className={styles.sectionContent}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ color: '#fff', fontWeight: 700 }}>Quick</div>
              <div style={{ color: '#fff' }}>Home<br/>About<br/>Contact<br/>Products<br/>Blog</div>
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700 }}>Connect with</div>
              <div style={{ color: '#fff' }}>tumbuhlestaritalks@gmail.com<br/>+62 838 3203 3996</div>
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700 }}>Kerja Sama</div>
              <div style={{ color: '#fff' }}>Gudang Madala Haji<br/>Petani Milenial Sukarame</div>
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700 }}>Subscribe now</div>
              <div style={{ color: '#fff' }}>IG FB</div>
            </div>
          </div>
          <div style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>
            Copyright © 2024 Tumbuh Lestari
          </div>
        </div>
      </>
    ),
  },
];

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Dummy login, ganti dengan API/database nanti
    if (username === "admin" && password === "admin") {
      router.push("/admin/home");
    } else {
      setError("Username atau password salah");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff" }}>
      <form onSubmit={handleLogin} style={{ background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px #0001", padding: 32, minWidth: 320, maxWidth: 350 }}>
        <h2 style={{ margin: 0, fontWeight: 700 }}>Login</h2>
        <div style={{ color: '#888', fontSize: 14, marginBottom: 18 }}>Masukkan username dan password untuk login</div>
        <button type="button" onClick={() => router.push("/public")} style={{ width: "100%", marginBottom: 18, background: "#fff", color: "#ff7f2a", border: "1px solid #ff7f2a", borderRadius: 4, padding: 10, fontWeight: 600, cursor: "pointer" }}>
          Masuk Ke Halaman Utama
        </button>
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: 500, fontSize: 15 }}>Username</label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{ width: "100%", padding: 12, borderRadius: 4, border: "1px solid #ddd", marginTop: 4, fontSize: 15, boxSizing: 'border-box' }}
            autoComplete="username"
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{ fontWeight: 500, fontSize: 15 }}>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: 12, borderRadius: 4, border: "1px solid #ddd", marginTop: 4, fontSize: 15, boxSizing: 'border-box' }}
            autoComplete="current-password"
          />
        </div>
        {error && <div style={{ color: "#e74c3c", marginBottom: 12, fontSize: 14 }}>{error}</div>}
        <button type="submit" style={{ width: "100%", background: "#ff7f2a", color: "#fff", border: "none", borderRadius: 4, padding: 12, fontWeight: 600, fontSize: 16, cursor: "pointer" }}>
          Sign in
        </button>
      </form>
    </div>
  );
} 