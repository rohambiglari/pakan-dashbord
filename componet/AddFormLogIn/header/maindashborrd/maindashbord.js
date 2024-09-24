import React from "react";
const DashboardItem = ({ item, children }) => {
  return (
    <>
      <div className="dashbord-item">
        <div className="style-situation">
          <div>
            <img src={item.imgSrc} alt={item.imgAlt} />
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
    </>
  );
};

export default DashboardItem;
