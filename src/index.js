import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";
import Root from "./pages/Root";

import GoodMorning from "./pages/shorcuts/GoodMorning";
import LetsGo from "./pages/shorcuts/LetsGo";
import HowToUse from "./pages/shorcuts/HowToUse";
import BrainerJay from "./pages/shorcuts/BrainerJay";
import Diary from "./pages/shorcuts/Diary";
import HowWasDay from "./pages/shorcuts/HowWasDay";
import Nap from "./pages/shorcuts/Nap";
import StudyMusic from "./pages/shorcuts/StudyMusic";
import TodayReminder from "./pages/shorcuts/TodayReminder";
import TurnOnMusic from "./pages/shorcuts/TurnOnMusic";
import WhatIsPrepareNextDay from "./pages/shorcuts/WhatIsPrepareNextDay";
import YapToday from "./pages/shorcuts/YapToday";
import WhenHaveToSleep from "./pages/shorcuts/WhenHaveToSleep";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "home",
        element: <Root />,
        children: [
          {
            index: true,
            element: <HowToUse />,
          },
          {
            path: "goodmorning",
            element: <GoodMorning />,
          },
          {
            path: "letsGo",
            element: <LetsGo />,
          },
          {
            path: "brainerJay",
            element: <BrainerJay />,
          },
          {
            path: "diary",
            element: <Diary />,
          },
          {
            path: "how_was_day",
            element: <HowWasDay />,
          },
          {
            path: "nap",
            element: <Nap />,
          },
          {
            path: "study_music",
            element: <StudyMusic />,
          },
          {
            path: "today_reminder",
            element: <TodayReminder />,
          },
          {
            path: "turn_on_music",
            element: <TurnOnMusic />,
          },
          {
            path: "prepare_next_day",
            element: <WhatIsPrepareNextDay />,
          },
          {
            path: "sleep_time_calculator",
            element: <WhenHaveToSleep />,
          },
          {
            path: "yap_today",
            element: <YapToday />,
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
