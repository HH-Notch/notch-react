import React from "react";
import { Button } from "@material-tailwind/react";
import google_icon from "../assets/icons/google.svg";
import { Link } from "react-router-dom";
import logo from "../assets/images/notch_logo.png";
export default function Welcome() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center"
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        <img src={logo} alt="" className="w-logo mb-10" />
        <div className="text-center my-4">
          <p className="text-5xl mb-5 font-ghanachoco text-welcome drop-shadow-welcome">
            Welcome to Notch !
          </p>
          <p className="text-5xl font-ghanachoco text-welcome drop-shadow-welcome">
            Welcome to Easily automated life !
          </p>
        </div>
        <Button
          size="lg"
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-3 mt-16"
        >
          <img src={google_icon} alt="metamask" className="h-6 w-6" />
          <Link to="/home">Continue with Google</Link>
        </Button>
      </div>
    </>
  );
}
