import React from "react";
import Seeder from "./Seeder";
import './public/page.module.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Seeder />
        {children}
      </body>
    </html>
  );
} 