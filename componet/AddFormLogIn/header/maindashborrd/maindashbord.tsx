import React from "react";
import Image from "next/image";
interface DashboardItemProps {
  item: {
    imgSrc: string;
    imgAlt: string;
    viewAllText: string;
    statusHeading: string;
    requestNumber: string;
    requestNumberLabel: string;
  };
  children: React.ReactNode;
}

const DashboardItem: React.FC<DashboardItemProps> = ({ item, children }) => {
  return (
    <div className="dashbord-item">
      <div className="style-situation">
        <div>
          <Image src={item.imgSrc} alt={item.imgAlt} width={30} height={30} />
          <p>{item.viewAllText}</p>
        </div>
        <h5>{item.statusHeading}</h5>
      </div>
      <div className="style-request">
        <div>
          <p>{item.requestNumber}</p>
          <p>{item.requestNumberLabel}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardItem;
