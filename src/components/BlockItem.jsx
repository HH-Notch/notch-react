import React from "react";
import { Switch } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

export default function BlockItem({
  id,
  checked,
  onChangeFunc,
  text,
  containerProps,
  circleProps,
  button,
  switchStyle,
}) {
  // console.log("checked는?", checked);
  return (
    <>
      <div className="flex mb-3 items-center justify-between">
        <div className="flex items-center">
          <div className="flex">
            <Typography color="blue-gray" variant="h6">
              {text}
            </Typography>
          </div>
          {button}
          {/* {switchStyle} */}
        </div>
        <Switch
          id={id}
          checked={checked}
          onChange={onChangeFunc}
          // containerProps={containerProps}
          circleProps={circleProps}
          className={switchStyle}

          // className="checked:bg-morning-strong peer-checked:bg-morning-strong peer-checked:before:bg-morning-strong"
          // className은 스위치에 대한것을 다룬다.
        />
      </div>
    </>
  );
}
