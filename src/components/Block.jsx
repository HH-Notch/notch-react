import React from "react";

export default function Block({ children, blockName }) {
  return (
    <div className="flex flex-col justify-center items-center m-5">
      <div className="mb-5">
        <span>{blockName}</span>
      </div>
      <div
        className="aspect-square bg-blue-100  h-88 p-5"
        style={{
          borderRadius: "57px",
          background: "#e1ffd6",
          boxShadow:
            "inset 29px 29px 58px #d4f0c9, inset -29px -29px 58px #efffe3",
        }}
      >
        {children}
      </div>
    </div>
  );
}
