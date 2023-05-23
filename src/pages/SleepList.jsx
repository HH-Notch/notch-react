import React, { useContext, useReducer } from "react";
import { NightContext } from "../context/NightContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import listReducer from "../reducer/list-reducer";

export default function SleepList() {
  const { sleepMusicListMode, goToDefault, goToSleepMusicListEdit } =
    useContext(NightContext);

  const initialState = [];

  const [list, dispatch] = useReducer(listReducer, initialState);

  const {
    isLoading,
    error,
    data: sleep_music_playlist,
  } = useQuery(
    ["sleep_music_playlist"],
    async () => {
      console.log("🎧 sleep music list fetching ... 🎧");
      const result = await axios
        .get("http://localhost:3001/sleep_music_list")
        .then((res) => res.data)
        .catch((error) => {
          console.log("musiclist 가져오는 중 에러 발생", error);
        });
      return result;
    },
    {
      // staleTime: 1000 * 60 * 8,
      onSuccess: (data) => {
        dispatch({
          type: "SET_LIST",
          payload: data,
        });
      },
      onError: () => console.log("슬립 뮤직 리스트 에러났스빈다요"),
    }
  );

  console.log("무직플레이리스트", sleep_music_playlist);
  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.toString()}</p>;

  return (
    <>
      {sleepMusicListMode && (
        <div className="w-full">
          <p> musicList</p>
          {list.map((item) => (
            <div key={item.id} className="break-all">
              <p>{item.name}</p>
              <p> {item.link}</p>
            </div>
          ))}
          <button onClick={() => goToDefault()}>닫기</button>
          <button onClick={() => goToSleepMusicListEdit()}>편집</button>
        </div>
      )}
    </>
  );
}
