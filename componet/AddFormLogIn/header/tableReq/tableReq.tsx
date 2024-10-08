import React from "react";
import "../tableReq/tableReq.css";
const TableReq = () => {
  let thData = [
    "وضعیت قبض",
    "وضعیت درخواست",
    "اطلاعات تحویل",
    "تلفن",
    "قبض",
    "درخواست",
    "#",
  ];

  let tDData = [
    [
      "",
      "تایید شد",
      "بازه عصر -۳آبان خیابان سپهبد",
      "09123933799",
      "8755",
      "216880",
      "1",
    ],
    [
      "",
      "لغو شد",
      "بازه عصر -۳آبان خیابان سپهبد",
      "09128441422",
      "-",
      "216850",
      "2",
    ],
    [
      "",
      "متن تستی",
      "بازه عصر -۳آبان خیابان سپهبد",
      "09125431217",
      "1244",
      "216846",
      "3",
    ],
    [
      "",
      "متن تستی",
      "بازه عصر -۳آبان خیابان سپهبد",
      "09125431217",
      "1244",
      "216846",
      "4",
    ],
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
        {tDData.map((rowData, rowIndex) => (
          <tr
            className={
              rowIndex % 2 === 0 ? "tr__colorCase-one" : "tr__colorCase-two"
            }
            key={rowIndex}
          >
            {rowData.map((cellData, cellIndex) => {
              let divClass = "table__title";

              if (cellIndex === 1) {
                if (cellData === "تایید شد") {
                  divClass += " status-approved";
                } else if (cellData === "لغو شد") {
                  divClass += " status-canceled";
                } else if (cellData === "متن تستی") {
                  divClass += " status-test";
                }
              }

              if (cellIndex === 0) {
                divClass += " first-column";
              }

              return (
                <td
                  className={
                    cellIndex === rowData.length - 1
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
                    {cellIndex === 0 && <div className="td__in"></div>}
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
