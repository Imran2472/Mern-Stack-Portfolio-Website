import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

function Dashboard() {
  const info = [
    { id: 1, name: "Total Projects", value: "100" },
    { id: 2, name: "Total Clients", value: "500" },
    { id: 3, name: "Total Hours Worked", value: "200" },
  ];
  return (
    <>
      <Navbar />
      <SideNav />
      <div className="pl-[300px] py-[5rem] md:pr-[10px] max-[1000px]:pl-[270px] max-[895px]:px-[10px]">
        <div className="grid grid-cols-3 gap-4">
          {info.map((data) => (
            <div
              key={data.id}
              className="cols h-[200px] border bg-blue-500 text-black flex flex-col justify-center items-center rounded-lg cursor-pointer"
            >
              <h2 className="text-2xl font-medium text-white">{data.name}</h2>
              <h1 className="text-xl font-medium text-white">{data.value}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
