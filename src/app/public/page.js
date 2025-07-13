'use client';
import React, { useEffect, useRef } from "react";
import styles from "./page.module.css";

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
];

export default function HomePage() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.2) {
          ref.classList.add(styles.visible);
        } else {
          ref.classList.remove(styles.visible);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.bg} style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      {sections.slice(0, 4).map((section, idx) => (
        <section
          key={section.id}
          ref={el => (sectionRefs.current[idx] = el)}
          className={styles.section}
          style={{ zIndex: 10 - idx }}
        >
          {section.content}
        </section>
      ))}
    </div>
  );
} 