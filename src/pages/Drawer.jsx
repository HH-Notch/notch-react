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
        // open={true}
        onClose={closeDrawerFunc}
        size={700}
        style={{
          transform:
            "translateX(700px) translateY(0px) translateZ(0px) !important",
        }}
      >
        <div className="pb-6 pt-6 px-4 flex items-center justify-between bg-blue-gray-100">
          <div className="flex items-center justify-center">
            <p className="text-3xl font-bold">Download Notch Shorcuts</p>
          </div>

          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerFunc}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <div className="flex flex-col bg-white p-2 my-2 border-b-2">
          <div className="flex">
            <div className="group shortcut_button_style basis-1/4 m-2 bg-black ">
              <Link
                className="w-full h-full flex justify-center items-center shortcut_text_style group-hover:-translate-y-[0.33rem] group-active:translate-y-0 bg-morning-block "
                to="goodmorning"
              >
                굿모닝
              </Link>
            </div>
            <div className="group shortcut_button_style basis-1/4 m-2 bg-black ">
              <Link
                to="letsGo"
                className="w-full h-full flex justify-center items-center shortcut_text_style group-hover:-translate-y-[0.33rem] group-active:translate-y-0 bg-morning-block "
              >
                Let’s go ᕕ ∵⃝ ᕗ
              </Link>
            </div>
            <div className="group shortcut_button_style basis-1/4 m-2 bg-black ">
              <Link
                to="today_reminder"
                className="w-full h-full flex justify-center items-center shortcut_text_style group-hover:-translate-y-[0.33rem] group-active:translate-y-0 bg-afternoon-block "
              >
                오늘 해야 할 일이 뭐가 있더라 |_・)
              </Link>
            </div>
            <div className="group shortcut_button_style basis-1/4 m-2 bg-black ">
              <Link
                to="study_music"
                className="w-full h-full flex justify-center items-center shortcut_text_style group-hover:-translate-y-[0.33rem] group-active:translate-y-0 bg-afternoon-block "
              >
                공부할 때 듣는 플리 ᖰᖳ
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="group shortcut_button_style basis-1/4 m-2 bg-black ">
              <Link
                to="nap"
                className="w-full h-full flex justify-center items-center shortcut_text_style group-hover:-translate-y-[0.33rem] group-active:translate-y-0 bg-afternoon-block "
              >
                낮잠이 필요해 ᯅ̈
              </Link>
            </div>
            <div className="group shortcut_button_style basis-1/4 m-2 bg-black ">
              <Link
                to="how_was_day"
                className="w-full h-full flex justify-center items-center shortcut_text_style group-hover:-translate-y-[0.33rem] group-active:translate-y-0 bg-night-block "
              >
                오늘 하루는 어땠나요?
              </Link>
            </div>
            <div className="group shortcut_button_style basis-1/4 m-2 bg-black ">
              <Link
                to="prepare_next_day"
                className="w-full h-full flex justify-center items-center shortcut_text_style group-hover:-translate-y-[0.33rem] group-active:translate-y-0 bg-night-block "
              >
                {" "}
                내일을 준비하는 마음 가짐이란 뭘까 ⚯̮
              </Link>
            </div>
            <div className="group shortcut_button_style basis-1/4 m-2 bg-black ">
              <Link
                to="diary"
                className="w-full h-full flex justify-center items-center shortcut_text_style group-hover:-translate-y-[0.33rem] group-active:translate-y-0 bg-night-block "
              >
                일기 쓰기 ✎
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="group shortcut_button_style basis-1/4 m-2 bg-black ">
              <Link
                className="w-full h-full flex justify-center items-center shortcut_text_style group-hover:-translate-y-[0.33rem] group-active:translate-y-0 bg-bonus-block "
                to="sleep_time_calculator"
              >
                {" "}
                내가 몇시에 자야할까 ?
              </Link>
              {/* <div className="w-full h-full flex justify-center items-center shortcut_text_style group-hover:-translate-y-[0.33rem] group-active:translate-y-0 bg-bonus-block font-semibold">
               
              </div> */}
            </div>
            <div className="group shortcut_button_style basis-1/4 m-2 bg-black ">
              <Link
                to="brainerJay"
                className="w-full h-full flex justify-center items-center shortcut_text_style group-hover:-translate-y-[0.33rem] group-active:translate-y-0 bg-bonus-block "
              >
                브레이너 제이 😪
              </Link>
            </div>
            <div className="group shortcut_button_style basis-1/4 m-2 bg-black ">
              <Link
                to="yap_today"
                className="w-full h-full flex justify-center items-center shortcut_text_style group-hover:-translate-y-[0.33rem] group-active:translate-y-0 bg-bonus-block "
              >
                할일 나와라 얍 🪄
              </Link>
            </div>
            <div className="group shortcut_button_style basis-1/4 m-2 bg-black ">
              <Link
                to="turn_on_music"
                className="w-full h-full flex justify-center items-center shortcut_text_style group-hover:-translate-y-[0.33rem] group-active:translate-y-0 bg-bonus-block "
              >
                Turn On Music 🎧
              </Link>
            </div>
          </div>
        </div>
        <div className="flex ">
          <Outlet />
        </div>
      </Drawer>
    </>
  );
}
