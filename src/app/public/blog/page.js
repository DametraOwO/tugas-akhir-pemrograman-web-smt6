'use client';
import Header from "../Header";
import styles from "../page.module.css";

export default function BlogPage() {
  return (
    <>
      <Header active="Blog" />
      <div className={styles.bg} style={{ minHeight: '100vh', width: '100%', paddingTop: 60 }}>
        <h1 style={{ color: '#a86b3c', fontWeight: 700 }}>Blog Page</h1>
      </div>
    </>
  );
} 