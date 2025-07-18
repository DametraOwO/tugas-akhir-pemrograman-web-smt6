'use client';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProducts, deleteProduct, seedDummyProducts } from "../../../utils/indexedDB";

const sidebarItems = [
  { name: "Home", icon: "🏠", href: "/admin/home" },
  { name: "Produk", icon: "📦", href: "/admin/produk" },
  { name: "Blog", icon: "📈", href: "/admin/blog" },
];

export default function AdminProduk() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [showSignOut, setShowSignOut] = useState(false);
  const handleSignOut = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isAdminLoggedIn');
    }
    router.push("/");
  };
  useEffect(() => {
    seedDummyProducts().then(() => getProducts().then(setProducts));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus produk ini?')) {
      await deleteProduct(id);
      setProducts(await getProducts());
    }
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
                display: 'flex', alignItems: 'center', gap: 10, padding: '12px 24px', background: item.name === 'Produk' ? '#fff4ed' : 'transparent', border: 'none', borderLeft: item.name === 'Produk' ? '4px solid #ff7f2a' : '4px solid transparent', color: item.name === 'Produk' ? '#ff7f2a' : '#222', fontWeight: 600, fontSize: 16, cursor: 'pointer', outline: 'none', transition: 'background 0.2s', textAlign: 'left'
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
            <div style={{ fontWeight: 700, fontSize: 22 }}>Produk</div>
            <div style={{ color: '#888', fontSize: 15, marginTop: 2 }}>Kelola product anda</div>
          </div>
          <button
            onClick={() => router.push('/admin/produk/tambah')}
            style={{ background: '#ff7f2a', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}
          >
            +Tambah Product
          </button>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px #0001', padding: 24, minHeight: 220 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <th style={{ textAlign: 'left', fontWeight: 600, fontSize: 15, padding: '8px 0' }}>Nama</th>
                <th style={{ textAlign: 'left', fontWeight: 600, fontSize: 15, padding: '8px 0' }}>Harga</th>
                <th style={{ textAlign: 'left', fontWeight: 600, fontSize: 15, padding: '8px 0' }}>Dibuat pada</th>
                <th style={{ width: 40 }}></th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr><td colSpan={4} style={{ color: '#aaa', textAlign: 'center', padding: 24 }}>Belum ada produk ditambahkan</td></tr>
              ) : (
                products.map((p) => (
                  <tr key={p.id}>
                    <td>{p.nama}</td>
                    <td>{p.harga ? `Rp. ${Number(p.harga).toLocaleString('id-ID')}` : '-'}</td>
                    <td>{p.createdAt ? new Date(p.createdAt).toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-'}</td>
                    <td>
                      <button onClick={() => router.push(`/admin/produk/edit?id=${p.id}`)} style={{ marginRight: 8, background: '#ff7f2a', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 10px', cursor: 'pointer' }}>Edit</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
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