import React, { useState } from "react";

export default function Block() {
  return (
    <div className="flex flex-col justify-center items-center m-5">
      <div className="mb-5">
        <span>☀ 아침 ☀</span>
      </div>
      <div
        className="aspect-square bg-orange-200  h-96 p-5"
        style={{ borderRadius: "30px" }}
      ></div>
    </div>
  );
}
