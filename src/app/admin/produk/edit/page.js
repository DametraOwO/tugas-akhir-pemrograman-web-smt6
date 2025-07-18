'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getProductById, updateProduct, deleteProduct } from "../../../../utils/indexedDB";
import { useSearchParams } from "next/navigation";

const sidebarItems = [
  { name: "Home", icon: "🏠", href: "/admin/home" },
  { name: "Produk", icon: "📦", href: "/admin/produk" },
  { name: "Blog", icon: "📈", href: "/admin/blog" },
];

export default function EditProduk() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [linkShopee, setLinkShopee] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState(null);
  const [gambarPreview, setGambarPreview] = useState(null);
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
      if (!isLoggedIn) {
        router.replace('/admin/login');
      }
    }
    if (id) {
      getProductById(id).then((produk) => {
        if (produk) {
          setNama(produk.nama || "");
          setHarga(produk.harga || "");
          setLinkShopee(produk.linkShopee || "");
          setDeskripsi(produk.deskripsi || "");
          setGambarPreview(produk.gambar || null);
          setCreatedAt(produk.createdAt || "");
        }
      });
    }
  }, [router, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let gambarBase64 = gambarPreview;
    if (gambar) {
      gambarBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(gambar);
      });
    }
    const produkBaru = {
      id,
      nama,
      harga,
      linkShopee,
      deskripsi,
      gambar: gambarBase64,
      createdAt: createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await updateProduct(produkBaru);
    router.push('/admin/produk');
  };

  const handleDelete = async () => {
    if (window.confirm('Yakin ingin menghapus produk ini?')) {
      await deleteProduct(id);
      router.push('/admin/produk');
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <button onClick={() => router.push('/admin/produk')} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#888', marginRight: 4 }}>&larr;</button>
          <div style={{ fontWeight: 700, fontSize: 20 }}>Edit Produk</div>
          <div style={{ flex: 1 }} />
          <button onClick={() => router.push('/admin/produk')} style={{ background: '#fff', color: '#ff7f2a', border: '1px solid #ff7f2a', borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginRight: 8 }}>Batal</button>
          <button type="submit" form="form-produk" style={{ background: '#ff7f2a', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginRight: 8 }}>Simpan</button>
          <button type="button" onClick={handleDelete} style={{ background: '#fff', color: '#e74c3c', border: '1px solid #e74c3c', borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Hapus</button>
        </div>
        <form id="form-produk" onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px #0001', padding: 32, width: '100%', maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 2 }}>Detail Produk</div>
          <div style={{ color: '#888', fontSize: 14, marginBottom: 18 }}>Tambahkan detail dan gambar produk</div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500, fontSize: 15 }}>Nama</label>
            <input type="text" value={nama} onChange={e => setNama(e.target.value)} placeholder="Product Name" style={{ width: '100%', padding: 10, borderRadius: 4, border: '1px solid #ddd', marginTop: 4, fontSize: 15 }} required />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500, fontSize: 15 }}>Harga</label>
            <input type="number" value={harga} onChange={e => setHarga(e.target.value)} placeholder="10000" style={{ width: '100%', padding: 10, borderRadius: 4, border: '1px solid #ddd', marginTop: 4, fontSize: 15 }} required />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500, fontSize: 15 }}>Link Shopee</label>
            <input type="url" value={linkShopee} onChange={e => setLinkShopee(e.target.value)} placeholder="https://shopee.co.id/product" style={{ width: '100%', padding: 10, borderRadius: 4, border: '1px solid #ddd', marginTop: 4, fontSize: 15 }} />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500, fontSize: 15 }}>Deskripsi</label>
            <textarea value={deskripsi} onChange={e => setDeskripsi(e.target.value)} placeholder="Product Description" style={{ width: '100%', padding: 10, borderRadius: 4, border: '1px solid #ddd', marginTop: 4, fontSize: 15, minHeight: 80, resize: 'vertical' }} />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500, fontSize: 15 }}>Gambar</label>
            <input type="file" accept="image/*" onChange={e => { setGambar(e.target.files[0]); setGambarPreview(null); }} style={{ display: 'block', marginTop: 4 }} />
            {gambarPreview && (
              <img src={gambarPreview} alt="Preview" style={{ marginTop: 8, maxWidth: 120, borderRadius: 8 }} />
            )}
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