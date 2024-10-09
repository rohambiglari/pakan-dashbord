// import React, { useContext } from "react";
// import { ItemContext } from "../../../../usecontext/usecontext";
import "./itemprofielpattern.css";
// import { useRouter } from "next/navigation";
// import Dash from "../../../../../src/app/dash/page";
// import Test from "../../../../../src/app/test/page";
// import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { act, useState, useEffect } from "react";
// const profileItems = [
//   { id: 1, name: "داشبورد", path: "/dash", comp: <Dash /> },
//   { id: 2, name: "افزودن اعتبار", path: "/add-credit" },
//   { id: 3, name: "اطلاعات کاربری", path: "/user-info" },
//   { id: 5, name: "تغییر رمز عبور", path: "/change-password" },
//   { id: 6, name: "آدرس های من", path: "/my-addresses" },
//   { id: 7, name: "درخواست ها", path: "/test", comp: <Test /> },
//   { id: 8, name: "گردش حساب", path: "/account-statement" },
//   { id: 9, name: "خروج", path: "/logout" },
// ];
interface ProfileItem {
  id: number;
  name: string;
  path: string;
}

const profileItems: ProfileItem[] = [
  { id: 1, name: "داشبورد", path: "/dash" },
  { id: 2, name: "افزودن اعتبار", path: "/add-credit" },
  { id: 3, name: "اطلاعات کاربری", path: "/user-info" },
  { id: 5, name: "تغییر رمز عبور", path: "/change-password" },
  { id: 6, name: "آدرس های من", path: "/address" },
  { id: 7, name: "درخواست ها", path: "/test" },
  { id: 8, name: "گردش حساب", path: "/account-statement" },
  { id: 9, name: "خروج", path: "/logOut" },
];
// interface Props {
//   selectedId: number | null;
// }

const Items: React.FC = () => {
  // در اینجا انتخاب‌شده را از localStorage می‌خوانیم

  const [selectedId, setSelectedId] = useState<number | null>(null);
  useEffect(() => {
    const storedId = localStorage.getItem("selectedProfileItem");
    if (storedId) {
      setSelectedId(Number(storedId));
    }
  }, []);

  const handleActive = (id: number) => {
    setSelectedId(id);
    localStorage.setItem("selectedProfileItem", id.toString()); // ذخیره شناسه انتخاب‌شده
  };

  return (
    <div>
      {profileItems.map((item, index) => (
        <div
          key={item.id}
          className={
            item.id === selectedId
              ? "active-profile-section-item"
              : index === profileItems.length - 1
              ? "last-profile-section-item"
              : "profile-section-item"
          }
        >
          <Link href={item.path} passHref>
            <button
              className="option-item"
              onClick={() => handleActive(item.id)}
            >
              <div>{item.name}</div>
              <div className="circle"></div>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Items;

// تابع برای دریافت props از سرور
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { query } = context;
//   const selectedId = query.selectedId ? Number(query.selectedId) : null; // گرفتن شناسه از URL

//   return {
//     props: {
//       selectedId, // ارسال شناسه به کامپوننت
//     },
//   };
// };
