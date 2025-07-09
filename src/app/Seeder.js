'use client';
import { useEffect } from "react";
import { seedDummyBlogs, seedDummyProducts } from "../utils/indexedDB";

export default function Seeder() {
  useEffect(() => {
    seedDummyBlogs();
    seedDummyProducts();
  }, []);
  return null;
} 