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
    data: music_playlist,
  } = useQuery(
    ["music_playlist"],
    async () => {
      console.log("fetching ...");
      const result = await axios
        .get("http://localhost:3001/music_list")
        .then((res) => res.data)
        .catch((error) => {
          console.log("musiclist 가져오는 중 에러 발생", error);
        });
      console.log("??", result);
      return result;

      // 화면 변화에 관련된 것은 모두 state로 관리한다 ⭐
      // 그러므로, 나는 music list는 그냥 뿌려줄 수 있다.
      // music edit으로 가면, state 요소로 하나씩 저장해야한다. 그래야 delete를 하고, set을 변경할 수 있기 때문이다.
      // fetch(
      //   "https://my-json-server.typicode.com/HH-Notch/notch-api-mock/morning-block"
      // ).then((res) => res.json());
    },
    {
      staleTime: 1000 * 60 * 8,
    }
  );

  console.log("무직플레이리스트", music_playlist);
  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.toString()}</p>;

  return (
    <>
      {musicListMode && (
        <div className="w-full">
          <p> musicList</p>
          {music_playlist.map((item) => (
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
