'use client';
import Header from "../Header";
import styles from "../page.module.css";

export default function AboutPage() {
  return (
    <>
      <Header active="About" />
      <div className={styles.bg} style={{ minHeight: '100vh', width: '100%', paddingTop: 60 }}>
        <h1 style={{ color: '#a86b3c', fontWeight: 700 }}>About Page</h1>
      </div>
    </>
  );
} 