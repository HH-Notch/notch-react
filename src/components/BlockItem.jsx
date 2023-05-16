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
  select_destination,
  select_brainer,
}) {
  return (
    <Switch
      id={id}
      checked={checked}
      onChange={onChangeFunc}
      label={
        <div className="flex">
          <Typography color="blue-gray" variant="h6">
            {text}
          </Typography>
          {select_destination}
          {select_brainer}
        </div>
      }
      containerProps={containerProps}
      labelProps={labelProps}
    />
  );
}
