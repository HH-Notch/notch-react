import React, { useContext, useState, useReducer } from "react";
import { MorningContext } from "../context/MorningContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import listReducer from "../reducer/list-reducer";
import { Button } from "@material-tailwind/react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import { AiOutlinePlus } from "react-icons/ai";
import { ThemeProvider } from "@material-tailwind/react";
export default function DestEdit() {
  const { destEditMode, goToDefault } = useContext(MorningContext);
  const initialState = [];

  const [list, dispatch] = useReducer(listReducer, initialState);
  const [listItem, setListItem] = useState({
    name: "",
    link: "",
  });

  const {
    isLoading,
    error,
    data: dest_list,
  } = useQuery(
    ["dest_edit_playlist"],
    async () => {
      console.log("fetching ...");
      const result = await axios
        .get("http://localhost:3001/destination_list")
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
      onError: () => console.log("데스트 에딧 에러났스빈다요"),
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListItem({ ...listItem, [name]: value });
  };

  const handleListDelete = (id) => {
    axios
      .delete(`http://localhost:3001/destination_list/${id}`)
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
      "http://localhost:3001/destination_list",
      listItem
    );
    dispatch({
      type: "ADD_LIST",
      payload: {
        id: response.data.id,
        ...listItem,
      },
    });
    setListItem({
      name: "",
      link: "",
    });
  };

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.toString()}</p>;

  return (
    <>
      {destEditMode && (
        <>
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
                <p className="text-lg font-semibold">🚌 Destination List 🚌</p>
              </div>

              <div className="flex flex-col justify-between pt-3">
                {list.map((item, index) => (
                  <div
                    key={item.id}
                    className="break-all flex items-top justify-between pb-2"
                  >
                    <div className="flex ">
                      <div>
                        <p className="font-semibold mr-2"> 🚩</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-base font-medium">{item.name}</p>
                        <p className="text-xs">{item.link}</p>
                      </div>
                    </div>
                    <TrashIcon
                      className="button_animation trash_button"
                      onClick={() => handleListDelete(item.id)}
                    />
                  </div>
                ))}
              </div>

              <div className="relative flex flex-col w-full ">
                <form onSubmit={handleListAdd}>
                  <input
                    type="text"
                    placeholder="destination name"
                    name="name"
                    value={listItem.name}
                    onChange={handleChange}
                    className="list_input mb-1"
                  />
                  <input
                    type="text"
                    placeholder="destination address"
                    name="link"
                    value={listItem.link}
                    onChange={handleChange}
                    className="list_input"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    color="gray"
                    className="!absolute right-0 top-0 rounded edit_submit_button"
                    style={{
                      paddingTop: "0.4rem",
                      paddingBottom: "0.4rem",
                      marginTop: "0.1rem",
                      marginRight: "0.1rem",
                    }}
                  >
                    <AiOutlinePlus className="text-lg" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
