import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../State/AppContext";

function SideNav() {
  const { homeData, AboutData, open, HandleOpen } = useContext(AppContext);
  const [aboutOpen, setIsAboutOpen] = useState(false);
  const TooggleAbout = () => {
    setIsAboutOpen(!aboutOpen);
  };
  const [ServicesOpen, setIsServicesOpen] = useState(false);
  const TooggleServices = () => {
    setIsServicesOpen(!ServicesOpen);
  };
  const [ProjectOpen, setIsProjectOpen] = useState(false);
  const TooggleProject = () => {
    setIsProjectOpen(!ProjectOpen);
  };
  return (
    <div
      className={`w-[260px] bg-white fixed top-0 left-0 bottom-0 h-[100vh] overflow-y-auto border-r shadow-md max-[895px]:left-[-100%] ${
        open ? "max-[895px]:left-[0]" : "max-[895px]:left-[-100%]"
      }`}
    >
      <div
        className="menubar text-black text-xl max-[895px]:block hidden absolute top-[20px] right-[20px]"
        onClick={HandleOpen}
      >
        <i className={`fa-solid  ${open ? "fa-xmark" : "fa-bars"}`}></i>
      </div>
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
          <li className="w-[100%]" onClick={TooggleAbout}>
            <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
              <i class="fa-solid fa-address-card"></i>
              <span>About</span>
            </button>
            {aboutOpen && (
              <ul className="py-[8px] px-[15px]">
                <li className="w-[100%]">
                  <Link to={`/about/${AboutData?._id}`}>
                    <button className="dashboard_btn flex items-center gap-4 text-sm px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                      <i class="fa-solid fa-address-card"></i>
                      <span>About</span>
                    </button>
                  </Link>
                </li>
                <li className="w-[100%]">
                  <Link to={"/about-skill"}>
                    <button className="dashboard_btn flex items-center gap-4 text-sm px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                      <i class="fa-solid fa-eye"></i>
                      <span>About Skill</span>
                    </button>
                  </Link>
                </li>
                <li className="w-[100%]">
                  <Link to={"/add-skill"}>
                    <button className="dashboard_btn flex items-center gap-4 text-sm px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                      <i class="fa-solid fa-plus"></i>
                      <span>Add About Skill</span>
                    </button>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="w-[100%]" onClick={TooggleServices}>
            <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
              <i class="fa-solid fa-list"></i>
              <span>Services</span>
            </button>
            {ServicesOpen && (
              <ul className="py-[8px] px-[15px]">
                <li className="w-[100%]">
                  <Link to={"/services"}>
                    <button className="dashboard_btn flex items-center gap-4 text-sm px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                      <i class="fa-solid fa-box"></i>
                      <span>All Services</span>
                    </button>
                  </Link>
                </li>
                <li className="w-[100%]">
                  <Link to={"/add-services"}>
                    <button className="dashboard_btn flex items-center gap-4 text-sm px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                      <i className="fa-solid fa-plus"></i>
                      <span>Add Services</span>
                    </button>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="w-[100%]" onClick={TooggleProject}>
            <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
              <i class="fa-solid fa-diagram-project"></i>
              <span>Project</span>
            </button>

            {ProjectOpen && (
              <ul className="py-[8px] px-[15px]">
                <Link to={"/all-project"}>
                  <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                    <i class="fa-solid fa-box"></i>
                    <span>All Project</span>
                  </button>
                </Link>
                <li className="w-[100%]">
                  <Link to={"/add-project"}>
                    <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
                      <i className="fa-solid fa-plus"></i>
                      <span>Add Project</span>
                    </button>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <Link to={"/conact-details"} className="w-[100%]">
            <button className="dashboard_btn flex items-center gap-4 text-base px-[25px] py-[10px] rounded-lg hover:bg-blue-500 hover:text-white w-[100%]">
              <i class="fa-regular fa-address-book"></i>
              <span>Contact Details</span>
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
