import React from "react";

export default function Block({ children, blockName, blockColor }) {
  return (
    <div className="flex flex-col justify-center items-center m-5">
      <div className="mb-8">
        <span className="text-lg font-semibold">{blockName}</span>
      </div>
      <div className=" bg-blue-100 w-88 h-88 p-8" style={blockColor}>
        {children}
      </div>
    </div>
  );
}
