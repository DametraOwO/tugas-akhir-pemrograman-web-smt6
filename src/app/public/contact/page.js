'use client';
import styles from "../page.module.css";
import Image from "next/image";
import React from "react";

export default function ContactPage() {
  return (
    <div className={styles.bg} style={{ minHeight: '100vh', width: '100%', paddingTop: 60 }}>
      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactHeader}>
          <span className={styles.contactHeaderBrown}>Terhubung dengan kami</span>
          <span className={styles.contactHeaderWhite}>Tumbuh Lestari</span>
          <span className={styles.contactBeans}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="10" cy="16" rx="6" ry="8" fill="#a86b3c"/>
              <ellipse cx="22" cy="12" rx="5" ry="6" fill="#a86b3c"/>
            </svg>
          </span>
        </div>
        <div className={styles.contactSubtitle}>Email dan Telepon</div>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactIconWrap}>
              <Image src="/images/email.png" alt="Email" width={64} height={64} className={styles.contactIcon} />
            </div>
            <div className={styles.contactInfo}>tumbuhlestaritalks@gmail.com</div>
            <div className={styles.contactDesc}>Alamat email Tumbuh Lestari</div>
            <a href="mailto:tumbuhlestaritalks@gmail.com" className={styles.contactButton}>Kirim Email</a>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactIconWrap}>
              <Image src="/images/phone.png" alt="Telepon" width={64} height={64} className={styles.contactIcon} />
            </div>
            <div className={styles.contactInfo}>+62 838 3203 3996</div>
            <div className={styles.contactDesc}>Nomor telepon Tumbuh Lestari</div>
            <a href="https://wa.me/6283832033996" target="_blank" rel="noopener noreferrer" className={styles.contactButton}>Hubungi Kami</a>
          </div>
        </div>
      </section>
      {/* Social Media Section */}
      <section className={styles.socialSection}>
        <div className={styles.socialTitle}>Social Media</div>
        <div className={styles.socialGrid}>
          <div className={styles.socialCard}>
            <div className={styles.socialIconWrap}>
              <Image src="/images/insta.png" alt="Instagram" width={64} height={64} className={styles.socialIcon} />
            </div>
            <div className={styles.socialName}>@tumbuhlestarikopi</div>
            <div className={styles.socialDesc}>Official Instagram Tumbuh Lestari</div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>Kunjungi</a>
          </div>
          <div className={styles.socialCard}>
            <div className={styles.socialIconWrap}>
              <Image src="/images/tokopedia.png" alt="Tokopedia" width={64} height={64} className={styles.socialIcon} />
            </div>
            <div className={styles.socialName}>Tumbuh Lestari Kopi</div>
            <div className={styles.socialDesc}>Official Tokopedia Tumbuh Lestari</div>
            <a href="https://tokopedia.com" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>Kunjungi</a>
          </div>
          <div className={styles.socialCard}>
            <div className={styles.socialIconWrap}>
              <Image src="/images/shopee.png" alt="Shopee" width={64} height={64} className={styles.socialIcon} />
            </div>
            <div className={styles.socialName}>Tumbuh Lestari Kopi</div>
            <div className={styles.socialDesc}>Official Shopee Tumbuh Lestari</div>
            <a href="https://shopee.com" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>Kunjungi</a>
          </div>
        </div>
      </section>
      {/* Address/Maps Section */}
      <section className={styles.addressSection}>
        <div className={styles.addressTitle}>Alamat</div>
        <div className={styles.addressGrid}>
          <div className={styles.addressMapWrap}>
            <iframe
              src="https://www.google.com/maps?q=-6.921857,107.654381&z=17&output=embed"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: '0.7rem', minWidth: '220px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tumbuh Lestari Kopi Map"
            ></iframe>
          </div>
          <div className={styles.addressInfo}>
            <div className={styles.addressPlace}>Tumbuh Lestari Kopi</div>
            <div className={styles.addressText}>
              Jl. Sekelimus VI No.5, RT.002/RW.006, Batununggal, Kec. Bandung Kidul, Kota Bandung, Jawa Barat 40266
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 