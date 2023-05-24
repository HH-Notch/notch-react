import React from "react";

export default function Block({ children, blockName, blockColor }) {
  return (
    <div className="flex flex-col justify-center items-center m-5">
      <div className="mb-8">
        <span className="text-xl font-semibold">{blockName}</span>
      </div>
      <div className="w-88 h-88 p-9" style={blockColor}>
        {children}
      </div>
    </div>
  );
}
