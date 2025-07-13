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
      {/* Sejarah Perusahaan Section */}
      <section className={styles.sejarahSection}>
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