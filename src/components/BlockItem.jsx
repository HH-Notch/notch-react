import React from "react";
import { Switch } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

export default function BlockItem({
  id,
  checked,
  onChangeFunc,
  text,
  containerProps,
  labelProps,
  list_button,
}) {
  return (
    <>
      <div className="flex mb-3 items-center justify-between">
        <div className="flex items-center">
          <div className="flex">
            <Typography color="blue-gray" variant="h6">
              {text}
            </Typography>
          </div>
          {list_button}
        </div>
        <Switch
          id={id}
          checked={checked}
          onChange={onChangeFunc}
          label={<></>}
          containerProps={containerProps}
          labelProps={labelProps}
        />
      </div>
    </>
  );
}
