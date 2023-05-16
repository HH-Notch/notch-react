import React, { useState } from "react";
import BlockItem from "./BlockItem";
import { ThemeProvider } from "@material-tailwind/react";

export default function Afternoon() {
  const [today, setToday] = useState({
    id: "after-1",
    text: "오늘 할일 목록 알려주기",
    on: false,
  });
  const handleToday = () => {
    console.log("today.on", today.on);
    setToday((prev) => ({ ...prev, on: !prev.on }));
  };

  const [whiteNoise, setWhiteNoise] = useState({
    id: "after-2",
    text: "백색소음 재생",
    on: false,
  });
  const handleWhiteNoise = () => {
    console.log("whiteNoise.on", whiteNoise.on);
    setWhiteNoise((prev) => ({ ...prev, on: !prev.on }));
    console.log("제대로 됐는가?");
  };

  const [nap, setNap] = useState({
    id: "after-3",
    text: "낮잠용 브레이너제이 재생",
    on: false,
  });
  const handleNap = () => {
    console.log("nap.on", nap.on);
    setNap((prev) => ({ ...prev, on: !prev.on }));
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
      <ThemeProvider
        style={{ justifyContent: "space-between" }}
        value={customLabelTheme}
      >
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
          id={whiteNoise.id}
          checked={whiteNoise.on}
          onChangeFunc={handleWhiteNoise}
          text={whiteNoise.text}
          containerProps={containerProps}
          labelProps={labelProps}
          // select_destination=""
        />
        <BlockItem
          id={nap.id}
          checked={nap.on}
          onChangeFunc={handleNap}
          text={nap.text}
          containerProps={containerProps}
          labelProps={labelProps}
          // select_destination=""
        />
      </ThemeProvider>
    </>
  );
}
