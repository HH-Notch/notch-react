import React, { useState, useContext, useEffect } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import BlockItem from "./BlockItem";
import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { MorningContext } from "../context/MorningContext";
import axios from "axios";

import { Switch } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

import MusicEdit from "../pages/MusicEdit";
import MusicList from "../pages/MusicList";
import DestList from "../pages/DestList";
import DestEdit from "../pages/DestEdit";
import { async } from "q";
export default function Morning() {
  const [weatherBrief, setWeatherBrief] = useState(false);
  const handleWeatherBrief = () => {
    setWeatherBrief((prev) => !prev);
  };

  const [today, setToday] = useState(true);
  const handleToday = () => {
    setToday((prev) => !prev);
  };

  const [playMusic, setPlayMusic] = useState(false);
  const handlePlayMusic = () => {
    setPlayMusic((prev) => !prev);
  };
  const [dest, setDest] = useState(true);
  const handleDest = () => {
    setDest((prev) => !prev);
  };

  useEffect(() => {
    console.log("🔥🔥🔥🔥🔥🔥");
    fetchData();
  }, []);
  const fetchData = async () => {
    const blocks = await axios
      .get("http://localhost:3001/morning-block")
      .then((res) => res.data);

    const weather_b = blocks[0];
    const todo_b = blocks[1];
    const music_b = blocks[2];
    const detination_b = blocks[3];
    const value = weather_b.turn;
    console.log("vv", value);

    const letsUpdate = value ? true : false;
    console.log("lets Update", letsUpdate);
    setWeatherBrief(letsUpdate);
    console.log("plz", weatherBrief.toString());
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
    className: "ml-2",
  };

  const labelProps = { className: "" };

  // 혜선
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
      console.log("fetching ...");
      return axios
        .get("http://localhost:3001/morning-block")
        .then((res) => res.data);
    },
    {
      staleTime: 10000 * 6 * 3,
    }
  );

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error}</p>;

  console.log(blockItems);
  console.log("weatherBrief : ", weatherBrief.toString());

  const weather = blockItems[0];
  const todo = blockItems[1];
  const music = blockItems[2];
  const destination = blockItems[3];
  // console.log(weather_b, todo_b, music_b, detination_b);

  const handleChangeSwitch = () => {
    console.log("switch를 change 하고 싶습니다.");
    console.log("현재 get해서 가지고 온 weather의 turn값은", weather.turn);
    console.log("잘은 모르겠지만 weatherBrief의 turn 값은", weatherBrief);
    const updatedWeatherBrief = !weatherBrief;
    const turn_value = updatedWeatherBrief ? 1 : 0;

    console.log("turn_value", turn_value);

    axios
      .patch("http://localhost:3001/morning-block/1", {
        id: 1,
        name: "plz",
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

  const handlePatchData = () => {
    const turn_value = weatherBrief ? 1 : 0;
    console.log("turn_value", turn_value);
    axios
      .patch("http://localhost:3001/morning-block/1", {
        id: 1,
        name: "왜안되는겨",
        turn: turn_value,
      })
      .then((res) => {
        console.log("서버 응답", res.data);
        handleWeatherBrief();
        console.log("1");
        // 업데이트된 데이터를 처리하거나 상태를 업데이트할 수 있습니다.
      })
      .catch((error) => {
        console.log("에러", error);
        // 에러 처리를 할 수 있습니다.
      });
  };
  // const handleChangeSwitch = async () => {
  //   console.log("handleChangeSwitch 올 때 turn", weatherBrief.on);
  //   let turn = 0;
  //   weatherBrief ? (turn = 0) : (turn = 1);
  //   axios
  //     .patch("http://localhost:3001/morning-block/1", {
  //       id: 1,
  //       turn: turn,
  //     })
  //     .then((res) => {
  //       console.log("바뀐 turn", turn);
  //       console.log("서버응답", res.data);
  //       setWeatherBrief((prev) => ({ ...prev, on: !prev.on }));
  //       console.log("바뀐 on", weatherBrief.on);
  //       console.log("weatherBrief는?", weatherBrief);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // };

  return (
    <>
      {defaultMode ? (
        <>
          {/* <p>default Mode : {defaultMode.toString()}</p>
          <p>musicList Mode : {musicListMode.toString()}</p>
          <p>musicEdit Mode : {musicEditMode.toString()}</p>
          <p>destList Mode : {destListMode.toString()}</p>
          <p>destEdit Mode : {destEditMode.toString()}</p> */}
          <div>오 안나와 </div>
          <div>
            {blockItems.map((item) => (
              <div key={item.id}>
                <p>Text : {item.text}</p>
                <p>Turn: {item.turn}</p>
                <MusicList items={item.playlists} />
                {/* <p> {item.dest_list}</p> */}
                {/* <p>{item.playlists}</p> */}
              </div>
            ))}
            <p>{("weatherBrief 궁그매", weatherBrief.toString())}</p>
          </div>
          {/* 오늘 할 일 브리핑 */}
          <ThemeProvider
            // style={{ justifyContent: "space-between" }}
            value={customLabelTheme}
          >
            <>
              <div className="flex mb-3 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex">
                    <Typography color="blue-gray" variant="h6">
                      {weather.text}
                    </Typography>
                  </div>
                </div>
                <Switch
                  id={weather.id}
                  checked={weatherBrief}
                  onChange={handleChangeSwitch}
                  containerProps={containerProps}
                  labelProps={labelProps}
                />
              </div>
            </>
            {/* <BlockItem
              id={weather.id}
              checked={weatherBrief}
              onChangeFunc={handleChangeSwitch}
              text={weather.text}
              containerProps={containerProps}
              labelProps={labelProps}
            /> */}
            <BlockItem
              id={todo.id}
              checked={todo}
              onChangeFunc={handleToday}
              text={todo.text}
              containerProps={containerProps}
              labelProps={labelProps}
              // select_destination=""
            />
            <BlockItem
              id={destination.id}
              checked={dest}
              onChangeFunc={handleDest}
              text={destination.text}
              containerProps={containerProps}
              labelProps={labelProps}
              button={
                <Button
                  className="mx-3"
                  variant="outlined"
                  size="sm"
                  ripple={true}
                  onClick={() => goToDestList()}
                >
                  dest
                </Button>
              }
            />
            <BlockItem
              id={music.id}
              checked={playMusic}
              onChangeFunc={handlePlayMusic}
              text={music.text}
              containerProps={containerProps}
              labelProps={labelProps}
              button={
                <Button
                  className="mx-3"
                  variant="outlined"
                  size="sm"
                  ripple={true}
                  onClick={() => goToMusicList()}
                >
                  music
                </Button>
              }
            />
          </ThemeProvider>
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
