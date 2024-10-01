// import React, { useContext, useEffect } from "react";
// import { ItemContext } from "../../usecontext/usecontext";
import Dashbord from "./dashborditem/dashborditem";
import SideBar from "./sidebar/sidebar";
import "./header.css";
import NavarDashbor from "../navbarhandlelogin/navbarhandlelogin";
import React, { ReactNode } from "react";
interface HeaderProp {
  children?: React.ReactNode;
}
const Header: React.FC<HeaderProp> = ({ children }) => {
  // const { nameItem } = useContext(ItemContext);
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
