import React, { useContext, useState, useReducer } from "react";
import { MorningContext } from "../context/MorningContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import listReducer from "../reducer/list-reducer";

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
  return (
    <>
      {" "}
      {musicEditMode && (
        <div className="w-full">
          <p> Music</p>
          <button onClick={() => goToDefault()}>닫기</button>

          {list.map((item, index) => (
            <div key={index} className="break-all">
              <p>index: {index + 1}</p>
              <p>{item.name}</p>
              <p> {item.link}</p>
              <button onClick={() => handleListDelete(item.id)}>삭제</button>
            </div>
          ))}

          <div>
            <form onSubmit={handleListAdd}>
              <input
                name="name"
                type="text"
                value={playlist.name}
                onChange={handleChange}
                className="outlined"
              />
              <input
                type="text"
                name="link"
                value={playlist.link}
                onChange={handleChange}
                className="outlined"
              />
              <button>+</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
