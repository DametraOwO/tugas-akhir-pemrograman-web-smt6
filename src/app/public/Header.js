'use client';
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navItems = [
  { name: "Home", href: "/public" },
  { name: "About", href: "/public/about" },
  { name: "Contact", href: "/public/contact" },
  { name: "Products", href: "/public/products" },
  { name: "Blog", href: "/public/blog" },
];

export default function Header({ active }) {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>Tumbuh Lestari</Link>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={active === item.name ? styles.active : ""}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
} 