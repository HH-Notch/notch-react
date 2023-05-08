import React, { useEffect, useState } from "react";

export default function DateTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }
  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
      <h1>{date.toLocaleDateString()}</h1>
    </div>
  );
}
