'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const sidebarItems = [
  { name: "Home", icon: "🏠", href: "/admin/home" },
  { name: "Produk", icon: "📦", href: "/admin/produk" },
  { name: "Blog", icon: "📈", href: "/admin/blog" },
];

export default function AdminHome() {
  const router = useRouter();
  const [showSignOut, setShowSignOut] = useState(false);

  const handleSignOut = () => {
    // Nanti bisa hapus session/cookie di sini
    router.push("/");
  };

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
                display: 'flex', alignItems: 'center', gap: 10, padding: '12px 24px', background: item.name === 'Home' ? '#fff4ed' : 'transparent', border: 'none', borderLeft: item.name === 'Home' ? '4px solid #ff7f2a' : '4px solid transparent', color: item.name === 'Home' ? '#ff7f2a' : '#222', fontWeight: 600, fontSize: 16, cursor: 'pointer', outline: 'none', transition: 'background 0.2s', textAlign: 'left'
              }}
            >
              <span>{item.icon}</span> {item.name}
            </button>
          ))}
        </nav>
      </aside>
      {/* Main Content */}
      <main style={{ flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', gap: 24 }}>
          {/* Card Produk */}
          <div onClick={() => router.push('/admin/produk')} style={{ flex: 1, background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px #0001', padding: 24, cursor: 'pointer', border: '1px solid #eee', transition: 'box-shadow 0.2s' }}>
            <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 8 }}>Produk <span style={{ float: 'right', fontSize: 20 }}>📦</span></div>
            <div style={{ fontWeight: 700, fontSize: 32, color: '#222' }}>2</div>
            <div style={{ color: '#888', fontSize: 14 }}>Total produk yang telah ditambahkan</div>
          </div>
          {/* Card Blog */}
          <div onClick={() => router.push('/admin/blog')} style={{ flex: 1, background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px #0001', padding: 24, cursor: 'pointer', border: '1px solid #eee', transition: 'box-shadow 0.2s' }}>
            <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 8 }}>Blog <span style={{ float: 'right', fontSize: 20 }}>📄</span></div>
            <div style={{ fontWeight: 700, fontSize: 32, color: '#222' }}>3</div>
            <div style={{ color: '#888', fontSize: 14 }}>Total postingan blog yang telah dibuat</div>
          </div>
        </div>
      </main>
      {/* Profile Icon & Sign Out */}
      <div style={{ position: 'absolute', top: 18, right: 32, display: 'flex', alignItems: 'center', gap: 8, flexDirection: 'row-reverse' }}>
        <span
          style={{ fontSize: 26, color: '#222', background: '#f5f5f5', borderRadius: '50%', padding: 6, border: '1px solid #eee', cursor: 'pointer' }}
          onClick={() => setShowSignOut(v => !v)}
        >
          👤
        </span>
        {showSignOut && (
          <button
            onClick={handleSignOut}
            style={{ background: '#fff', color: '#ff7f2a', border: '1px solid #ff7f2a', borderRadius: 4, padding: '8px 18px', fontWeight: 600, cursor: 'pointer', fontSize: 15 }}
          >
            Sign out
          </button>
        )}
      </div>
    </div>
  );
} 