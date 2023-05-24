import React, { useContext, useState, useReducer } from "react";
import { MorningContext } from "../context/MorningContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import listReducer from "../reducer/list-reducer";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import { AiOutlinePlus } from "react-icons/ai";
import youtube_music_icon from "../assets/icons/youtube-music.svg";
import { ThemeProvider } from "@material-tailwind/react";

export default function MusicEdit() {
  const { musicEditMode, goToDefault } = useContext(MorningContext);

  const initialState = [];

  const [list, dispatch] = useReducer(listReducer, initialState);
  const [playlist, setPlaylist] = useState({
    name: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlaylist({ ...playlist, [name]: value });
  };

  const handleListDelete = (id) => {
    console.log("lets delete");
    axios
      .delete(`http://localhost:3001/music_list/${id}`)
      .then((res) => {
        // dispatch 사용해서 상태관리
        dispatch({
          type: "REMOVE_LIST",
          id,
        });
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  const handleListAdd = async (e) => {
    e.preventDefault();
    console.log("lets add");
    const response = await axios.post(
      "http://localhost:3001/music_list",
      playlist
    );
    dispatch({
      type: "ADD_LIST",
      payload: {
        id: response.data.id,
        ...playlist,
      },
    });
    setPlaylist({
      name: "",
      link: "",
    });
  };

  const {
    isLoading,
    error,
    data: music_lists,
  } = useQuery(
    ["music_edit_playlist"],
    async () => {
      console.log("fetching ...");
      const result = await axios
        .get("http://localhost:3001/music_list")
        .then((res) => res.data)
        .catch((error) => {
          console.log("musiclist 가져오는 중 에러 발생", error);
        });
      return result;
    },
    {
      onSuccess: (data) => {
        dispatch({
          type: "SET_LIST",
          payload: data,
        });
      },
      onError: () => console.log("뮤직 에딧 에러났스빈다요"),
    }
  );

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.toString()}</p>;
  console.log("list", list);

  const customLabelTheme = {
    input: {
      styles: {
        base: {},
        shrink: {
          input: { color: "white" },
          label: { color: "pink" },
        },
      },
    },
  };

  return (
    <>
      {" "}
      {musicEditMode && (
        <>
          <ThemeProvider value={customLabelTheme}>
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
                  <p className="text-lg font-semibold">🎧 Music Edit 🎧</p>
                </div>

                <div className="flex flex-col justify-between py-3">
                  {list.map((item, index) => (
                    <div
                      key={item.id}
                      className="break-all flex leading-8 items-center"
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

                      <TrashIcon
                        className="h-5 w-5 gray"
                        onClick={() => handleListDelete(item.id)}
                      />

                      {/* <button onClick={() => handleListDelete(item.id)}>
                      삭제
                    </button> */}
                    </div>
                  ))}
                </div>
                {/* //인풋 */}
                <div className="relative flex flex-col w-full ">
                  {/* max-w-[24rem] */}
                  <form onSubmit={handleListAdd}>
                    <input
                      type="text"
                      placeholder="playlist name"
                      name="name"
                      value={playlist.name}
                      onChange={handleChange}
                      className=" border border-gray-300 hover:border-gray-400 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray rounded-md py-1 px-4 block w-full appearance-none leading-normal bg-opacity-70 bg-white placeholder:italic placeholder-gray-400 placeholder-opacity-80 mb-1"
                    />
                    <input
                      type="url"
                      placeholder="youtube music link"
                      name="link"
                      value={playlist.link}
                      onChange={handleChange}
                      className=" border border-gray-300 hover:border-gray-400 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray rounded-md py-1 px-4 block w-full appearance-none leading-normal bg-opacity-70 bg-white placeholder:italic placeholder-gray-400 placeholder-opacity-80"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      color="gray"
                      className="!absolute right-0 top-0 rounded "
                    >
                      <AiOutlinePlus className="text-lg" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </ThemeProvider>
        </>
      )}
    </>
  );
}
