'use client';
import Header from "../Header";
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import { getBlogs } from "../../../utils/indexedDB";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs().then((data) => {
      // Urutkan terbaru di depan
      setBlogs(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    });
  }, []);

  return (
    <>
      <Header active="Blog" />
      <div className={styles.bg} style={{ minHeight: '100vh', width: '100%', paddingTop: 60 }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ color: '#a86b3c', fontWeight: 700, fontSize: '2rem', letterSpacing: 1 }}>
            Terus Update Berita Terbaru
          </div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '2.7rem', marginTop: 8 }}>
            Tumbuh Lestari
          </div>
        </div>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', minHeight: 300 }}>
          {blogs.length === 0 ? (
            <div style={{ color: '#fff', fontSize: 18 }}>Belum ada postingan blog.</div>
          ) : (
            blogs.map((b) => (
              <div key={b.id} style={{ background: '#fff', border: '1.5px solid #cfa06a', borderRadius: 10, width: 340, minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 2px 8px #0001', marginBottom: 16 }}>
                {b.gambar && (
                  <img src={b.gambar} alt={b.judul} style={{ width: '100%', height: 180, objectFit: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                )}
                <div style={{ padding: '18px 18px 0 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: '#a86b3c', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{b.judul}</div>
                  <div style={{ color: '#6d4c1b', fontSize: 15, marginBottom: 12, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{b.isi || b.konten}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 18px 18px 18px' }}>
                  <div style={{ color: '#a86b3c', fontSize: 13 }}>
                    oleh Admin<br />
                    {b.createdAt ? new Date(b.createdAt).toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }) : '-'}
                  </div>
                  <button style={{ background: '#a86b3c', color: '#fff', border: 'none', borderRadius: 5, padding: '8px 16px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                    Lihat Selengkapnya
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
} 