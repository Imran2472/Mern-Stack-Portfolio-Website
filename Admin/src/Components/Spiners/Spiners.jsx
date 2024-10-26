import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
function Spiners() {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <ScaleLoader color={"#000"} />
    </div>
  );
}

export default Spiners;
