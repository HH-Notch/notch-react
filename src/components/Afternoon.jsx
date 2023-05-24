import React, { useContext, useState } from "react";
import BlockItem from "./BlockItem";
import { ThemeProvider } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AfternoonContext } from "../context/AfternoonContext";

import StudyList from "../pages/StudyList";
import StudyEdit from "../pages/StudyEdit";

export default function Afternoon() {
  const {
    defaultMode,
    onDefaultMode,
    offDefaultMode,
    studyMusicListMode,
    onStudyMusicListMode,
    offStudyMusicListMode,
    studyMusicListEditMode,
    onStudyMusicListEditMode,
    offStudyMusicListEditMode,
    goToDefault,
    goToStudyMusicList,
    goToStudyMusicListEdit,
  } = useContext(AfternoonContext);

  const {
    isLoading,
    error,
    data: blockItems,
  } = useQuery(
    ["afternoon-blockItems"],
    async () => {
      console.log("🙇🏻‍♀️afternoon fetching ...🙇🏻‍♀️");
      const result = await axios
        .get("http://localhost:3001/afternoon-block")
        .then((res) => res.data);

      return result;
    },
    {
      staleTime: 10000 * 6 * 3,
      onSuccess: (data) => {
        const today_u = data[0];
        const studyMusic_u = data[1];
        const nap_u = data[2];

        const today_on = today_u.turn;
        const today_value = today_on ? true : false;
        setToday(today_value);

        const studyMusic_on = studyMusic_u.turn;
        const studyMusic_value = studyMusic_on ? true : false;
        setStudyMusic(studyMusic_value);

        const nap_on = nap_u.turn;
        const nap_value = nap_on ? true : false;
        setNap(nap_value);
      },
    }
  );

  const [today, setToday] = useState(true);
  const handleTodaySwitch = () => {
    const updatedState = !today;
    const turn_value = updatedState ? 1 : 0;

    axios
      .patch("http://localhost:3001/afternoon-block/1", {
        id: 1,
        turn: turn_value,
      })
      .then((res) => {
        console.log("서버응답", res.data);
        setToday(updatedState);
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  const [studyMusic, setStudyMusic] = useState(true);

  const handleStudyMusicSwitch = () => {
    const updatedState = !studyMusic;
    const turn_value = updatedState ? 1 : 0;

    axios
      .patch("http://localhost:3001/afternoon-block/2", {
        id: 2,
        turn: turn_value,
      })
      .then((res) => {
        console.log("서버응답", res.data);
        setStudyMusic(updatedState);
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  const [nap, setNap] = useState(true);
  const handleNapSwitch = () => {
    const updatedState = !nap;
    const turn_value = updatedState ? 1 : 0;

    axios
      .patch("http://localhost:3001/afternoon-block/3", {
        id: 3,
        turn: turn_value,
      })
      .then((res) => {
        console.log("서버응답", res.data);
        setNap(updatedState);
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  const customLabelTheme = {
    switch: {
      styles: {
        base: {
          root: {
            // blockItem CSS
            display: "flex",
            alignItems: "items-center",
          },
        },
      },
    },
  };

  const circleProps = {
    // 정확히는 circle에 대한 props다.
    className:
      "!bg-white  peer-checked:border-afternoon-strong peer-checked:before:bg-afternoon-strong checked:bg-afternoon-strong peer-checked:bg-afternoon-strong ",
  };

  const switchStyle =
    "checked:bg-afternoon-strong peer-checked:bg-afternoon-strong peer-checked:before:bg-afternoon-strong";
  // -- Switch component custom style

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.toString()}</p>;

  const today_b = blockItems[0];
  const studyMusic_b = blockItems[1];
  const nap_b = blockItems[2];

  return (
    <>
      {defaultMode ? (
        <>
          <div className="p-2">
            <ThemeProvider
              style={{ justifyContent: "space-between" }}
              value={customLabelTheme}
            >
              <BlockItem
                id={today_b.id + "-" + today_b.name}
                checked={today}
                onChangeFunc={handleTodaySwitch}
                text={today_b.text}
                // containerProps={containerProps}
                circleProps={circleProps}
                switchStyle={switchStyle}
              />
              <BlockItem
                id={studyMusic_b.id + "-" + studyMusic_b.name}
                checked={studyMusic}
                onChangeFunc={handleStudyMusicSwitch}
                text={studyMusic_b.text}
                // containerProps={containerProps}
                circleProps={circleProps}
                switchStyle={switchStyle}
                button={
                  <Button
                    className="mx-3"
                    variant="outlined"
                    size="sm"
                    ripple={true}
                    onClick={() => goToStudyMusicList()}
                  >
                    <p>✍🏻🎧</p>
                  </Button>
                }
              />
              <BlockItem
                id={nap_b.id + "-" + nap_b.name}
                checked={nap}
                onChangeFunc={handleNapSwitch}
                text={nap_b.text}
                circleProps={circleProps}
                switchStyle={switchStyle}
                // containerProps={containerProps}
              />
            </ThemeProvider>
          </div>
        </>
      ) : studyMusicListMode ? (
        <StudyList />
      ) : studyMusicListEditMode ? (
        <StudyEdit />
      ) : null}
    </>
  );
}
