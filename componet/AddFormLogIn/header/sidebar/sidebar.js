import React from "react";
import "../sidebar/sidebar.css";
import Items from "../../header/sidebar/itemporfielpattern/itemprofielpattern";

const SideBar = () => {
  return (
    <>
      <div className="profile-text">
        <p>پروفایل کاربری</p>
      </div>
      <div className="profile-items">
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
            <img src="./Profile_Placeholder.svg" alt="Avatar" />
          </div>
        </div>
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
  );
};

export default SideBar;
