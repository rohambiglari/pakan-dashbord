import React from "react";
import "./tabletwo.css";

// const TableTwo = () => {
//   let thData = ["باقی مانده", "مبلغ تراکنش", "تاریخ", "شماره درخواست", "#"];
//   let tDData = [
//     ["۱۵.۰۰۰", "۵۴.۰۰۰", "۱۳۹۸/۱۲/۳۰", "۴۳۲۴", "۱"],
//     ["۲۰.۰۰۰", "۴۵.۰۰۰", "۱۳۹۸/۰۹/۲۰", "۲۱۳۴", "۲"],
//     ["۳۵.۰۰۰", "۷۵.۰۰۰", "۱۳۹۹/۰۱/۱۵", "۵۶۷۸", "۳"],
//   ];

//   return (
//     <table className="table">
//       {/* <thead className="tHead"> */}
//       {/* <div className="tHead"> */}
//       <tr>
//         {thData.map((value, index) => {
//           return <th key={index}> {value}</th>;
//         })}
//       </tr>
//       {/* </div> */}
//       {/* </thead> */}
//       <tbody>
//         {/* {tDData?.map((value, index) => {
//           return (
//             <tr key={index}>
//               <td>{value}</td>
//             </tr>
//           );
//         })} */}

//         <tr>
//           {tDData?.map((value, index) => {
//             return <td key={index}>{value}</td>;
//           })}
//         </tr>
//       </tbody>
//     </table>
//   );
// };
const TableTwo: React.FC = () => {
  let thData: string[] = [
    "باقی مانده",
    "مبلغ تراکنش",
    "تاریخ",
    "شماره درخواست",
    "#",
  ];
  let tDData: string[][] = [
    ["۱۵.۰۰۰", "۵۴.۰۰۰", "۱۳۹۸/۱۲/۳۰", "۴۳۲۴", "۱"],
    ["۲۰.۰۰۰", "۴۵.۰۰۰", "۱۳۹۸/۰۹/۲۰", "۲۱۳۴", "۲"],
    ["۳۵.۰۰۰", "۷۵.۰۰۰", "۱۳۹۹/۰۱/۱۵", "۵۶۷۸", "۳"],
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          {thData.map((value, index) => (
            <th className="table-th" key={index}>
              {value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tDData.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {rowData.map((cellData, cellIndex) => (
              <td
                className={
                  cellIndex === rowData.length - 1
                    ? "first-table-td"
                    : "table-td"
                }
                key={cellIndex}
              >
                {cellData}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableTwo;
