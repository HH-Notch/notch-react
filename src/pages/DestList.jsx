import React, { useContext, useReducer } from "react";
import { MorningContext } from "../context/MorningContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function DestList() {
  const { destListMode, goToDefault, goToDestEdit } =
    useContext(MorningContext);

  const {
    isLoading,
    error,
    data: dest_list,
  } = useQuery(
    ["dest_list"],
    async () => {
      console.log("🎧 dest list fetching ... 🎧");
      const result = await axios
        .get("http://localhost:3001/destination_list")
        .then((res) => res.data)
        .catch((error) => {
          console.log("destlist 가져오는 중 에러 발생", error);
        });
      console.log("야호호", result);
      return result;
    },
    {
      onSuccess: (data) => {
        console.log("onsuccess이긴하니?");
        // dispatch({
        //   type: "SET_LIST",
        //   payload: data,
        // });
      },
      onError: () => console.log("데스트 리스트 에러났스빈다요"),
    }
  );

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.toString()}</p>;

  return (
    <>
      {destListMode && (
        <div className="w-full">
          <p> DestList</p>

          {dest_list.map((item, index) => (
            <div key={item.id} className="break-all">
              <p>index: {index + 1}</p>
              <p>{item.name}</p>
              <p> {item.link}</p>
            </div>
          ))}

          <button onClick={() => goToDefault()}>닫기</button>
          <button onClick={() => goToDestEdit()}>편집</button>
        </div>
      )}
    </>
  );
}
