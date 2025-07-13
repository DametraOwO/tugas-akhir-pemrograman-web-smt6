'use client';
import styles from "../page.module.css";
import Image from "next/image";
import React, { useRef } from "react";

export default function AboutPage() {
  const sejarahRef = useRef(null);
  const handleExploreClick = () => {
    if (sejarahRef.current) {
      sejarahRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#d2a074' }}>
      <section className={styles.heroAbout}>
        <Image src="/images/aboutkopi.jpg" alt="About Kopi" fill className={styles.heroAboutBg} priority />
        <div className={styles.heroAboutOverlay}></div>
        <div className={styles.heroAboutContent}>
          <div className={styles.heroAboutTitle}>
            Tumbuh <span>Lestari</span>
          </div>
          <div className={styles.heroAboutSubtitle}>
            Bergabunglah dengan kami dalam perjalanan ini dan rasakan keajaiban setiap cangkir kopi Tumbuh Lestari.
          </div>
          <button className={styles.heroAboutButton} onClick={handleExploreClick}>Explore</button>
        </div>
      </section>
      {/* Sejarah Perusahaan Section */}
      <section className={styles.sejarahSection} ref={sejarahRef}>
        <div className={styles.sejarahImageWrap}>
          <Image src="/images/daunkopi.png" alt="Daun Kopi" width={180} height={220} className={styles.sejarahImage} />
        </div>
        <div className={styles.sejarahContent}>
          <div className={styles.sejarahTitle}><span>Sejarah</span> Perusahaan</div>
          <div className={styles.sejarahText}>
            Tumbuh Lestari dimulai sebagai Kedai Dialog Kopi pada tahun 2018, fokus di F&B di Cibodas. Kami kemudian berpindah lokasi dan berganti nama menjadi Halawa Kopi hingga awal 2020. Pandemi menyebabkan usaha kami tutup sementara.<br/><br/>
            Dengan memanfaatkan koneksi dan keterampilan dari Halawa Kopi, kami memulai Tumbuh Lestari, mengolah kopi oleh kebun di Sukarame, kami bekerja sama dengan petani, gudang kopi di Cibodas, dan mulai memasarkan kopi di Curug Roda.<br/><br/>
            Setahun kemudian, kami berhasil mengelola panen pertama kami, dari penanaman hingga penjualan. Kami juga mulai menanam kopi susu di Cibodas, namun keterbatasan hasil panen dan gudang di Cibodas untuk memfasilitasi kepakan kopi.<br/><br/>
            Penjualan kini berkembang baik untuk outlet dan marketplace online. Fokus akhir 2022 kami mulai mengelola marketplace online. Fokus akhir 2022 kami mulai mengelola marketplace online.
          </div>
        </div>
      </section>
      {/* Kebun Kami Section */}
      <section className={styles.kebunSection}>
        <div className={styles.kebunTitle}><span>Kebun</span> Kami</div>
        <div className={styles.kebunSubtitle}>Segar dan Alami, Langsung Dari Kebun Kami</div>
        <Image src="/images/kebunkopi1.jpg" alt="Kebun Kopi 1" width={900} height={400} className={styles.kebunImage} />
        <Image src="/images/kebunkopi2.jpeg" alt="Kebun Kopi 2" width={900} height={400} className={styles.kebunImage} />
      </section>
      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.teamTitle}><span>Kebersamaan</span> dalam <span className={styles.teamTitleBrown}>Keberhasilan</span></div>
        <div className={styles.teamRow}>
          <div className={styles.teamCard}>
            <Image src="/images/ppl1.jpg" alt="Dega" width={160} height={160} className={styles.teamImg} />
            <div className={styles.teamName}>Dega</div>
            <div className={styles.teamRole}>Head & Quality Control</div>
          </div>
          <div className={styles.teamCard}>
            <Image src="/images/ppl2.png" alt="Megananda" width={160} height={160} className={styles.teamImg} />
            <div className={styles.teamName}>Megananda</div>
            <div className={styles.teamRole}>Social Media Manager</div>
          </div>
          <div className={styles.teamCard}>
            <Image src="/images/ppl3.JPG" alt="Putra" width={160} height={160} className={styles.teamImg} />
            <div className={styles.teamName}>Putra</div>
            <div className={styles.teamRole}>Field Management</div>
          </div>
        </div>
      </section>
    </div>
  );
} 