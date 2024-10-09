import React, { ReactNode } from "react";

interface MainRequestProps {
  children: ReactNode; // تعیین نوع برای props.children
}

const MainRequest: React.FC<MainRequestProps> = ({ children }) => {
  return (
    <div className="requests">
      <div className="requests__titles">
        <h3>لیست درخواست‌های شما</h3>
        <div className="requests__category">
          <h4 className="requests__category">مرتب‌ سازی</h4>
          <img src="./b4f6f4fd-0793-4e9c-900c-9378bfb64c3c.svg" alt="" />
        </div>
      </div>
      <div className="requests__container-items">{children}</div>{" "}
      {/* نام کلاس اصلاح شده */}
    </div>
  );
};

export default MainRequest;
