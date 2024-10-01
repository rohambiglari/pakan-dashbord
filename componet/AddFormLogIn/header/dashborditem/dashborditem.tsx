import React from "react";
import "../dashborditem/dashborditem.css";
import TableTwo from "../tabletwo/tabletwo";
import Request from "../request/request";
import DashboardItem from "../maindashborrd/maindashbord";

interface DashboardItemData {
  imgSrc: string;
  imgAlt: string;
  viewAllText: string;
  statusHeading: string;
  requestNumber: string;
  requestNumberLabel: string;
  happen: boolean;
  statuses?: string[];
  steps?: number[];
  statusesTow?: string[];
  table?: string[];
}

const dashboardItems: DashboardItemData[] = [
  {
    imgSrc: "/icons8-back-24.png",
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
    imgSrc: "/icons8-back-24.png",
    imgAlt: "back-icon",
    viewAllText: "مشاهده همه",
    statusHeading: "گردش حساب",
    requestNumber: " ریال0",
    requestNumberLabel: "موجودی کیف پول شما",
    happen: false,
    table: ["باقی مانده", "مبلغ تراکنش", "تاریخ", "شماره درخواست", "#"],
  },
];

const Dashbord: React.FC = () => {
  return (
    <>
      <h4 className="h4-header">داشبورد</h4>

      <div className="img-dashbor"></div>
      <div className="style-dashbord-items"></div>
      <div className="dashbord-container">
        {dashboardItems.map((item, index) => (
          <DashboardItem key={index} item={item}>
            {item.happen ? (
              <div className="items-request">
                <Request
                  statuses={item.statuses!} // استفاده از '!' برای تضمین وجود داده
                  steps={item.steps!} // استفاده از '!' برای تضمین وجود داده
                  statusesTow={item.statusesTow!} // استفاده از '!' برای تضمین وجود داده
                />
              </div>
            ) : (
              <div className="wallet-contaner">
                <TableTwo />
              </div>
            )}
          </DashboardItem>
        ))}
      </div>
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
