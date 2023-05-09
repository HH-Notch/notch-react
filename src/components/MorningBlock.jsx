import React, { useState } from "react";
import { Switch, ThemeProvider } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

export default function MorningBlock() {
  const [todayTodo, setTodayTodo] = useState(false);

  const handleTodayTodo = () => {
    console.log(todayTodo);
    setTodayTodo(!todayTodo);
  };

  const customLabelTheme = {
    switch: {
      styles: {
        base: {
          root: {
            display: "flex",
            alignItems: "items-center",
            flexDirection: "flex-row-reverse",
            justifyContent: "space-between",
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center m-5">
      <div className="mb-5">
        <span>☀ 아침 ☀</span>
      </div>
      <div
        className="aspect-square bg-orange-200  h-96 p-8"
        style={{ borderRadius: "30px" }}
      >
        <ThemeProvider value={customLabelTheme}>
          <Switch
            checked={todayTodo}
            onChange={handleTodayTodo}
            label={
              <div>
                <Typography color="blue-gray" variant="h6">
                  오늘 할일 브리핑
                </Typography>
              </div>
            }
            containerProps={{
              className: "mr-2",
            }}
            labelProps={{ className: "" }}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}
