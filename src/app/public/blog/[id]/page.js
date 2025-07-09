'use client';
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getBlogById } from "../../../../utils/indexedDB";
import Header from "../../Header";
import styles from "../../page.module.css";

export default function BlogDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      getBlogById(Number(id)).then(setBlog);
    }
  }, [id]);

  if (!blog) {
    return (
      <>
        <Header active="Blog" />
        <div className={styles.bg} style={{ minHeight: '100vh', paddingTop: 60, color: '#fff', textAlign: 'center' }}>
          Memuat...
        </div>
      </>
    );
  }

  return (
    <>
      <Header active="Blog" />
      <div className={styles.bg} style={{ minHeight: '100vh', paddingTop: 60, display: 'flex', justifyContent: 'center' }}>
        <div style={{ background: '#fff', borderRadius: 12, maxWidth: 700, width: '100%', margin: 32, padding: 32, boxShadow: '0 2px 8px #0001' }}>
          {blog.gambar && (
            <img src={blog.gambar} alt={blog.judul} style={{ width: '100%', maxHeight: 340, objectFit: 'cover', borderRadius: 10, marginBottom: 24 }} />
          )}
          <div style={{ color: '#a86b3c', fontWeight: 700, fontSize: 28, marginBottom: 12 }}>{blog.judul}</div>
          <div style={{ color: '#6d4c1b', fontSize: 16, marginBottom: 18 }}>{blog.isi || blog.konten}</div>
          <div style={{ color: '#a86b3c', fontSize: 14, marginTop: 24 }}>
            oleh Admin<br />
            {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }) : '-'}
          </div>
          <button onClick={() => router.back()} style={{ marginTop: 32, background: '#a86b3c', color: '#fff', border: 'none', borderRadius: 5, padding: '10px 22px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>
            Kembali
          </button>
        </div>
      </div>
    </>
  );
} 