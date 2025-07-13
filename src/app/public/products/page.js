'use client';
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../../utils/indexedDB";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      // Urutkan terbaru di depan
      setProducts(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    });
  }, []);
  return (
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
        {products.length === 0 ? (
          <div style={{ color: '#fff', fontSize: 18, opacity: 0.7 }}>Belum ada produk ditambahkan</div>
        ) : (
          products.map((p) => (
            <div key={p.id} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px #0001', padding: 24, minWidth: 300, maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #eee' }}>
              {p.gambar && <img src={p.gambar} alt={p.nama} style={{ width: 180, height: 180, objectFit: 'cover', borderRadius: 8, marginBottom: 18 }} />}
              <div style={{ color: '#a86b3c', fontWeight: 700, fontSize: 18, marginBottom: 6, textAlign: 'center' }}>{p.nama}</div>
              <div style={{ color: '#a86b3c', fontWeight: 400, fontSize: 15, marginBottom: 8, textAlign: 'center' }}>{p.deskripsi}</div>
              <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', gap: 12 }}>
                <div style={{ color: '#a86b3c', fontWeight: 700, fontSize: 16 }}>{p.harga ? `Rp. ${Number(p.harga).toLocaleString('id-ID')}` : '-'}</div>
                <a href={p.linkShopee || '#'} target="_blank" rel="noopener noreferrer" style={{ background: '#a86b3c', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 24px', fontWeight: 600, fontSize: 15, cursor: 'pointer', textDecoration: 'none' }}>Pesan Sekarang</a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 