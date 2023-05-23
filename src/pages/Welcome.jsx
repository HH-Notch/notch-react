import React from "react";
import { Button } from "@material-tailwind/react";
import google_icon from "../assets/icons/google.svg";
import { Link } from "react-router-dom";
export default function Welcome() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center"
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        <div className="text-center">
          <p className="text-5xl mb-5">Welcome to Notch !</p>
          <p className="text-5xl">Welcome to Easily automated life !</p>
        </div>
        <Button
          size="lg"
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-3 mt-16"
        >
          <img src={google_icon} alt="metamask" className="h-6 w-6" />
          Continue with Google
        </Button>
        <Button
          size="lg"
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-3 mt-2"
        >
          <Link to="/home">Go Home</Link>
        </Button>
      </div>
    </>
  );
}
