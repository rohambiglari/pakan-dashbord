import React from "react";
import "../requests/requests.css";
import TableReq from "../tableReq/tableReq";
import PartitionReg from "../partitionReg/partitionReg";
const Requests = () => {
  return (
    <div className="requests">
      <div className="requests__titles">
        <h3>لیست درخواست‌های شما</h3>
        <div className="requests__category">
          <h4 className="requests__category">مرتب‌ سازی</h4>
          <img src="./b4f6f4fd-0793-4e9c-900c-9378bfb64c3c.svg" alt="" />
        </div>
      </div>
      <div className="requests__countianer-items">
        <div className="tableReq__contianer">
          <TableReq />
        </div>
        <div className="partitionReg__contianer">
          <PartitionReg />
        </div>
      </div>
    </div>
  );
};

export default Requests;
