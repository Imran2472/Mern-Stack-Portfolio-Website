import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../State/AppContext";

function SideNav() {
  const { homeData, AboutData } = useContext(AppContext);
  return (
    <div className="w-[260px] bg-white fixed top-0 left-0 bottom-0 h-[100vh] overflow-y-auto border-r shadow-md">
      <div className="flex items-center gap-3 pt-[.2rem] justify-center">
        <h1 className="text-[2.4rem] text-[var(--dark-text--)] dark:text-white font-bold">
          Imran
        </h1>
        <span className="text-[2.5rem] text-[#B923DF] font-bold mb-3">.</span>
      </div>
      <div className="dashboard_links mt-10">
        <ul className="px-[10px]">
          {/* give me six buttons in the li with beautifull styling and hover effect  */}
          <li className="w-[100%]">
            <Link to={`/home/${homeData?._id}`}>
              <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
              </button>
            </Link>
          </li>
          <li className="w-[100%]">
            <Link to={`/about/${AboutData?._id}`}>
              <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                <i className="fa-solid fa-house"></i>
                <span>About</span>
              </button>
            </Link>
          </li>
          <li className="w-[100%]">
            <Link to={"/about-skill"}>
              <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                <i className="fa-solid fa-house"></i>
                <span>About Skill</span>
              </button>
            </Link>
          </li>
          <li className="w-[100%]">
            <Link to={"/add-skill"}>
              <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                <i className="fa-solid fa-house"></i>
                <span>Add About Skill</span>
              </button>
            </Link>
          </li>
          <li className="w-[100%]">
            <Link to={"/add-services"}>
              <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                <i className="fa-solid fa-house"></i>
                <span>Add Services</span>
              </button>
            </Link>
          </li>
          <li className="w-[100%]">
            <Link to={"/services"}>
              <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                <i className="fa-solid fa-house"></i>
                <span>All Services</span>
              </button>
            </Link>
          </li>
          <li className="w-[100%]">
            <Link to={"/all-project"}>
              <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                <i className="fa-solid fa-house"></i>
                <span>All Project</span>
              </button>
            </Link>
          </li>
          <li className="w-[100%]">
            <Link to={"/add-project"}>
              <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                <i className="fa-solid fa-house"></i>
                <span>Add Project</span>
              </button>
            </Link>
          </li>
          <Link to={"/conact-details"} className="w-[100%]">
            <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
              <i className="fa-solid fa-house"></i>
              <span>Contact Details</span>
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
