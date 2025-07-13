'use client';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

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
  return (
    <>
      <Header active={active} />
      {children}
      <Footer />
    </>
  );
} 