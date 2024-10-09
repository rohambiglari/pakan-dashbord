import React from "react";
import "../tableReq/tableReq.css";

// تعریف نوع داده برای هر رکورد
interface Record {
  billStatus: string;
  requestStatus: string;
  deliveryInfo: string;
  phone: string;
  bill: string;
  requestNumber: string;
  rowNumber: string;
}

// تعریف نوع داده برای آرایه عنوان جدول
const thData: string[] = [
  "وضعیت قبض",
  "وضعیت درخواست",
  "اطلاعات تحویل",
  "تلفن",
  "قبض",
  "درخواست",
  "#",
];

// تابع برای دریافت کلاس مناسب بر اساس کلید و داده
const getCellClass = (key: string, cellData: string): string => {
  let divClass = "table__title";

  if (key === "requestStatus") {
    if (cellData === "تایید شد") {
      divClass += " status-approved";
    } else if (cellData === "لغو شد") {
      divClass += " status-canceled";
    } else if (cellData === "متن تستی") {
      divClass += " status-test";
    }
  }

  if (key === "billStatus") {
    divClass += " first-column";
  }

  return divClass;
};

// کامپوننت اصلی
const TableReq: React.FC = () => {
  // تعریف داده‌ها به صورت آرایه آبجکت برای هر رکورد
  const records: Record[] = [
    {
      billStatus: "",
      requestStatus: "تایید شد",
      deliveryInfo: "بازه عصر -۳آبان خیابان سپهبد",
      phone: "09123933799",
      bill: "8755",
      requestNumber: "216880",
      rowNumber: "1",
    },
    {
      billStatus: "",
      requestStatus: "لغو شد",
      deliveryInfo: "بازه عصر -۳آبان خیابان سپهبد",
      phone: "09128441422",
      bill: "-",
      requestNumber: "216850",
      rowNumber: "2",
    },
    {
      billStatus: "",
      requestStatus: "متن تستی",
      deliveryInfo: "بازه عصر -۳آبان خیابان سپهبد",
      phone: "09125431217",
      bill: "1244",
      requestNumber: "216846",
      rowNumber: "3",
    },
    {
      billStatus: "",
      requestStatus: "متن تستی",
      deliveryInfo: "بازه عصر -۳آبان خیابان سپهبد",
      phone: "09125431217",
      bill: "1244",
      requestNumber: "216846",
      rowNumber: "4",
    },
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          {thData.map((value, index) => (
            <th className="table-th" key={index}>
              <div className={index === 0 ? "table__th--size" : "tr__div"}>
                {value}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {records.map((record, rowIndex) => (
          <tr
            className={
              rowIndex % 2 === 0 ? "tr__colorCase-one" : "tr__colorCase-two"
            }
            key={rowIndex}
          >
            {Object.keys(record).map((key, cellIndex) => {
              const cellData: string = record[key as keyof Record]; // تعیین نوع داده برای cellData
              const divClass: string = getCellClass(key, cellData); // استفاده از تابع جدید

              return (
                <td
                  className={
                    cellIndex === Object.keys(record).length - 1
                      ? "first-table-td"
                      : cellIndex === 1
                      ? "second-column"
                      : cellIndex === 2
                      ? "third-table-td"
                      : "table-td"
                  }
                  key={cellIndex}
                >
                  <div className={divClass}>
                    {cellData}
                    {key === "billStatus" && <div className="td__in"></div>}
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableReq;
