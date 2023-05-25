import React, { useContext, useReducer } from "react";
import { MorningContext } from "../context/MorningContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import listReducer from "../reducer/list-reducer";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

export default function DestList() {
  const { destListMode, goToDefault, goToDestEdit } =
    useContext(MorningContext);
  const initialState = [];

  const [list, dispatch] = useReducer(listReducer, initialState);
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
        dispatch({
          type: "SET_LIST",
          payload: data,
        });

        // ⭐⭐⭐ list에서는 ui가 바뀌는 경우가 없기 때문에, 꼭 dispatch SET_LIST로 가지고 오지 않아도 될 것 같다 !
        // => 근데, cache 때문에 새로고침이 반영 안되는 이슈가 있어서 다시 reducer 적용함.
      },
      onError: () => console.log("데스트 리스트 에러났스빈다요"),
    }
  );

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.toString()}</p>;

  return (
    <>
      {destListMode && (
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
                <div key={item.id} className="break-all flex items-top pb-3">
                  <div>
                    <p className="font-semibold mr-2"> 🚩</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-base font-medium">{item.name}</p>
                    <p className="text-xs">{item.link}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className=" edit_button !shadow-md-strong "
              fullWidth
              onClick={() => goToDestEdit()}
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
