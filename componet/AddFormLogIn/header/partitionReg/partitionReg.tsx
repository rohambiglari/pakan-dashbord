import React from "react";
import "../partitionReg/partitionReg.css";
const PartitionReg = () => {
  // آرایه برای مقادیر عددی
  const numbersArray = [
    ["8755", "09123933799", " بازه عصر -۳آبان خیابان سپهبد", "3901"],
    ["6125", "7541", "3941", "1456"],
    ["9234", "8562", "3721", "5123"],
    ["7415", "6231", "1324", "4215"],
  ];

  // آرایه برای مقادیر ثابت (برای هر div دوم)
  const labelArray = ["قبض", "پرداخت", "تسویه", "دریافت"];

  // آرایه برای متن تستی
  const testTextArray = ["تایید شد", "لغو شد", "متن تستی", "متن تستی"];

  // آرایه برای شماره درخواست
  const requestNumbers = ["216880", "216850", "216846", "216846"];

  // تابع برای تعیین کلاس براساس متن
  const getStatusClass = (status) => {
    if (status === "تایید شد") return "status-approved";
    if (status === "لغو شد") return "status-canceled";
    if (status === "متن تستی") return "status-test";
    return "";
  };

  return (
    <div className="request__container">
      {numbersArray.map((numbers, index) => (
        <div className="request__partion" key={index}>
          <div className="request__number--style">
            <div>
              <p
                className={`table__title ${getStatusClass(
                  testTextArray[index]
                )}`}
              >
                {testTextArray[index]}
              </p>
            </div>
            <div className="request__number">
              <p className="flex__left">{requestNumbers[index]}</p>
              <p className="flex__right">شماره درخواست</p>
            </div>
          </div>
          <div className="flex-item">
            {numbers.map((number, numIndex) => (
              <div
                className={numIndex % 2 === 0 ? "divone" : "divtwo"}
                key={numIndex}
              >
                <p className="flex__left">{number}</p>
                <p className="flex__right">{labelArray[numIndex]}</p>
              </div>
            ))}
          </div>
          <div className="requst__details--style">
            <p className="requst__details">مشاهده جزئیات</p>
            <div className="requst__details--circle"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartitionReg;
