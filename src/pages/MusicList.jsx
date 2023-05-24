import React, { useContext } from "react";
import { MorningContext } from "../context/MorningContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import youtube_music_icon from "../assets/icons/youtube-music.svg";

import { Link } from "react-router-dom";
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
      console.log("🎧 music list fetching ... 🎧");
      const result = await axios
        .get("http://localhost:3001/music_list")
        .then((res) => res.data)
        .catch((error) => {
          console.log("musiclist 가져오는 중 에러 발생", error);
        });
      return result;

      // 화면 변화에 관련된 것은 모두 state로 관리한다 ⭐
      // 그러므로, 나는 music list는 그냥 뿌려줄 수 있다.
      // music edit으로 가면, state 요소로 하나씩 저장해야한다. 그래야 delete를 하고, set을 변경할 수 있기 때문이다.
    },
    {
      // staleTime: 1000 * 60 * 8,
    }
  );

  console.log("무직플레이리스트", music_playlist);
  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.toString()}</p>;

  return (
    <>
      {musicListMode && (
        <>
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-end !static">
              <Button
                className="!py-1 !px-0 !absolute"
                variant="text"
                color="blue-gray"
                onClick={() => goToDefault()}
              >
                <XMarkIcon strokeWidth={2} className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-col h-full justify-between">
              <div className="flex items-center justify-center ">
                <p className="text-xl">🎧 Music List 🎧</p>
              </div>

              <div className="flex flex-col justify-between py-3">
                {music_playlist.map((item, index) => (
                  <div
                    key={item.id}
                    className="break-all flex leading-10 items-center justify-center"
                  >
                    <p className="mr-2">{index + 1}.</p>
                    <p className="mx-2">{item.name}</p>
                    <Link to={item.link}>
                      <img
                        src={youtube_music_icon}
                        alt="metamask"
                        className="h-6 w-6"
                      />
                    </Link>
                  </div>
                ))}
              </div>

              <Button fullWidth onClick={() => goToMusicEdit()}>
                편집
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
