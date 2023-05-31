import React, { useContext, useReducer } from "react";
import { AfternoonContext } from "../context/AfternoonContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import listReducer from "../reducer/list-reducer";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import youtube_music_icon from "../assets/icons/youtube-music.svg";
import { Link } from "react-router-dom";

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
        .get(
          "http://ec2-13-124-90-246.ap-northeast-2.compute.amazonaws.com:8080/app/afternoonstudymusicList/?format=json"
        )
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
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-end !static">
            <Button
              className="!py-1 !px-0 !absolute"
              variant="text"
              color="blue-gray"
              onClick={() => goToDefault()}
            >
              <XMarkIcon strokeWidth={2} className="h-5 w-5 " />
            </Button>
          </div>

          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center justify-center ">
              <p className="text-lg font-semibold">🎧 Study Music List 🎧</p>
            </div>

            <div className="flex flex-col justify-between py-3">
              {list.map((item, index) => (
                <div
                  key={item.id}
                  className="break-all flex !leading-8 items-center "
                >
                  <Link to={item.link}>
                    <img
                      src={youtube_music_icon}
                      alt="metamask"
                      className="h-6 w-6 mr-4 button_animation"
                    />
                  </Link>
                  {/* <p className="font-semibold mr-2">{index + 1}.</p> */}

                  <p className="font-medium">{item.name}</p>
                </div>
              ))}
            </div>

            <Button
              className=" edit_button !shadow-md-strong "
              fullWidth
              onClick={() => goToStudyMusicListEdit()}
              color="gray"
            >
              <p className="text-white font-base !tracking-widest">Edit</p>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
