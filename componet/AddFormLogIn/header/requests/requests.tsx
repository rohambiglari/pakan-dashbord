import React from "react";
import "../requests/requests.css";
import TableReq from "../tableReq/tableReq"
const Requests = () => {
  const headItems = [
    "#",
  
    "درخواست",
    "قبض",
    "تلفن",
    "اطلاعات تحویل",
    "وضعیت درخواست",
    "وضعیت قبض",
  ];
  const items = {
    he :["۱۵.۰۰۰", "۵۴.۰۰۰", "۵۴.۰۰۰", "۵۴.۰۰۰", "۱"],
    hee :["۲۰.۰۰۰", "۵۴.۰۰۰", "۵۴.۰۰۰", "۵۴.۰۰۰", "۲"],
    hoo :["۳۵.۰۰۰", "۵۴.۰۰۰","۵۴.۰۰۰", "۵۴.۰۰۰", "۳"],
  };
  return (
    <div className="requests">
      <div className="requests__titles">
        <h3>لیست درخواست‌های شما</h3>
        <div className="requests__category">
          <h4 className="requests__category">مرتب‌ سازی</h4>
          <img src="./b4f6f4fd-0793-4e9c-900c-9378bfb64c3c.svg" alt="" />
        </div>
      </div>
      <div className="requests__countianer-items">
      <TableReq/>

        {/* <div className="requests__items">
          <div className="requests__items-container">
            {headItems.map((item, index) => (
              <h3 key={index}>{item}</h3>
            ))}
          </div>
          <div className="request__table">
            <TableReq/>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Requests;
