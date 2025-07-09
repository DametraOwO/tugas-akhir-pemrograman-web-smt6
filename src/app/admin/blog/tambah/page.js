'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addBlog } from "../../../../utils/indexedDB";

const sidebarItems = [
  { name: "Home", icon: "🏠", href: "/admin/home" },
  { name: "Produk", icon: "📦", href: "/admin/produk" },
  { name: "Blog", icon: "📈", href: "/admin/blog" },
];

export default function TambahPostingan() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
      if (!isLoggedIn) {
        router.replace('/admin/login');
      }
    }
  }, [router]);
  const [judul, setJudul] = useState("");
  const [konten, setKonten] = useState("");
  const [gambar, setGambar] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let gambarBase64 = null;
    if (gambar) {
      gambarBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(gambar);
      });
    }
    const blogBaru = {
      judul,
      konten,
      gambar: gambarBase64,
      createdAt: new Date().toISOString(),
    };
    await addBlog(blogBaru);
    router.push('/admin/blog');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#fafbfc' }}>
      {/* Sidebar */}
      <aside style={{ width: 220, background: '#fff', borderRight: '1px solid #eee', padding: 0 }}>
        <button
          onClick={() => router.push('/public')}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            margin: 0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontWeight: 700,
            fontSize: 20,
            color: '#222',
            letterSpacing: 1,
            marginBottom: 16 // tambahkan gap bawah
          }}
        >
          <span style={{ color: '#a86b3c', fontWeight: 900, fontSize: 22 }}>TL</span>
          Tumbuh Lestari
        </button>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {sidebarItems.map(item => (
            <button
              key={item.name}
              onClick={() => router.push(item.href)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '12px 24px', background: item.name === 'Blog' ? '#fff4ed' : 'transparent', border: 'none', borderLeft: item.name === 'Blog' ? '4px solid #ff7f2a' : '4px solid transparent', color: item.name === 'Blog' ? '#ff7f2a' : '#222', fontWeight: 600, fontSize: 16, cursor: 'pointer', outline: 'none', transition: 'background 0.2s', textAlign: 'left'
              }}
            >
              <span>{item.icon}</span> {item.name}
            </button>
          ))}
        </nav>
      </aside>
      {/* Main Content */}
      <main style={{ flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <button onClick={() => router.push('/admin/blog')} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#888', marginRight: 4 }}>&larr;</button>
          <div style={{ fontWeight: 700, fontSize: 20 }}>Tambah Postingan</div>
          <div style={{ flex: 1 }} />
          <button onClick={() => router.push('/admin/blog')} style={{ background: '#fff', color: '#ff7f2a', border: '1px solid #ff7f2a', borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginRight: 8 }}>Batal</button>
          <button type="submit" form="form-postingan" style={{ background: '#ff7f2a', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Simpan</button>
        </div>
        <form id="form-postingan" onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px #0001', padding: 32, width: '100%', maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 2 }}>Detail Postingan</div>
          <div style={{ color: '#888', fontSize: 14, marginBottom: 18 }}>Tambahkan judul, konten, dan gambar postingan</div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500, fontSize: 15 }}>Judul</label>
            <input type="text" value={judul} onChange={e => setJudul(e.target.value)} placeholder="Judul Postingan" style={{ width: '100%', padding: 10, borderRadius: 4, border: '1px solid #ddd', marginTop: 4, fontSize: 15 }} required />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500, fontSize: 15 }}>Konten</label>
            <textarea value={konten} onChange={e => setKonten(e.target.value)} placeholder="Isi konten postingan" style={{ width: '100%', padding: 10, borderRadius: 4, border: '1px solid #ddd', marginTop: 4, fontSize: 15, minHeight: 80, resize: 'vertical' }} />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500, fontSize: 15 }}>Gambar</label>
            <input type="file" accept="image/*" onChange={e => setGambar(e.target.files[0])} style={{ display: 'block', marginTop: 4 }} />
          </div>
        </form>
      </main>
      {/* Profile Icon & Sign Out */}
      <div style={{ position: 'absolute', top: 18, right: 32, display: 'flex', alignItems: 'center', gap: 8, flexDirection: 'row-reverse' }}>
        <span
          style={{ fontSize: 26, color: '#222', background: '#f5f5f5', borderRadius: '50%', padding: 6, border: '1px solid #eee', cursor: 'pointer' }}
        >
          👤
        </span>
      </div>
    </div>
  );
} 