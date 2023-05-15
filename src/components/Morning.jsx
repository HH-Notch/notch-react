import React, { useState } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import BlockItem from "./BlockItem";
import { Switch } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

export default function Morning() {
  const [today, setToday] = useState({
    id: 2,
    text: "오늘 할 일 브리핑",
    today_on: false,
  });
  const handleToday = () => {
    console.log("today.on", today.on);
    setToday((prev) => ({ ...prev, today_on: !prev.today_on }));
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
          <Switch
            ripple={today.on}
            onChange={handleToday}
            label={
              <div className="flex">
                <Typography color="blue-gray" variant="h6">
                  {today.text}
                </Typography>
              </div>
            }
            containerProps={containerProps}
            labelProps={labelProps}
          />
          ;
        </ThemeProvider>
      </div>
    </div>
  );
}

{
  /* <BlockItem
checked={weather.on}
onChangeFunc={handleWeather}
text={weather.text}
containerProps={{
  className: "mr-2",
}}
labelProps={{ className: "" }}
/>
<BlockItem
checked={today.on}
onChangeFunc={handleToday}
text={today.text}
containerProps={{
  className: "mr-2",
}}
labelProps={{ className: "" }}
/>

<BlockItem
checked={destination.on}
onChangeFunc={handleDest}
text={destination.text}
containerProps={{
  className: "mr-2",
}}
labelProps={{ className: "" }}
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
checked={findPath.on}
onChangeFunc={handleFindPath}
text={findPath.text}
containerProps={{
  className: "mr-2",
}}
labelProps={{ className: "" }}
/> */
}
