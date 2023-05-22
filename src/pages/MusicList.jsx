import React, { useContext } from "react";
import { MorningContext } from "../context/MorningContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function MusicList() {
  const { musicListMode, goToDefault, goToMusicEdit } =
    useContext(MorningContext);

  const {
    isLoading,
    error,
    data: musicList,
  } = useQuery(
    ["musicList"],
    async () => {
      console.log("fetching ...");
      return axios
        .get(
          "https://my-json-server.typicode.com/HH-Notch/notch-api-mock/morning-block/3"
        )
        .then((res) => res.data.palylists)
        .catch((error) => {
          console.log("musiclist 가져오는 중 에러 발생", error);
        });

      // fetch(
      //   "https://my-json-server.typicode.com/HH-Notch/notch-api-mock/morning-block"
      // ).then((res) => res.json());
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  console.log("music", musicList);

  return (
    <>
      {musicListMode && (
        <div className="w-full">
          <p> musicList</p>

          {musicList.map((item) => (
            <div key={item.id} className="break-all">
              <p>{item.name}</p>
              <p> {item.link}</p>
            </div>
          ))}
          <button onClick={() => goToDefault()}>닫기</button>
          <button onClick={() => goToMusicEdit()}>편집</button>
        </div>
      )}
    </>
  );
}
