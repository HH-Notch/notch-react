import React from "react";
import qr from "../../assets/images/qr_code/turnMusic.png";

export default function TurnOnMusic() {
  return (
    <>
      <div className="w-full h-full flex flex-col p-3 justify-content items-center">
        <div className="flex text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1 justify-content items-center">
          ⯎ This is Bonus Shortcut ⯎
        </div>
        <div className="flex basis-1/4 py-3 pr-3">
          <img src={qr} alt="" className="w-full" />
        </div>
      </div>
    </>
  );
}
