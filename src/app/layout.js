import React from "react";
import Seeder from "./Seeder";

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