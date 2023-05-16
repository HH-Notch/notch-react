import React, { useState } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import BlockItem from "./BlockItem";

export default function Morning() {
  const [weather, setWeather] = useState({
    id: "mor-1",
    text: "오늘의 날씨 알려주기",
    on: false,
  });
  const handleWeather = () => {
    console.log("weather.on", weather.on);
    setWeather((prev) => ({ ...prev, on: !prev.on }));
    console.log("제대로 됐는가?");
  };

  const [today, setToday] = useState({
    id: "mor-2",
    text: "오늘 할 일 브리핑",
    on: false,
  });
  const handleToday = () => {
    console.log("today.on", today.on);
    setToday((prev) => ({ ...prev, on: !prev.on }));
  };

  const [destination, setDestination] = useState({
    id: "mor-3",
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
    id: "mor-4",
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
    <>
      {/* 오늘 할 일 브리핑 */}
      <ThemeProvider
        style={{ justifyContent: "space-between" }}
        value={customLabelTheme}
      >
        <BlockItem
          id={weather.id}
          checked={weather.on}
          onChangeFunc={handleWeather}
          text={weather.text}
          containerProps={containerProps}
          labelProps={labelProps}
          // select_destination=""
        />
        <BlockItem
          id={today.id}
          checked={today.on}
          onChangeFunc={handleToday}
          text={today.text}
          containerProps={containerProps}
          labelProps={labelProps}
          // select_destination=""
        />
        <BlockItem
          id={destination.id}
          checked={destination.on}
          onChangeFunc={handleDest}
          text={destination.text}
          containerProps={containerProps}
          labelProps={labelProps}
          select_destination={
            <div>
              <select onChange={handleDestOption}>
                {destOptions.map((option, index) => (
                  <option
                    key={index}
                  >{`${option.name}-${option.address}`}</option>
                ))}
              </select>
            </div>
          }
        />
        <BlockItem
          id={findPath.id}
          checked={findPath.on}
          onChangeFunc={handleFindPath}
          text={findPath.text}
          containerProps={containerProps}
          labelProps={labelProps}
          select_destination=""
        />
      </ThemeProvider>
    </>
  );
}
