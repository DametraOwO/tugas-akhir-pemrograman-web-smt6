// IndexedDB utility for login credentials

const DB_NAME = 'TumbuhLestariDB';
const DB_VERSION = 3;
const STORE_NAME = 'loginCredentials';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'username' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function addCredential({ username, password }) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.add({ username, password });
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}

export async function getCredential(username) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(username);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function deleteCredential(username) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.delete(username);
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}

// --- Produk CRUD ---
const PRODUCT_STORE = 'products';

function openProductDB() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(PRODUCT_STORE)) {
        db.createObjectStore(PRODUCT_STORE, { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function addProduct(product) {
  const db = await openProductDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PRODUCT_STORE, 'readwrite');
    const store = tx.objectStore(PRODUCT_STORE);
    const request = store.add(product);
    request.onsuccess = (e) => resolve(e.target.result); // return id
    request.onerror = () => reject(request.error);
  });
}

export async function getProducts() {
  const db = await openProductDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PRODUCT_STORE, 'readonly');
    const store = tx.objectStore(PRODUCT_STORE);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getProductById(id) {
  const db = await openProductDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PRODUCT_STORE, 'readonly');
    const store = tx.objectStore(PRODUCT_STORE);
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function updateProduct(product) {
  const db = await openProductDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PRODUCT_STORE, 'readwrite');
    const store = tx.objectStore(PRODUCT_STORE);
    const request = store.put(product);
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}

export async function deleteProduct(id) {
  const db = await openProductDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PRODUCT_STORE, 'readwrite');
    const store = tx.objectStore(PRODUCT_STORE);
    const request = store.delete(id);
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
} 

// --- Blog CRUD ---
const BLOG_STORE = 'blogs';

function openBlogDB() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(BLOG_STORE)) {
        db.createObjectStore(BLOG_STORE, { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function addBlog(blog) {
  const db = await openBlogDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BLOG_STORE, 'readwrite');
    const store = tx.objectStore(BLOG_STORE);
    const request = store.add(blog);
    request.onsuccess = (e) => resolve(e.target.result); // return id
    request.onerror = () => reject(request.error);
  });
}

export async function getBlogs() {
  const db = await openBlogDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BLOG_STORE, 'readonly');
    const store = tx.objectStore(BLOG_STORE);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getBlogById(id) {
  const db = await openBlogDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BLOG_STORE, 'readonly');
    const store = tx.objectStore(BLOG_STORE);
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function updateBlog(blog) {
  const db = await openBlogDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BLOG_STORE, 'readwrite');
    const store = tx.objectStore(BLOG_STORE);
    const request = store.put(blog);
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}

export async function deleteBlog(id) {
  const db = await openBlogDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BLOG_STORE, 'readwrite');
    const store = tx.objectStore(BLOG_STORE);
    const request = store.delete(id);
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
} 