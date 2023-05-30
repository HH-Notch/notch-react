import React from "react";
import DateTime from "../components/DateTime";
import GoogleSearchBar from "../components/SearchBar";
import Morning from "../components/Morning";
import Block from "../components/Block";
import Profile from "../components/Profile";
import Afternoon from "../components/Afternoon";
import Night from "../components/Night";
import { useState } from "react";
import ShortcutsDrawer from "./Drawer";
import { MorningProvider } from "../context/MorningContext";
import { AfternoonProvider } from "../context/AfternoonContext";
import { NightProvider } from "../context/NightContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
export default function Root() {
  const queryClient = new QueryClient();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const openDrawerRight = () => setOpenDrawer(true);
  const closeDrawerRight = () => {
    setOpenDrawer(false);
    navigate("/home");
  };

  const morning_color = {
    borderRadius: "50px",
    background: "#ffd6d6",
    boxShadow: "inset 11px 11px 26px #ebc5c5,inset -11px -11px 26px #ffe7e7",
    // " 11px 11px 26px #e0bcbc,-11px -11px 26px #fff0f0",
    // // borderRadius: "57px",
    // background: "#e1ffd6",
    // boxShadow:
    //   "inset 29px 29px 58px #d4f0c9, inset -29px -29px 58px #efffe3",
  };

  const morning_color_2 = {
    borderRadius: "50px",
    background: "#ffd6d6",
    boxShadow: " 8px 8px 26px #ba9c9c,-8px -8px 26px #ffffff",
  };

  const afternoon_color = {
    borderRadius: "50px",
    background: "#fbedbc",
    boxShadow: "inset 8px 8px 18px #f1e4b4,inset -8px -8px 18px #fff6c4",
  };

  const afternoon_color_2 = {
    borderRadius: "50px",
    background: "#fbedbc",
    boxShadow: "8px 8px 26px#b7ad89, -8px -8px 26px #ffffef",
  };

  const night_color = {
    borderRadius: "50px",
    background: "#c5e2f9",
    boxShadow: " inset 8px 8px 18px #b4d5f1,inset -8px -8px 18px #c2e7ff",
  };

  const night_color_2 = {
    borderRadius: "50px",
    background: "#c5e2f9",
    boxShadow: "8px 8px 26px#94acbf,-8px -8px 26px #ecfafa",
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex justify-end pt-12 pr-12">
          <Profile openDrawerRight={openDrawerRight} />
        </div>
        <div
          className=" w-full flex flex-col justify-center"
          // style={{ backgroundColor: "#f2f3f7" }}
        >
          <DateTime />
          <div className="flex justify-center items-center my-12">
            <GoogleSearchBar />
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <Block blockName="🌞 아침 🌞" blockColor={morning_color_2}>
              <MorningProvider>
                <Morning />
              </MorningProvider>
            </Block>

            <Block blockName="🏃🏻‍♀️ 오후 🏃🏻‍♀️" blockColor={afternoon_color_2}>
              <AfternoonProvider>
                <Afternoon />
              </AfternoonProvider>
            </Block>

            <Block blockName="🌙  저녁 🌙" blockColor={night_color_2}>
              <NightProvider>
                <Night />
              </NightProvider>
            </Block>
          </div>
          <ShortcutsDrawer
            openDrawerFunc={openDrawerRight}
            closeDrawerFunc={closeDrawerRight}
            drawerState={openDrawer}
          />
        </div>
      </QueryClientProvider>
    </>
  );
}
