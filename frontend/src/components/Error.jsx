import React from "react";

const Error = ({ error }) => {
  return (
    <div className="flex items-center w-full justify-center h-[300px] ">
      <p className="text-red-500" >{error}</p>
    </div>
  );
};

export default Error;
