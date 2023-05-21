import "./App.css";
import DateTime from "./components/DateTime";
import GoogleSearchBar from "./components/SearchBar";
import Morning from "./components/Morning";
import Block from "./components/Block";
import Profile from "./components/Profile";
import Afternoon from "./components/Afternoon";
import Night from "./components/Night";
// import ShortcutsDrawer from "./components/Drawer";
import { useState } from "react";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import ShortcutsDrawer from "./components/Drawer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import MusicList from "./pages/MusicList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "music_list",
        element: <MusicList />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
