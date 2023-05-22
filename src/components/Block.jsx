import React, { useState } from "react";

export default function Block({ children, blockName }) {
  return (
    <div className="flex flex-col justify-center items-center m-5">
      <div className="mb-5">
        <span>{blockName}</span>
      </div>
      <div
        className="aspect-square  h-88 p-8"
        // style={{ borderRadius: "30px" }}
        // style={{
        //   borderRadius: "48px",
        //   background: "#e0ffc7",
        //   boxShadow:
        //     "inset 20px 20px 86px #ceebb7, inset -20px -20px 86px #f2ffd7",
        // }}
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
