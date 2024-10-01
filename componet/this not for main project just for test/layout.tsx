// Layout.js
import React from "react";
import Link from "next/link";
import Navbar from "./navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>وب‌سایت من</h1>
        <Navbar />
      </header>
      <h4>این برای تسته</h4>
      <main>{children}</main>
      <footer>
        <p>تمامی حقوق محفوظ است &copy; 2024</p>
      </footer>
    </div>
  );
};

export default Layout;
