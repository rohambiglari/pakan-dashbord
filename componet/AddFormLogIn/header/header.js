// import React, { useContext, useEffect } from "react";
import { ItemContext } from "../../usecontext/usecontext"; // وارد کردن ItemContext
import Dashbord from "./dashborditem/dashborditem";
import SideBar from "./sidebar/sidebar";
import "./header.css";
import NavarDashbor from "../navbarhandlelogin/navbarhandlelogin";
const Header = ({ children }) => {
  // const { nameItem } = useContext(ItemContext); // دریافت nameItem از context
  // console.log(nameItem);

  return (
    <>
      <NavarDashbor />
      <div className="header-contaner">
        <div className="header-dashbord">
          <div className="style-headr-left-side">
            <main>{children}</main>
          </div>
          <div className="style-headr-right-side">
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

// <h4 className="h4-header">داشبورد</h4>

// <div className="img-dashbor"></div>
// <div className="style-dashbord-items">
//   <Dashbord />
// </div>
