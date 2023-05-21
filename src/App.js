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
import Welcome from "./pages/Welcome";

import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import MusicList from "./pages/MusicList";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen ">
        <Welcome />
      </div>
    </>
  );
}

export default App;
