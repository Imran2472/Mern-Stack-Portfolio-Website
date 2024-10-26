import React from "react";
import { useContext } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import AppContext from "../../Context/AppContext";
import { useState } from "react";
function Spiners() {
  const { DarkMode } = useContext(AppContext);

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <ScaleLoader color={`${DarkMode ? "#fff" : "#000"}`} />
    </div>
  );
}

export default Spiners;
