import React, { useContext, useReducer } from "react";
import { NightContext } from "../context/NightContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import listReducer from "../reducer/list-reducer";
import { Link } from "react-router-dom";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import youtube_music_icon from "../assets/icons/youtube-music.svg";

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
              <p className="text-lg font-semibold">🎧 Sleeping Music List 🎧</p>
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
              onClick={() => goToSleepMusicListEdit()}
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
