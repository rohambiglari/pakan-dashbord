import React, { useContext, useEffect } from "react";
import { ItemContext } from "../../usecontext/usecontext"; // وارد کردن ItemContext
import Dashbord from "./dashborditem/dashborditem";
import SideBar from "./sidebar/sidebar";
import "./header.css";

const Header = () => {
  const { nameItem } = useContext(ItemContext); // دریافت nameItem از context
  console.log(nameItem);

  return (
    <div className="header-contaner">
      <div className="header-dashbord">
        <div className="style-headr-left-side">
          {nameItem.id && <h4 className="h4-header">{nameItem.comp}</h4>}
          {/* {nameItem === nameItem.name && (
            <>
              <h4 className="h4-header">داشبورد</h4>

              <div className="img-dashbor"></div>
              <div className="style-dashbord-items">
                <Dashbord />
              </div>
            </>
          )} */}
          {/* {nameItem &&
            nameItem.map((item, index) => <div key={index}>{item.id}</div>)} */}
          {/* {nameItem === arrayProfileItem.name && (
            <h4 className="h4-header">داشبورد</h4>
          )} */}

          {/* {items.map((item) => nameItem === item && <h4>{item}</h4>)} */}
        </div>
        <div className="style-headr-right-side">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Header;

// <h4 className="h4-header">داشبورد</h4>

// <div className="img-dashbor"></div>
// <div className="style-dashbord-items">
//   <Dashbord />
// </div>
