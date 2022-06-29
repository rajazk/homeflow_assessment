import React from "react";
import "./LoadingIndicator.scss";

const LoadingIndicator = () => {
  return (
    <div className="spinner-wrapper">
      <svg className="spinner-container" viewBox="0 0 52 52">
        <circle
          className="path"
          cx="26px"
          cy="26px"
          r="20px"
          fill="none"
          strokeWidth="4px"
        />
      </svg>
    </div>
  );
};

export default LoadingIndicator;
