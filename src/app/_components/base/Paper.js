import React from "react";

const Paper = ({ children, className = "" }) => {
  return (
    <div className={"bg-gray-100 rounded-sm"}>{children}</div>
  );
};

export default Paper;
