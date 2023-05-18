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


import Home from './pages/Home';
import Welcome from './pages/welcome';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([{
  path:'/',
  element: <Root/>,
  errorElement: <NotFound/>
},
{
  path:'/welcome',
  element: <Welcome/>,
  errorElement: <NotFound/>
}
]);

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const openDrawerRight = () => setOpenDrawer(true);
  const closeDrawerRight = () => setOpenDrawer(false);

  return (
    <RouterProvider router={router}/>;
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

    </div>
  );
}

export default App;
