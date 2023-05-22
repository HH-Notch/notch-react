import React, { useContext, useState } from "react";
import { MorningContext } from "../context/MorningContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function MusicEdit() {
  const { musicEditMode, goToDefault } = useContext(MorningContext);
  const [playlist, setPlaylist] = useState({
    name: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlaylist({ ...playlist, [name]: value });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    console.log(playlist);
  };
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
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  console.log("music", musicList);
  return (
    <>
      {" "}
      {musicEditMode && (
        <div className="w-full">
          <p> Music</p>
          <button onClick={() => goToDefault()}>닫기</button>

          {musicList.map((item) => (
            <div key={item.id} className="break-all">
              <p>{item.name}</p>
              <p> {item.link}</p>
              <button>삭제</button>
            </div>
          ))}

          <div>
            <form onSubmit={handleAdd}>
              <input
                name="name"
                type="text"
                value={playlist.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="link"
                value={playlist.link}
                onChange={handleChange}
              />
              <button>+</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
