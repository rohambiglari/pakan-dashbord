import React, { useContext } from "react";
import { ItemContext } from "../../../../usecontext/usecontext";
import "./itemprofielpattern.css";
import Dash from "../../../../buttoncomponent/dash/page";
import Test from "../../../../buttoncomponent/test/page";
const profileItems = [
  { id: 1, name: "داشبورد", path: "/dash", comp: <Dash /> },
  { id: 2, name: "افزودن اعتبار", path: "/add-credit" },
  { id: 3, name: "اطلاعات کاربری", path: "/user-info" },
  { id: 5, name: "تغییر رمز عبور", path: "/change-password" },
  { id: 6, name: "آدرس های من", path: "/my-addresses" },
  { id: 7, name: "درخواست ها", path: "/test", comp: <Test /> },
  { id: 8, name: "گردش حساب", path: "/account-statement" },
  { id: 9, name: "خروج", path: "/logout" },
];

const Items = () => {
  const { setNameItem } = useContext(ItemContext);
  const handleButtonClick = (id, name, comp) => {
    setNameItem({ id, name, comp });
  };
  // const handleArray = () => {
  //   setArrayProfileItem(profileItems);
  // };
  return (
    <>
      {profileItems.map((item, index) => (
        <div
          key={index}
          className={
            index === profileItems.length - 1
              ? "last-profile-section-item"
              : "profile-section-item"
          }
        >
          <button
            className="option-item"
            onClick={() => handleButtonClick(item.id, item.name, item.comp)}
          >
            <div>{item.name}</div>
            <div className="circle"></div>
          </button>
        </div>
      ))}
    </>
  );
};

export default Items;
