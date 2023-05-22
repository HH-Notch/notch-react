import React, { useContext } from "react";
import { MorningContext } from "../context/MorningContext";

export default function DestList() {
  const { goToDefault, goToDestEdit } = useContext(MorningContext);
  return (
    <>
      <div>
        <p> DestList</p>
        <button onClick={() => goToDefault()}>닫기</button>
        <button onClick={() => goToDestEdit()}>편집</button>
      </div>
    </>
  );
}
