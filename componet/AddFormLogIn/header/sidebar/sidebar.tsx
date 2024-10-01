"use client";

import React, { useEffect, useState } from "react";
import "../sidebar/sidebar.css";
import Items from "./itemporfielpattern/itemprofielpattern";
import Image from "next/image";
const SideBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1167);
  const [showSections, setShowSections] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1167);
    if (window.innerWidth >= 1167) {
      setShowSections(true);
    }
  };

  const toggleSections = () => {
    setShowSections((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="contaner-user-profile">
        <div className="user-profile">
          {isMobile && (
            <button className="toggle-logo" onClick={toggleSections}>
              <div>
                <div className="rectangle"></div>
                <div className="rectangle"></div>
              </div>
              <div>
                <div className="rectangle"></div>
                <div className="rectangle"></div>
              </div>
            </button>
          )}
          <div className="profile-text">
            <p>پروفایل کاربری</p>
          </div>
          {isMobile && (
            <div className="active-title">
              <p>|</p>
              <p>داشبورد</p>
              <div>
                <Image
                  src="/icons8-back-24.png"
                  alt="arrow-icon"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="profile-items">
        {(!isMobile || showSections) && (
          <>
            <div className="avatar-section">
              <div className="name-number">
                <div className="name">
                  <p>رهام</p>
                </div>
                <div className="number">
                  <p>09127833445</p>
                </div>
              </div>
              <div className="avatar">
                <Image
                  src="/Profile_Placeholder.svg"
                  alt="Avatar"
                  width={70}
                  height={70}
                />
              </div>
            </div>
            <div>
              <div className="wallet-section">
                <div className="wallet-contaner-item">
                  <div className="value">0 ریال</div>
                  <div className="wallet-item">
                    <div>کیف پول</div>
                    <div className="wallet-circle"></div>
                  </div>
                </div>
              </div>
              <div className="profile-section">
                <Items />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SideBar;
