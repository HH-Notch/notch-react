import React, { useContext, useState } from "react";
import BlockItem from "./BlockItem";
import { ThemeProvider } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AfternoonContext } from "../context/AfternoonContext";

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
    ["blockItems"],
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

  const containerProps = {
    className: "mr-2",
  };

  const labelProps = { className: "" };

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.toString()}</p>;

  const today_b = blockItems[0];
  const studyMusic_b = blockItems[1];
  const nap_b = blockItems[2];

  return (
    <>
      <ThemeProvider
        style={{ justifyContent: "space-between" }}
        value={customLabelTheme}
      >
        <BlockItem
          id={today_b.id}
          checked={today}
          onChangeFunc={handleTodaySwitch}
          text={today_b.text}
          containerProps={containerProps}
          labelProps={labelProps}
        />
        <BlockItem
          id={studyMusic_b.id}
          checked={studyMusic}
          onChangeFunc={handleStudyMusicSwitch}
          text={studyMusic_b.text}
          containerProps={containerProps}
          labelProps={labelProps}
          button={
            <Button
              className="mx-3"
              variant="outlined"
              size="sm"
              ripple={true}
              onClick={() => goToStudyMusicList()}
            >
              {studyMusic.toString()}스터디뮤직
            </Button>
          }
        />
        <BlockItem
          id={nap_b.id}
          checked={nap}
          onChangeFunc={handleNapSwitch}
          text={nap_b.text}
          containerProps={containerProps}
          labelProps={labelProps}
        />
      </ThemeProvider>
    </>
  );
}
