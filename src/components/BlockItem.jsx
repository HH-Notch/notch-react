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
      <div className="flex mb-4 items-center justify-between">
        <div className="flex items-center">
          <div className="flex">
            <p className="text-l font-medium">{text}</p>
          </div>
          {button}
        </div>

        <Switch
          id={id}
          checked={checked}
          onChange={onChangeFunc}
          circleProps={circleProps}
          className={switchStyle}
        />
      </div>
    </>
  );
}
