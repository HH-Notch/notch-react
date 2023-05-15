import React, { useState } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import BlockItem from "./BlockItem";
import { Switch } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import Block from "./Block";

export default function MorningBlock() {
  const [weather, setWeather] = useState({
    id: 1,
    text: "오늘의 날씨 알려주기",
    on: false,
  });
  const handleWeather = () => {
    console.log("weather.on", weather.on);
    setWeather((prev) => ({ ...prev, on: !prev.on }));
    console.log("제대로 됐는가?");
  };

  const [today, setToday] = useState({
    id: 2,
    text: "오늘 할 일 브리핑",
    on: false,
  });
  const handleToday = () => {
    console.log("today.on", today.on);
    setToday((prev) => ({ ...prev, on: !prev.on }));
  };

  const [destination, setDestination] = useState({
    id: 3,
    text: "가야 할 목적지 선택",
    on: false,
    desti_name: "",
    desti_address: "",
  });
  const handleDest = () => {
    console.log("destination.on", destination.on);
    setDestination((prev) => ({ ...prev, on: !prev.on }));
  };
  const [destOptions, setDestOptions] = useState([
    { name: "옵션 1", address: "주소 1" },
    { name: "옵션 2", address: "주소 2" },
    { name: "옵션 3", address: "주소 3" },
  ]);
  const handleDestOption = (event) => {
    const selectedIndex = event.target.selectedIndex;
    setDestination((prev) => ({
      ...prev,
      desti_name: destOptions[selectedIndex].name,
      desti_address: destOptions[selectedIndex].address,
    }));
    console.log("destination 값은?", destination);
  };

  const [findPath, setfindPath] = useState({
    id: 4,
    text: "집에서 나갈 때 목적지까지 길찾기",
    on: false,
  });
  const handleFindPath = () => {
    console.log("findPath.on", findPath.on);
    setfindPath((prev) => ({ ...prev, on: !prev.on }));
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

  return (
    <div className="flex flex-col justify-center  items-center m-5">
      <div className="mb-5">
        <span>☀ 아침 ☀</span>
      </div>
      <div
        className="aspect-square bg-orange-200  h-96 p-8"
        style={{ borderRadius: "30px" }}
      >
        {/* 오늘 할 일 브리핑 */}
        <ThemeProvider
          style={{ justifyContent: "space-between" }}
          value={customLabelTheme}
        >
          <BlockItem
            id="1"
            checked={weather.on}
            onChangeFunc={handleWeather}
            text={weather.text}
            containerProps={containerProps}
            labelProps={labelProps}
            // select_destination=""
          />
          <BlockItem
            id="2"
            checked={today.on}
            onChangeFunc={handleToday}
            text={today.text}
            containerProps={containerProps}
            labelProps={labelProps}
            // select_destination=""
          />
          <BlockItem
            id="3"
            checked={destination.on}
            onChangeFunc={handleDest}
            text={destination.text}
            containerProps={containerProps}
            labelProps={labelProps}
            select_destination=""
          />
          <BlockItem
            id="4"
            checked={findPath.on}
            onChangeFunc={handleFindPath}
            text={findPath.text}
            containerProps={containerProps}
            labelProps={labelProps}
            select_destination=""
          />
        </ThemeProvider>
      </div>
    </div>
  );
}
