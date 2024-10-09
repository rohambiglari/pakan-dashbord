import React, { Children } from "react";
import "../requests/requests.css";
import TableReq from "../tableReq/tableReq";
import PartitionReg from "../partitionReg/partitionReg";
import MainRequest from "../mainRequests/mainRequest";
const Requests = () => {
  return (
    <>
      <MainRequest>
        <div className="tableReq__contianer">
          <TableReq />
        </div>
        <div className="partitionReg__contianer">
          <PartitionReg />
        </div>
      </MainRequest>
    </>
  );
};

export default Requests;
