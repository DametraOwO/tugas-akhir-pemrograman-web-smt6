'use client';
import React, { useState } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "tumbuhlestaritalks@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ transform: 'scaleY(-1)' }}>
          <path d="M0 60C120 100 360 100 720 60C1080 20 1320 20 1440 60V100H0V60Z" fill="#d2a074" />
        </svg>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerTitle}>Quick</div>
            <div className={styles.footerQuickLinks}>
              <Link href="/public" className={styles.footerLink}>Home</Link>
              <Link href="/public/about" className={styles.footerLink}>About</Link>
              <Link href="/public/contact" className={styles.footerLink}>Contact</Link>
              <Link href="/public/products" className={styles.footerLink}>Products</Link>
              <Link href="/public/blog" className={styles.footerLink}>Blog</Link>
            </div>
          </div>
          <div>
            <div className={styles.footerTitle}>Connect with</div>
            <div className={styles.footerText} style={{ cursor: 'pointer', userSelect: 'all' }} onClick={handleCopyEmail} title="Klik untuk salin email">
              {email}
              {copied && <span style={{ color: '#d2a074', marginLeft: 8, fontSize: '0.9em' }}>Tersalin!</span>}
            </div>
            <div className={styles.footerText}>+62 838 3203 3996</div>
          </div>
          <div>
            <div className={styles.footerTitle}>Kerja Sama</div>
            <div className={styles.footerText}>Gudang Madala Haji</div>
            <div className={styles.footerText}>Petani Milenial Sukarame</div>
          </div>
          <div>
            <div className={styles.footerTitle}>Subscribe now</div>
            <div className={styles.footerSocials}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>IG</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>FB</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright © 2024 Tumbuh Lestari
      </div>
    </footer>
  );
} 