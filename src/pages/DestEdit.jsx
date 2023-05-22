import React, { useContext } from "react";
import { MorningContext } from "../context/MorningContext";

export default function DestEdit() {
  const { goToDefault } = useContext(MorningContext);

  return (
    <>
      <div>
        <p> DestEdit</p>
        <button onClick={() => goToDefault()}>닫기</button>
      </div>
    </>
  );
}
