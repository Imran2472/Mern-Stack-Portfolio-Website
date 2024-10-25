import React, { useContext, useEffect, useState } from "react";
import ArrowUp from "../../assets/light-arrow.png";
import ArrowUplight from "../../assets/org-light-arrow.png";
import SunIcon from "../../assets/sun.png";
import darkIcon from "../../assets/dark.png";
import bgImage from "../../assets/headerbg.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AppContext from "../../Context/AppContext";
function Navbar() {
  const [ScrollHeader, setScrollHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { DarkMode, HandleDarkMode } = useContext(AppContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    ToggleBg();
  }, [DarkMode]);

  const ToggleBg = () => {
    const body = document.querySelector("body");

    DarkMode
      ? (body.style.backgroundColor = "#11001F")
      : (body.style.backgroundColor = "white");
  };
  const handleOpen = () => {
    setIsOpen(isOpen === false ? true : false);
  };
  return (
    <>
      {!DarkMode && (
        <img
          src={bgImage}
          alt=""
          className="fixed top-[-770px] w-[100%] z-[-999] max-md:top-[-400px] max-sm:top-[-70%] max-[490px]:top-[-60%] max-[417px]:top-[-50%] max-[363px]:top-[-40%]"
        />
      )}
      <header
        className={`w-[100%] top-0 z-[999] ${DarkMode && "dark"} ${
          ScrollHeader
            ? "bg-[#fff] sticky backdrop-blur-[8px] dark:bg-[#11001F] dark:border-b-2"
            : ""
        }  `}
      >
        <nav
          className={`flex items-center justify-between lg:px-[80px] px-[10px] z-10 ${
            ScrollHeader ? "dark:bg-[#11001F] border-b-[1px]" : ""
          }`}
        >
          <div className="logo flex items-center gap-1 ">
            <h1 className="text-[2.4rem] text-[var(--dark-text--)] dark:text-white font-bold">
              Imran
            </h1>
            <span className="text-[3rem] text-[#B923DF] font-bold mb-3">.</span>
          </div>
          <div
            className={`max-lg:fixed max-lg:top-[80px] max-lg:left-0 max-lg:right-0 max-lg:w-[100%]  max-lg:p-5 max-lg:backdrop-blur-[10px] max-lg:bg-white max-lg:dark:bg-black ${
              isOpen ? "max-lg:flex-col" : "max-lg:hidden"
            }`}
          >
            <ul
              className={`flex items-center gap-1 py-[14px] px-[10px] rounded-full max-lg:flex-col max-lg:gap-3 max-lg:bg-transparent max-lg:items-start max-lg:w-[100%] max-lg:dark:border-[0] ${
                ScrollHeader
                  ? "bg-transparent dark:border-[0]"
                  : "bg-[#ffffff74] backdrop:blur-[8px]"
              } dark:border-[#fff] dark:border-[.5px] dark:bg-transparent `}
            >
              <li>
                <a
                  className={`py-[6px] px-[15px] text-base dark:text-white text-[#000000] rounded-full hover:bg-gradient-to-r hover:from-[#b820e6] hover:to-[#da7d20] ease-in hover:text-[#fff] cursor-pointer`}
                  href="#hero"
                >
                  Home
                </a>
              </li>
              <li className="">
                <a
                  href="#about"
                  className={`py-[6px] px-[15px] text-base dark:text-white text-[#000000] rounded-full hover:bg-gradient-to-r hover:from-[#b820e6] hover:to-[#da7d20] ease-in hover:text-[#fff] cursor-pointer`}
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  className={`py-[6px] px-[15px] text-base dark:text-white text-[#000000] rounded-full hover:bg-gradient-to-r from-[#b820e6] to-[#da7d20] ease-in hover:text-[#fff] cursor-pointer`}
                  href="#offer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className={`py-[6px] px-[15px] text-base dark:text-white text-[#000000] rounded-full hover:bg-gradient-to-r from-[#b820e6] to-[#da7d20] ease-in hover:text-[#fff] cursor-pointer`}
                  href="#project"
                >
                  My Work
                </a>
              </li>
              <li>
                <a
                  className={`py-[6px] px-[15px] text-base dark:text-white text-[#000000] rounded-full hover:bg-gradient-to-r from-[#b820e6] to-[#da7d20] ease-in hover:text-[#fff] cursor-pointer`}
                  href="#contact"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          <div className="buttons-end flex items-center gap-3">
            <div className="them-icon cursor-pointer">
              {DarkMode === false ? (
                <img
                  src={SunIcon}
                  alt=""
                  className="w-6 h-6"
                  onClick={HandleDarkMode}
                />
              ) : (
                <img
                  src={darkIcon}
                  alt=""
                  className="w-6 h-6"
                  onClick={HandleDarkMode}
                />
              )}
            </div>
            <div className="flex items-center gap-3 border-[1px] border-[#6B7280] rounded-full py-[10px] px-[25px]  hover:bg-[var(--hover-box--)] cursor-pointer dark:hover:bg-[#2A004A] text-black dark:text-white dark:border-[#fff] max-lg:hidden">
              <button className="text-base font-normal">Contact</button>
              <span>
                <img
                  src={DarkMode ? ArrowUplight : ArrowUp}
                  alt=""
                  className="w-3 h-3"
                />
              </span>
            </div>
            <div
              className="text-lg hidden max-lg:block dark:text-white text-black"
              onClick={handleOpen}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
