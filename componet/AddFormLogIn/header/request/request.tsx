import React from "react";

interface RequestProps {
  statuses: string[];
  steps: number[];
  statusesTow: string[];
}

const Request: React.FC<RequestProps> = ({ statuses, steps, statusesTow }) => {
  return (
    <div>
      <div className="process-products-first">
        {statuses.map((status, index) => (
          <p key={index}>{status}</p>
        ))}
      </div>

      <div className="setp-line">
        {steps.map((_, index) => (
          <React.Fragment key={`step-${index}`}>
            <div className="steper-circle"></div>
            {index < steps.length - 1 && (
              <>
                <hr />
                <hr />
              </>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="process-products-secound">
        {statusesTow.map((status, index) => (
          <p key={index}>{status}</p>
        ))}
      </div>
    </div>
  );
};

export default Request;
