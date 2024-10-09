import React from "react";
import "../partitionReg/partitionReg.css";

// تعریف نوع داده برای هر رکورد
interface Record {
  bill: string;
  phone: string;
  deliveryInfo: string;
  billStatus: string;
  requestNumber: string;
  statusText: string;
}

// کامپوننت اصلی
const PartitionReg: React.FC = () => {
  // داده‌ها به صورت آرایه آبجکت برای هر رکورد
  const records: Record[] = [
    {
      bill: "6544",
      phone: "09125431217",
      deliveryInfo: "بازه عصر -۳آبان",
      billStatus: "5123",
      requestNumber: "216880",
      statusText: "تایید شد",
    },
    {
      bill: "-",
      phone: "09128441422",
      deliveryInfo: "بازه عصر -۳آبان",
      billStatus: "1456",
      requestNumber: "216850",
      statusText: "لغو شد",
    },
    {
      bill: "1244",
      phone: "09125431217",
      deliveryInfo: "بازه عصر -۳آبان",
      billStatus: "4215",
      requestNumber: "216846",
      statusText: "متن تستی",
    },
    {
      bill: "6544",
      phone: "09125431217",
      deliveryInfo: "بازه عصر -۳آبان",
      billStatus: "5123",
      requestNumber: "216846",
      statusText: "متن تستی",
    },
  ];

  // آرایه برای مقادیر ثابت (برای هر div دوم)
  const labelArray: string[] = ["قبض", "تلفن", "اطلاعات تحویل", "وضعیت قبض"];

  // تابعی که مقادیر و برچسب‌های مرتبط را برمی‌گرداند
  const createRecordFields = (record: Record, labelArray: string[]) => [
    { value: record.bill, label: labelArray[0] },
    { value: record.phone, label: labelArray[1] },
    { value: record.deliveryInfo, label: labelArray[2] },
    { value: record.billStatus, label: labelArray[3] },
  ];

  // تابع برای تعیین کلاس براساس متن
  const getStatusClass = (status: string): string => {
    if (status === "تایید شد") return "status-approved";
    if (status === "لغو شد") return "status-canceled";
    if (status === "متن تستی") return "status-test";
    return "";
  };

  return (
    <div className="request__container">
      {records.map((record, index) => (
        <div className="request__partion" key={index}>
          <div className="request__number--style">
            <div className="request__button">
              <p
                className={`table__title ${getStatusClass(record.statusText)}`}
              >
                {record.statusText}
              </p>
            </div>
            <div className="request__number">
              <h5 className="flex__left">{record.requestNumber}</h5>
              <h5 className="flex__righttop--hidden flex__right">
                شماره درخواست
              </h5>
              <h5 className="flex__right--hidden">ش.درخواست</h5>
            </div>
          </div>

          <div className="flex-item">
            {/* خواندن آرایه مقادیر و برچسب‌ها از تابع خارج از کامپوننت */}
            {createRecordFields(record, labelArray).map((item, numIndex) => (
              <div
                key={numIndex}
                className={numIndex % 2 === 0 ? "divone" : "divtwo"}
              >
                <p className="flex__left">{item.value}</p>
                <p className="flex__right">{item.label}</p>
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
