"use client";
import React, { useEffect, useState } from "react";
import "./navbarhandlelogin.css";

const menuItems = [
  "درباره ما",
  "خدمات",
  "خدمات سازمانی",
  "نحوه درخواست",
  "محدوده سرویس‌دهی",
  "تماس با‌ما",
  "ویترین",
  "بلاگ",
];

const NavarDashbor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const handleRezie = () => {
    if (window.innerWidth < 1167) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    handleRezie();
    window.addEventListener("resize", handleRezie);
    return () => {
      window.removeEventListener("resize", handleRezie); // تغییر این خط
    };
  }, []);

  return (
    <div className="navbar-dashbor">
      <div className="navbar-content r">
        <div className="profile-img">
          <img src="./unnamed.jpg" alt="Profile" />
        </div>
        <div className="navbar-meno">
          {/* {showButton && (
            <button onClick={toggleMenu} className="menu-icon">
              <img src="/humburger-menu.svg" />
            </button>
          )} */}

          {showButton ? (
            <button onClick={toggleMenu} className="menu-icon">
              <img src="/humburger-menu.svg" />
            </button>
          ) : (
            <ul className="meno-items">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          )}

          {isOpen && (
            <div className="modal">
              <div className="modal-content">
                <button className="close-button" onClick={toggleMenu}>
                  ×
                </button>
                <ul className="meno-items">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <img
            className="pakan-logo"
            src="./b1276555-1294-4e7d-b509-7f713bfa0c4f.svg"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default NavarDashbor;
