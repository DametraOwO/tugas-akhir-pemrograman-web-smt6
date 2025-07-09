// IndexedDB utility for login credentials, products, and blogs

const DB_NAME = 'TumbuhLestariDB';
const DB_VERSION = 3;
const LOGIN_STORE = 'loginCredentials';
const PRODUCT_STORE = 'products';
const BLOG_STORE = 'blogs';

function openMainDB() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(LOGIN_STORE)) {
        db.createObjectStore(LOGIN_STORE, { keyPath: 'username' });
      }
      if (!db.objectStoreNames.contains(PRODUCT_STORE)) {
        db.createObjectStore(PRODUCT_STORE, { keyPath: 'id', autoIncrement: true });
      }
      if (!db.objectStoreNames.contains(BLOG_STORE)) {
        db.createObjectStore(BLOG_STORE, { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// --- Login CRUD ---
export async function addCredential({ username, password }) {
  const db = await openMainDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(LOGIN_STORE, 'readwrite');
    const store = tx.objectStore(LOGIN_STORE);
    const request = store.add({ username, password });
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}

export async function getCredential(username) {
  const db = await openMainDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(LOGIN_STORE, 'readonly');
    const store = tx.objectStore(LOGIN_STORE);
    const request = store.get(username);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function deleteCredential(username) {
  const db = await openMainDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(LOGIN_STORE, 'readwrite');
    const store = tx.objectStore(LOGIN_STORE);
    const request = store.delete(username);
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}

// --- Produk CRUD ---
export async function addProduct(product) {
  const db = await openMainDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PRODUCT_STORE, 'readwrite');
    const store = tx.objectStore(PRODUCT_STORE);
    const request = store.add(product);
    request.onsuccess = (e) => resolve(e.target.result); // return id
    request.onerror = () => reject(request.error);
  });
}

export async function getProducts() {
  const db = await openMainDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PRODUCT_STORE, 'readonly');
    const store = tx.objectStore(PRODUCT_STORE);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getProductById(id) {
  const db = await openMainDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PRODUCT_STORE, 'readonly');
    const store = tx.objectStore(PRODUCT_STORE);
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function updateProduct(product) {
  const db = await openMainDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PRODUCT_STORE, 'readwrite');
    const store = tx.objectStore(PRODUCT_STORE);
    const request = store.put(product);
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}

export async function deleteProduct(id) {
  const db = await openMainDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PRODUCT_STORE, 'readwrite');
    const store = tx.objectStore(PRODUCT_STORE);
    const request = store.delete(id);
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}

export async function seedDummyProducts() {
  const products = await getProducts();
  if (products.length === 0) {
    const dummy = [
      {
        nama: "Kopi Bali Kemasan Bag",
        harga: 42000,
        linkShopee: "https://www.tokopedia.com/kupu2boladuniaofficial/kopi-bali-kemasan-bag-100-200-gram-100-gram-kopi-bubuk",
        deskripsi: "Selamat datang di Bhineka Djaja Official Produk Kopi Bali Cap Kupu Kupu Bola Dunia Kita Selalu Ready Stok Dan Fresh Roasted Tiap Harinya Karena Kami Memiliki Pabrik Yang memproduksi Kopi Tiap Harinya Kopi luar biasa yang terbuat dari pilihan Biji Kopi premium dari dataran tinggi bali, dicampur oleh ahli dan dipanggang untuk menghasilkan rasa dan aroma khas Kopi Bali dan telah menjadi pilihan penikmat kopi di Bali \nJenis Kopi : Kopi Robusta, Kopi Arabika Berat 100gram expired +- 1 tahun ( BPOM RI MD 868622054059 ) \nTersedia 3 Variant : \n- Kopi Bubuk / Coffee Powder \n- Kopi Bubuk kasar / Medium Fine Grind \n- Biji Kopi / Roasted Bean \nPembelian Dalam Jumlah Besar Harap Menghubungi Admin",
        gambar: "/images/kopi1.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        nama: "Kopi Bali Gold Kemasan Bag",
        harga: 42000,
        linkShopee: "https://www.tokopedia.com/kupu2boladuniaofficial/kopi-bali-gold-kemasan-bag-100-200-gram-biji-kopi-100-gram",
        deskripsi: "Selamat datang di Bhineka Djaja Official Produk Kopi Bali Cap Kupu Kupu Bola Dunia Kita Selalu Ready Stok Dan Fresh Roasted Tiap Harinya Karena Kami Memiliki Pabrik Yang memproduksi Kopi Tiap Harinya Berbahan baku dari biji kopi Arabika Indonesia yang menciptakancita rasa penuh ,kuat dan kaya rasa untuk menghasilkan secangkir kopi dengan aroma yang mengagumkan Jenis Kopi : Kopi Arabika Berat 100gram expired +- 1 tahun ( BPOM RI MD 868622056059 ) Tersedia 3 Variant : - Kopi Bubuk / Coffee Powder - Kopi Bubuk kasar / Medium Fine Grind - Biji Kopi / Roasted Bean",
        gambar: "/images/kopi2.jpeg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        nama: "Kopi Arabika Garut Cikuray",
        harga: 135960,
        linkShopee: "https://www.tokopedia.com/coffeenangsiamang/kopi-arabika-garut-cikuray-500g-premium-biji-giling-biji?extParam=ivf%3Dfalse%26keyword%3Dkopi+arabika%26search_id%3D2025070916031113F9896DF612790E5ME0%26src%3Dsearch",
        deskripsi: "KOPI ARABIKA / ARABICA GARUT CIKURAY - (Biji / Giling) ROASTING LEVEL : Medium. DATE ROASTING : Fresh (Kami melakukan Roasting dalam 1 Minggu 3x). PROSES : Full Washed. KARAKTER : Herb, Nutty, Cedar, Fruity, Clean After taste. DAERAH TANAM : Gunung Cikuray - Garut - Jawa Barat",
        gambar: "/images/arabika.jpeg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ];
    for (const p of dummy) {
      await addProduct(p);
    }
  }
}

// --- Blog CRUD ---
export async function addBlog(blog) {
  const db = await openMainDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BLOG_STORE, 'readwrite');
    const store = tx.objectStore(BLOG_STORE);
    const request = store.add(blog);
    request.onsuccess = (e) => resolve(e.target.result); // return id
    request.onerror = () => reject(request.error);
  });
}

export async function getBlogs() {
  const db = await openMainDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BLOG_STORE, 'readonly');
    const store = tx.objectStore(BLOG_STORE);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getBlogById(id) {
  const db = await openMainDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BLOG_STORE, 'readonly');
    const store = tx.objectStore(BLOG_STORE);
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function updateBlog(blog) {
  const db = await openMainDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BLOG_STORE, 'readwrite');
    const store = tx.objectStore(BLOG_STORE);
    const request = store.put(blog);
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}

export async function deleteBlog(id) {
  const db = await openMainDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BLOG_STORE, 'readwrite');
    const store = tx.objectStore(BLOG_STORE);
    const request = store.delete(id);
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}

// Seed 3 dummy blog
export async function seedDummyBlogs() {
  const blogs = await getBlogs();
  if (blogs.length === 0) {
    const dummy = [
      {
        judul: "☕ Nikmatnya Secangkir Kopi Pagi untuk Memulai Hari",
        isi: "Tak ada yang lebih menenangkan daripada menyeruput kopi hangat di pagi hari. Aroma kopi yang khas perlahan membangunkan indera, membantu kita bersiap menghadapi kesibukan yang menanti. Bagi banyak orang, kopi pagi adalah ritual penting — bukan sekadar soal kafein, tapi juga momen me time yang menenangkan sebelum tenggelam dalam rutinitas. Entah itu robusta hitam tanpa gula yang kuat, latte dengan sentuhan manis, atau cold brew ringan, secangkir kopi dapat mengubah suasana hati dan memunculkan inspirasi baru. Dalam artikel ini, kita akan mengulas jenis-jenis kopi yang pas dinikmati pagi hari serta tips sederhana membuat seduhan kopi rumah terasa istimewa.",
        gambar: "/images/kopipagi.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        judul: "🌿 Kopi & Teman Santai: Rekomendasi Menu untuk Ngopi Sore",
        isi: "Sore hari identik dengan waktu bersantai, melepaskan penat setelah kerja atau kuliah. Dan kopi sering menjadi teman setia di waktu ini. Tidak hanya menunda kantuk, kopi juga menghadirkan kehangatan dalam obrolan ringan bersama teman atau keluarga. Mulai dari cappuccino yang lembut dengan buih susu tebal, es kopi susu kekinian, hingga kopi tubruk klasik yang penuh nostalgia — semua bisa menjadi pilihan untuk menemani soremu. Dalam tulisan ini, kita akan berbagi rekomendasi menu kopi yang cocok untuk suasana santai sore, lengkap dengan cemilan pendamping yang membuat acara ngopi makin seru.",
        gambar: "/images/kopisore.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        judul: "✨ Rahasia Kopi: Dari Biji Hingga Tetesan yang Sempurna",
        isi: "Banyak yang menikmati kopi, tapi tak sedikit yang belum tahu betapa panjang dan menarik perjalanan secangkir kopi sebelum tiba di meja kita. Mulai dari petani yang merawat pohon kopi di dataran tinggi, proses panen dan sortasi biji terbaik, hingga proses roasting yang menentukan cita rasa akhir. Lalu ada pula proses brewing — dari pour over, french press, hingga espresso machine — yang masing-masing punya karakter unik. Artikel ini akan membahas tuntas perjalanan kopi dari kebun hingga cangkir, sekaligus memberikan panduan bagaimana menghasilkan seduhan kopi dengan rasa maksimal di rumah. Siapa tahu setelah membaca, kamu jadi lebih menghargai setiap tegukan kopi yang kamu nikmati.",
        gambar: "/images/bijikopi.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
    for (const b of dummy) {
      await addBlog(b);
    }
  }
} 