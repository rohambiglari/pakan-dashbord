import React from "react";
import "../dashborditem/dashborditem.css";
// import Table from "../table/table";
import TableTwo from "../tabletwo/tabletwo";
import Request from "../request/request";
import DashboardItem from "../maindashborrd/maindashbord";
const dashboardItems = [
  {
    imgSrc: "./icons8-back-24.png",
    imgAlt: "back-icon",
    viewAllText: "مشاهده همه",
    statusHeading: "وضعیت آخرین درخواست",
    requestNumber: "۹۰۷۷۴",
    requestNumberLabel: "شماره درخواست",
    happen: true,
    statuses: ["تایید شد", "آماده شد", "تحویل شد"],
    steps: [1, 2, 3, 4, 5],
    statusesTow: ["درحال دریافت", "درحال ارسال"],
  },
  {
    imgSrc: "./icons8-back-24.png",
    imgAlt: "back-icon",
    viewAllText: "مشاهده همه",
    statusHeading: "گردش حساب",
    requestNumber: "0 ریال",
    requestNumberLabel: "موجودی کیف پول شما",
    happen: false,
    table: ["باقی مانده", "مبلغ تراکنش", "تاریخ", "شماره درخواست", "#"],
  },
];

const Dashbord = () => {
  return (
    <>
      {dashboardItems.map((item, index) => (
        <DashboardItem key={index} item={item}>
          {item.happen ? (
            <div className="items-request">
              <Request
                statuses={item.statuses}
                steps={item.steps}
                statusesTow={item.statusesTow}
              />
            </div>
          ) : (
            <div className="wallet-contaner">
              <TableTwo />
            </div>
          )}
        </DashboardItem>
      ))}
    </>
  );
};

export default Dashbord;

// const Dashbord = ({}) => {
//   return (
//     <>
//       {dashboardItems.map((item, index) => (
//         <div className="dashbord-item" key={index}>
//           <div className="style-situation">
//             <div>
//               <img src={item.imgSrc} alt={item.imgAlt} />
//               <p>{item.viewAllText}</p>
//             </div>
//             <h5>{item.statusHeading}</h5>
//           </div>
//           <div className="style-request">
//             <div>
//               <p>{item.requestNumber}</p>
//               <p>{item.requestNumberLabel}</p>
//             </div>
//             {item.happen ? (
//               <div className="items-request">
//                 <Request
//                   statuses={item.statuses}
//                   steps={item.steps}
//                   statusesTow={item.statusesTow}
//                 />
//               </div>
//             ) : (
//               <div className="wallet-contaner">
//                 {/* <Table /> */}
//                 <TableTwo />
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };
