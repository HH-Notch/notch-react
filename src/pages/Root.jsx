import React from "react";
import DateTime from "../components/DateTime";
import GoogleSearchBar from "../components/SearchBar";
import Morning from "../components/Morning";
import Block from "../components/Block";
import Profile from "../components/Profile";
import Afternoon from "../components/Afternoon";
import Night from "../components/Night";
import { useState } from "react";
import ShortcutsDrawer from "../components/Drawer";
import { MorningProvider } from "../context/MorningContext";
import { AfternoonProvider } from "../context/AfternoonContext";
export default function Root() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const openDrawerRight = () => setOpenDrawer(true);
  const closeDrawerRight = () => setOpenDrawer(false);

  return (
    <div className="bg-white w-full h-full flex flex-col p-5">
      <div className="flex justify-end">
        <Profile openDrawerRight={openDrawerRight} />
      </div>
      <DateTime />
      <div className="flex justify-center items-center my-5">
        <GoogleSearchBar />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <Block blockName="아침(Start)">
          <MorningProvider>
            <Morning />
          </MorningProvider>
        </Block>

        <Block blockName="오후(Focus)">
          <AfternoonProvider>
            <Afternoon />
          </AfternoonProvider>
        </Block>

        <Block blockName="저녁(Review)">
          <Night />
        </Block>
      </div>
      <ShortcutsDrawer
        openDrawerFunc={openDrawerRight}
        closeDrawerFunc={closeDrawerRight}
        drawerState={openDrawer}
      />
    </div>
  );
}
