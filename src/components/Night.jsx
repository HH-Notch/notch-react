import React, { useState, useContext } from "react";
import BlockItem from "./BlockItem";
import { ThemeProvider } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NightContext } from "../context/NightContext";

import SleepList from "../pages/SleepList";
import SleepEdit from "../pages/SleepEdit";

import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

export default function Night() {
  const {
    defaultMode,
    onDefaultMode,
    offDefaultMode,
    sleepMusicListMode,
    onSleepMusicListMode,
    offSleepMusicListMode,
    sleepMusicListEditMode,
    onSleepMusicListEditMode,
    offSleepMusicListEditMode,
    goToDefault,
    goToSleepMusicList,
    goToSleepMusicListEdit,
  } = useContext(NightContext);

  const {
    isLoading,
    error,
    data: blockItems,
  } = useQuery(
    ["night-blockItems"],
    async () => {
      console.log("🙇🏻‍♀️night fetching ...🙇🏻‍♀️");
      const result = await axios
        .get("http://localhost:3001/night-block")
        .then((res) => res.data);

      return result;
    },
    {
      staleTime: 10000 * 6 * 3,
      onSuccess: (data) => {
        const health_u = data[0];
        const todayFeedback_u = data[1];
        const tomoBrief_u = data[2];
        const diary_u = data[3];
        const brainer_u = data[4];

        const health_on = health_u.turn;
        const health_value = health_on ? true : false;
        setHealth(health_value);

        const todayFeedback_on = todayFeedback_u.turn;
        const todayFeedback_value = todayFeedback_on ? true : false;
        setTodayFeedback(todayFeedback_value);

        const tomoBrief_on = tomoBrief_u.turn;
        const tomoBrief_value = tomoBrief_on ? true : false;
        setTomoBrief(tomoBrief_value);

        const diary_on = diary_u.turn;
        const diary_value = diary_on ? true : false;
        setDiary(diary_value);

        const brainer_on = brainer_u.turn;
        const brainer_value = brainer_on ? true : false;
        setBrainer(brainer_value);
      },
    }
  );
  const [health, setHealth] = useState(true);
  const handleHealthSwitch = () => {
    const updatedState = !health;
    const turn_value = updatedState ? 1 : 0;

    axios
      .patch("http://localhost:3001/night-block/1", {
        id: 1,
        turn: turn_value,
      })
      .then((res) => {
        console.log("서버응답", res.data);
        setHealth(updatedState);
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  const [todayFeedback, setTodayFeedback] = useState(true);

  const handleTodayFeedbackSwitch = () => {
    const updatedState = !todayFeedback;
    const turn_value = updatedState ? 1 : 0;

    axios
      .patch("http://localhost:3001/night-block/2", {
        id: 2,
        turn: turn_value,
      })
      .then((res) => {
        console.log("서버응답", res.data);
        setTodayFeedback(updatedState);
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  const [tomoBrief, setTomoBrief] = useState(true);

  const handleTomoBriefSwitch = () => {
    const updatedState = !tomoBrief;
    const turn_value = updatedState ? 1 : 0;

    axios
      .patch("http://localhost:3001/night-block/3", {
        id: 3,
        turn: turn_value,
      })
      .then((res) => {
        console.log("서버응답", res.data);
        setTomoBrief(updatedState);
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  const [diary, setDiary] = useState(true);

  const handleDiarySwitch = () => {
    const updatedState = !diary;
    const turn_value = updatedState ? 1 : 0;

    axios
      .patch("http://localhost:3001/night-block/4", {
        id: 4,
        turn: turn_value,
      })
      .then((res) => {
        console.log("서버응답", res.data);
        setDiary(updatedState);
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  const [brainer, setBrainer] = useState(true);

  const handleBrainerSwitch = () => {
    const updatedState = !brainer;
    const turn_value = updatedState ? 1 : 0;

    axios
      .patch("http://localhost:3001/night-block/5", {
        id: 5,
        turn: turn_value,
      })
      .then((res) => {
        console.log("서버응답", res.data);
        setBrainer(updatedState);
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
            flexDirection: "flex-row-reverse",
            justifyContent: "justify-between",
            marginBottom: "mb-3",
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

  const health_b = blockItems[0];
  const todayFeedback_b = blockItems[1];
  const tomoBrief_b = blockItems[2];
  const diary_b = blockItems[3];
  const brainer_b = blockItems[4];

  return (
    <>
      {defaultMode ? (
        <>
          <ThemeProvider
            style={{ justifyContent: "space-between" }}
            value={customLabelTheme}
          >
            <BlockItem
              id={health_b.id + "-" + health_b.name}
              checked={health}
              onChangeFunc={handleHealthSwitch}
              text={health_b.text}
              containerProps={containerProps}
              labelProps={labelProps}
            />
            <BlockItem
              id={todayFeedback_b.id + "-" + todayFeedback_b.name}
              checked={todayFeedback}
              onChangeFunc={handleTodayFeedbackSwitch}
              text={todayFeedback_b.text}
              containerProps={containerProps}
              labelProps={labelProps}
            />
            <BlockItem
              id={tomoBrief_b.id + "-" + tomoBrief_b.name}
              checked={tomoBrief}
              onChangeFunc={handleTomoBriefSwitch}
              text={tomoBrief_b.text}
              containerProps={containerProps}
              labelProps={labelProps}
            />
            <BlockItem
              id={diary_b.id + "-" + diary_b.name}
              checked={diary}
              onChangeFunc={handleDiarySwitch}
              text={diary_b.text}
              containerProps={containerProps}
              labelProps={labelProps}
            />
            <BlockItem
              id={brainer_b.id + "-" + brainer_b.name}
              checked={brainer}
              onChangeFunc={handleBrainerSwitch}
              text={brainer_b.text}
              containerProps={containerProps}
              labelProps={labelProps}
              button={
                <Button
                  className="mx-3"
                  variant="outlined"
                  size="sm"
                  ripple={true}
                  onClick={() => goToSleepMusicList()}
                >
                  <p>😴</p>
                </Button>
              }
            />
          </ThemeProvider>
        </>
      ) : sleepMusicListMode ? (
        <SleepList />
      ) : sleepMusicListEditMode ? (
        <SleepEdit />
      ) : null}
    </>
  );
}
