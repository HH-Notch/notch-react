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

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const openDrawerRight = () => setOpenDrawer(true);
  const closeDrawerRight = () => setOpenDrawer(false);

  return (
    <div className="bg-white w-screen h-screen flex flex-col p-5">
      <div className="flex justify-end">
        <Profile openDrawerRight={openDrawerRight} />
      </div>
      <DateTime />
      <div className="flex justify-center items-center my-5">
        <GoogleSearchBar />
      </div>
      <div className="flex justify-center items-center">
        <Block blockName="아침(Start)">
          <Morning />
        </Block>

        <Block blockName="오후(Focus)">
          <Afternoon />
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

      {/* <Drawer placement="right" open={openDrawer} onClose={closeDrawerRight}>
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            How to use Shorcuts
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
          </IconButton>
          <div>가나다라</div>
          <div>마바사아</div>
        </div>
      </Drawer> */}
    </div>
  );
}

export default App;
