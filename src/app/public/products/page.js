'use client';
import Header from "../Header";
import styles from "../page.module.css";

export default function ProductsPage() {
  return (
    <>
      <Header active="Products" />
      <div className={styles.bg} style={{ minHeight: '100vh', width: '100%', paddingTop: 60 }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ color: '#a86b3c', fontWeight: 700, fontSize: '2rem', letterSpacing: 1 }}>
            Nikmati Produk Kami
          </div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '2.7rem', marginTop: 8 }}>
            Tumbuh Lestari
          </div>
        </div>
        <div id="products-list-container" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', minHeight: 300 }}>
          {/* Product cards akan di-render di sini nanti */}
        </div>
      </div>
    </>
  );
} 