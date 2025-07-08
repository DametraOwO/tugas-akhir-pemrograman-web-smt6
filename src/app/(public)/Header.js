'use client';
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Products", href: "/products" },
  { name: "Blog", href: "/blog" },
];

export default function Header({ active }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Tumbuh Lestari</div>
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