import React from "react";
import { Drawer, Typography, IconButton, Card } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ShortcutsDrawer({
  openDrawerFunc,
  closeDrawerFunc,
  drawerState,
}) {
  // const [openDrawer, setOpenDrawer] = useState(false);
  // const openDrawerRight = () => setOpenDrawer(true);
  // const closeDrawerRight = () => setOpenDrawer(false);
  const customDrawerTheme = {
    drawer: {
      styles: {
        base: {
          drawer: {
            position: "fixed",
          },
          overlay: {
            position: "absolute",
          },
        },
      },
    },
  };
  return (
    <>
      {/* <button onClick={openDrawerRight}>open</button> */}
      <Drawer
        placement="right"
        open={drawerState}
        onClose={closeDrawerFunc}
        size={600}
        style={{
          transform:
            "translateX(600px) translateY(0px) translateZ(0px) !important",
        }}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            How to use Shorcuts
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerFunc}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <div className="bg-green-400">단축어</div>
        <Link to="goodMorning">링크투</Link>
        <Outlet />
      </Drawer>
    </>
  );
}
