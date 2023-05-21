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
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import { useEffect } from "react";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <div
        className="w-screen h-screen p-5"
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        <Outlet />
      </div>
    </>
  );
}

export default App;
