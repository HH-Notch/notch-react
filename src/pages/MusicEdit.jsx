import React, { useContext } from "react";
import { MorningContext } from "../context/MorningContext";

export default function MusicEdit() {
  const { goToDefault } = useContext(MorningContext);

  return (
    <>
      <div>
        <p> musicEdit</p>
        <button onClick={() => goToDefault()}>닫기</button>
      </div>
    </>
  );
}
