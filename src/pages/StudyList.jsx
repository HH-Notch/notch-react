import React, { useContext, useReducer } from "react";
import { AfternoonContext } from "../context/AfternoonContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import listReducer from "../reducer/list-reducer";

export default function StudyList() {
  const { studyMusicListMode, goToDefault, goToStudyMusicListEdit } =
    useContext(AfternoonContext);

  const initialState = [];

  const [list, dispatch] = useReducer(listReducer, initialState);

  const {
    isLoading,
    error,
    data: study_music_playlist,
  } = useQuery(
    ["study_music_playlist"],
    async () => {
      console.log("🎧 study music list fetching ... 🎧");
      const result = await axios
        .get("http://localhost:3001/study_music_list")
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
      onError: () => console.log("스터디 뮤직 리스트 에러났스빈다요"),
    }
  );

  console.log("무직플레이리스트", study_music_playlist);
  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.toString()}</p>;

  return (
    <>
      {studyMusicListMode && (
        <div className="w-full">
          <p> musicList</p>
          {list.map((item) => (
            <div key={item.id} className="break-all">
              <p>{item.name}</p>
              <p> {item.link}</p>
            </div>
          ))}
          <button onClick={() => goToDefault()}>닫기</button>
          <button onClick={() => goToStudyMusicListEdit()}>편집</button>
        </div>
      )}
    </>
  );
}
