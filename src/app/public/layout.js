'use client';
import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import './page.module.css';

const pathToMenu = {
  "/public": "Home",
  "/public/about": "About",
  "/public/contact": "Contact",
  "/public/products": "Products",
  "/public/blog": "Blog",
};

export default function PublicLayout({ children }) {
  const pathname = usePathname();
  // Untuk dynamic route blog detail
  let active = pathToMenu[pathname] || (pathname.startsWith("/public/blog/") ? "Blog" : undefined);
  const fadeRef = useRef(null);
  useEffect(() => {
    if (fadeRef.current) {
      fadeRef.current.classList.add('animated', 'fadeInUp');
      const timer = setTimeout(() => {
        fadeRef.current.classList.remove('animated', 'fadeInUp');
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [pathname]);
  return (
    <>
      <Header active={active} />
      <div ref={fadeRef}>
        {children}
      </div>
      <Footer />
    </>
  );
} 