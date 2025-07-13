'use client';
import styles from "../page.module.css";
import Image from "next/image";

export default function AboutPage() {
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
          <button className={styles.heroAboutButton}>Explore</button>
        </div>
      </section>
    </div>
  );
} 