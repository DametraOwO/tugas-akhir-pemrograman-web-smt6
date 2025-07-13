'use client';
import React, { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { getProducts } from "../../utils/indexedDB";

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
  // Hapus section Proses Pengerjaan lama (id: 3)
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
  const aboutUsRef = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

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

  const handleExploreClick = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.bg} style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroTitle}>
            Tumbuh <span>Lestari</span>
          </div>
          <div className={styles.heroSubtitle}>
            <span className={styles.heroSubtitleWhite}>Menyulam Keharmonisan</span> <span className={styles.heroSubtitleBrown}>Lingkungan dan Kenikmatan Rasa</span>
          </div>
          <button className={styles.heroButton} onClick={handleExploreClick}>Explore</button>
        </div>
        <div className={styles.heroRight}>
          <Image src="/images/kopi-transparan.png" alt="Kopi" width={340} height={340} className={styles.heroImage} priority />
        </div>
      </section>
      {/* About Us Section */}
      <section className={styles.aboutSection} ref={aboutUsRef}>
        <div className={styles.aboutImageWrap}>
          <Image src="/images/homeabout.jpeg" alt="About Us" width={340} height={420} className={styles.aboutImage} />
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.aboutTitle}>About Us</div>
          <div className={styles.aboutHeadline}>
            Nikmati kopi terbaik <span>dengan cita rasa otentik</span>
          </div>
          <div className={styles.aboutDesc}>
            Sambutlah aroma segar dan kenikmatan yang tiada tara dengan setiap tegukan kopi kami. Kopi Tumbuh Lestari menghadirkan lebih dari sekadar secangkir kopi. Tapi di balik setiap biji yang dipanggang dengan cermat, terdapat cerita tentang cinta pada alam. Dengan setiap tanaman yang kami pelihara, kami menghidupkan kembali bumi yang kita cintai.
          </div>
          <div className={styles.aboutStats}>
            <div className={styles.aboutStat}>
              <div className={styles.aboutStatValue}>100%</div>
              <div className={styles.aboutStatLabel}>Biji kopi asli dipetik oleh petani profesional.</div>
            </div>
            <div className={styles.aboutStat}>
              <div className={styles.aboutStatValue}>50+</div>
              <div className={styles.aboutStatLabel}>Biji kopi asli dipetik oleh petani profesional.</div>
            </div>
          </div>
        </div>
      </section>
      {/* Proses Pengerjaan Section */}
      <section className={styles.processSection}>
        <div className={styles.processCard}>
          <div className={styles.processLeft}>
            <div>
              <div className={styles.processStep}>1. Panen</div>
              <div className={styles.processStepDesc}>Proses kopi dimulai dengan panen, di mana buah kopi dipetik secara selektif</div>
            </div>
            <div>
              <div className={styles.processStep}>2. Roasting</div>
              <div className={styles.processStepDesc}>Biji kopi mentah dipanggang pada suhu tinggi untuk mengembangkan rasa dan aroma.</div>
            </div>
            <div>
              <div className={styles.processStep}>3. Packaging</div>
              <div className={styles.processStepDesc}>Bubuk atau biji kopi yang sudah dipanggang dikemas dalam kemasan yang sesuai untuk menjaga kesegarannya.</div>
            </div>
          </div>
          <div className={styles.processDivider}></div>
          <div className={styles.processRight}>
            <div className={styles.processTitle}><span>Proses</span> Pengerjaan</div>
            <div className={styles.processDesc}>
              Proses kopi dari panen hingga pengemasan, <span>biji kopi berkualitas tinggi</span> siap untuk dijual dan dinikmati oleh konsumen.
            </div>
            <svg className={styles.processBeans} viewBox="0 0 110 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="30" cy="30" rx="18" ry="10" fill="#a86b3c"/>
              <ellipse cx="80" cy="20" rx="14" ry="8" fill="#a86b3c"/>
              <ellipse cx="90" cy="45" rx="10" ry="6" fill="#a86b3c"/>
              <path d="M18 30 Q30 20 42 30" stroke="#fff" strokeWidth="2" fill="none"/>
              <path d="M66 20 Q80 10 94 20" stroke="#fff" strokeWidth="2" fill="none"/>
              <path d="M80 45 Q90 40 100 45" stroke="#fff" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className={styles.processCardShadow}></div>
        </div>
      </section>
      {/* Penawaran Terbaik Kami Section */}
      <section className={styles.offerSection}>
        <div className={styles.offerHeader}>
          <div>
            <div className={styles.offerTitle}><span>Penawaran</span> Terbaik Kami</div>
            <div className={styles.offerSubtitle}>Kami menyediakan berbagai macam produk berkualitas yang bisa Anda dapatkan dengan harga terbaik.</div>
          </div>
          <a href="/public/products" className={styles.offerButton}>Lihat Semua</a>
        </div>
        <div className={styles.offerGrid}>
          {products.map((p) => (
            <div key={p.id} className={styles.offerCard}>
              <div className={styles.offerImageWrap}>
                {p.gambar && <Image src={p.gambar} alt={p.nama} width={180} height={180} className={styles.offerImage} />}
              </div>
              <div className={styles.offerName}>{p.nama}</div>
              <div className={styles.offerProcess}>Semiwash Process</div>
              <div className={styles.offerDesc}>{p.deskripsi?.slice(0, 60)}...</div>
            </div>
          ))}
        </div>
      </section>
      {/* Section lain */}
      {sections.slice(3, 4).map((section, idx) => (
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