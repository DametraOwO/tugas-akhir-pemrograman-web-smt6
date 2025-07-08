'use client';
import React from "react";
import { useRouter } from "next/navigation";

const sidebarItems = [
  { name: "Home", icon: "🏠", href: "/admin/home" },
  { name: "Produk", icon: "📦", href: "/admin/produk" },
  { name: "Blog", icon: "📈", href: "/admin/blog" },
];

export default function AdminBlog() {
  const router = useRouter();
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#fafbfc' }}>
      {/* Sidebar */}
      <aside style={{ width: 220, background: '#fff', borderRight: '1px solid #eee', padding: 0 }}>
        <div style={{ fontWeight: 700, fontSize: 20, padding: '24px 0 18px 24px', letterSpacing: 1, color: '#222', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: '#a86b3c', fontWeight: 900, fontSize: 22 }}>TL</span>
          Tumbuh Lestari
        </div>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 22 }}>Postingan</div>
            <div style={{ color: '#888', fontSize: 15, marginTop: 2 }}>Kelola postingan blog anda</div>
          </div>
          <button
            onClick={() => router.push('/admin/blog/tambah')}
            style={{ background: '#ff7f2a', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}
          >
            +Buat Postingan
          </button>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px #0001', padding: 24, minHeight: 220 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <th style={{ textAlign: 'left', fontWeight: 600, fontSize: 15, padding: '8px 0' }}>Judul</th>
                <th style={{ textAlign: 'left', fontWeight: 600, fontSize: 15, padding: '8px 0' }}>Dibuat pada</th>
                <th style={{ width: 40 }}></th>
              </tr>
            </thead>
            <tbody>
              {/* Data postingan akan di-render di sini nanti */}
            </tbody>
          </table>
          <div style={{ color: '#aaa', textAlign: 'center', marginTop: 32, fontSize: 15 }}>
            Belum ada postingan ditambahkan
          </div>
        </div>
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