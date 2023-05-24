import React, { useState, useContext } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import BlockItem from "./BlockItem";
import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { MorningContext } from "../context/MorningContext";
import axios from "axios";

import MusicEdit from "../pages/MusicEdit";
import MusicList from "../pages/MusicList";
import DestList from "../pages/DestList";
import DestEdit from "../pages/DestEdit";
export default function Morning() {
  const {
    defaultMode,
    onDefaultMode,
    offDefaultMode,
    musicListMode,
    onMusicListMode,
    offMusicListMode,
    musicEditMode,
    onMusicEditMode,
    offMusicEditMode,
    destListMode,
    onDestListMode,
    offDestListMode,
    destEditMode,
    onDestEditMode,
    offDestEditMode,
    goToDefault,
    goToMusicList,
    goToMusicEdit,
    goToDestList,
    goToDestEdit,
  } = useContext(MorningContext);

  const {
    isLoading,
    error,
    data: blockItems,
  } = useQuery(
    ["blockItems"],
    async () => {
      console.log("🙇🏻‍♀️fetching ...🙇🏻‍♀️");
      const result = await axios
        .get("http://localhost:3001/morning-block")
        .then((res) => res.data);

      return result;
    },
    {
      staleTime: 10000 * 6 * 3,
      onSuccess: (data) => {
        const weather_u = data[0];
        const todo_u = data[1];
        const music_u = data[2];
        const destination_u = data[3];

        const weather_on = weather_u.turn;
        const weather_value = weather_on ? true : false;
        setWeatherBrief(weather_value);

        const todo_on = todo_u.turn;
        const todo_value = todo_on ? true : false;
        setToday(todo_value);

        const music_on = music_u.turn;
        const music_value = music_on ? true : false;
        setPlayMusic(music_value);

        const destination_on = destination_u.turn;
        const destination_value = destination_on ? true : false;
        setDest(destination_value);
      },
    }
  );
  const [weatherBrief, setWeatherBrief] = useState(false);
  const handleWeatherBrief = () => {
    setWeatherBrief((prev) => !prev);
  };
  const handleWeatherSwitch = () => {
    const updatedWeatherBrief = !weatherBrief;
    const turn_value = updatedWeatherBrief ? 1 : 0;

    axios
      .patch("http://localhost:3001/morning-block/1", {
        id: 1,
        turn: turn_value,
      })
      .then((res) => {
        console.log("서버응답", res.data);
        setWeatherBrief(updatedWeatherBrief);
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  const [today, setToday] = useState(true);
  const handleTodaySwitch = () => {
    const updatedState = !today;
    const turn_value = updatedState ? 1 : 0;

    axios
      .patch("http://localhost:3001/morning-block/2", {
        id: 2,
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

  const [playMusic, setPlayMusic] = useState(false);

  const handleMusicSwitch = () => {
    const updatedState = !playMusic;
    const turn_value = updatedState ? 1 : 0;

    axios
      .patch("http://localhost:3001/morning-block/3", {
        id: 3,
        turn: turn_value,
      })
      .then((res) => {
        console.log("서버응답", res.data);
        setPlayMusic(updatedState);
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  const [dest, setDest] = useState(true);
  const handleDestSwitch = () => {
    const updatedState = !dest;
    const turn_value = updatedState ? 1 : 0;

    axios
      .patch("http://localhost:3001/morning-block/4", {
        id: 4,
        turn: turn_value,
      })
      .then((res) => {
        console.log("서버응답", res.data);
        setDest(updatedState);
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  //  Switch component custom style
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
      "!bg-white  peer-checked:border-morning-strong peer-checked:before:bg-morning-strong checked:bg-morning-strong peer-checked:bg-morning-strong bg-zinic border-zinic before:bg-zinic !shadow-md-strong",
  };

  const switchStyle =
    "checked:bg-morning-strong peer-checked:bg-morning-strong peer-checked:before:bg-morning-strong bg-zinic";
  // -- Switch component custom style

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.toString()}</p>;

  const weather = blockItems[0];
  const todo = blockItems[1];
  const music = blockItems[2];
  const destination = blockItems[3];

  return (
    <>
      {defaultMode ? (
        <>
          {/* 오늘 할 일 브리핑 */}
          <div className="p-2">
            <ThemeProvider
              // style={{ justifyContent: "space-between" }}
              value={customLabelTheme}
            >
              <BlockItem
                id={weather.id + "-" + weather.name}
                checked={weatherBrief}
                onChangeFunc={handleWeatherSwitch}
                text={weather.text}
                // containerProps={containerProps}
                circleProps={circleProps}
                switchStyle={switchStyle}
              />
              <BlockItem
                id={todo.id + "-" + todo.name}
                checked={today}
                onChangeFunc={handleTodaySwitch}
                text={todo.text}
                // containerProps={containerProps}
                circleProps={circleProps}
                switchStyle={switchStyle}
              />

              <BlockItem
                id={music.id + "-" + music.name}
                checked={playMusic}
                onChangeFunc={handleMusicSwitch}
                text={music.text}
                // containerProps={containerProps}
                circleProps={circleProps}
                switchStyle={switchStyle}
                button={
                  <Button
                    className="mx-3 !bg-white !border-zinic !bg-opacity-60 !shadow-md-strong pt-[4px] !pb-[4px] !px-4  button_animation h-9"
                    variant="outlined"
                    size="sm"
                    ripple={true}
                    onClick={() => goToMusicList()}
                  >
                    <p className="text-base">🎧</p>
                  </Button>
                }
              />
              <BlockItem
                id={destination.id + "-" + destination.name}
                checked={dest}
                onChangeFunc={handleDestSwitch}
                text={destination.text}
                // containerProps={containerProps}
                circleProps={circleProps}
                switchStyle={switchStyle}
                button={
                  <Button
                    className="mx-3 h-9 !bg-white !border-zinic !pt-[2px] !pb-[5px] !px-4 !bg-opacity-60 !shadow-md-strong button_animation"
                    variant="outlined"
                    size="sm"
                    ripple={true}
                    onClick={() => goToDestList()}
                  >
                    <p className="text-lg">🚌</p>
                  </Button>
                }
              />
            </ThemeProvider>
          </div>
        </>
      ) : musicListMode ? (
        <MusicList />
      ) : musicEditMode ? (
        <MusicEdit />
      ) : destListMode ? (
        <DestList />
      ) : destEditMode ? (
        <DestEdit />
      ) : null}
    </>
  );
}
