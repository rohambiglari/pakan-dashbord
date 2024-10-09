import React from "react";
import "../partitionReg/partitionReg.css";
const PartitionReg = () => {
  // آرایه برای مقادیر عددی
  const numbersArray = [
    ["8755", "09123933799", " بازه عصر -۳آبان ", "3901"],
    ["-", "09128441422", "بازه عصر -۳آبان ", "1456"],
    ["1244", "09125431217", "بازه عصر -۳آبان ", "4215"],
    ["6544", "09125431217", "بازه عصر -۳آبان ", "5123"],
  ];

  // آرایه برای مقادیر ثابت (برای هر div دوم)
  const labelArray = ["قبض", "تلفن", "اطلاعات تحویل", "وضعیت قبض"];

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
            <div className="request__button">
              <p
                className={`table__title ${getStatusClass(
                  testTextArray[index]
                )}`}
              >
                {testTextArray[index]}
              </p>
            </div>
            <div className="request__number">
              <h5 className="flex__left">{requestNumbers[index]}</h5>
              <h5 className="flex__righttop--hidden flex__right">
                شماره درخواست
              </h5>
              <h5 className="flex__right--hidden">ش.درخواست</h5>
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
            <p className="requst__details"> مشاهده جزئیات بیشتر</p>
            <div className="requst__details--circle"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartitionReg;
