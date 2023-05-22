import React, { useContext } from "react";
import { MorningContext } from "../context/MorningContext";

export default function MusicList() {
  const { goToDefault, goToMusicEdit } = useContext(MorningContext);
  return (
    <>
      <div>
        <p> musicList</p>
        <button onClick={() => goToDefault()}>닫기</button>
        <button onClick={() => goToMusicEdit()}>편집</button>
      </div>
    </>
  );
}
