import React from "react";
import "./table.css";

const tableData = [
  ["باقی مانده", "مبلغ تراکنش", "تاریخ", "شماره درخواست", "#"],
  ["۱۵.۰۰۰", "۵۴.۰۰۰", "۱۳۹۸/۱۲/۳۰", "۴۳۲۴", "۱"],
  ["۲۰.۰۰۰", "۴۵.۰۰۰", "۱۳۹۸/۰۹/۲۰", "۲۱۳۴", "۲"],
  ["۳۵.۰۰۰", "۷۵.۰۰۰", "۱۳۹۹/۰۱/۱۵", "۵۶۷۸", "۳"],
];

const Table = () => {
  return (
    <div className="table">
      {tableData.map((row, rowIndex) => (
        <div className="table-row" key={rowIndex}>
          {row.map((item, itemIndex) => (
            <div className="items-table" key={itemIndex}>
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
// {one.map((status, index) => (
//   <div className="items-table" key={index}>{status}</div>
// ))}
