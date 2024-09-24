// src/app/layout.js
import React from "react";
import Header from "../../../componet/AddFormLogIn/header/header"; // آدرس درست هدر
import "./globals.css"; // استایل‌های جهانی (اختیاری)

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
