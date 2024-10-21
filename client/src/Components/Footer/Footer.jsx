import React from "react";
import DarkChe from "../../assets/darkche.png";
import lightChe from "../../assets/lightche.png";
function Footer({ DarkMode }) {
  return (
    <div className={`${DarkMode && "dark"} pt-[3rem] lg:px-[80px] px-[10px]`}>
      <div className="text-center mb-[4rem]">
        <div className="logo flex items-center gap-1 justify-center">
          <h1 className="text-[2.4rem] text-[var(--dark-text--)] dark:text-white font-bold">
            Imran
          </h1>
          <span className="text-[3rem] text-[#B923DF] font-bold mb-3">.</span>
        </div>
        <div className="w-max flex items-center gap-2 mx-auto dark:text-white">
          <img src={DarkMode ? lightChe : DarkChe} alt="" className="w-6 " />
          accimran1@gmail.com
        </div>
      </div>
      <div className="footer_end max-sm:flex-col max-sm:gap-5 flex items-center justify-between py-[20px] border-gray-400 dark:border-t-white border-t-[0.5px]">
        <div className="copy text-base text-black dark:text-white font-normal text-center">
          © 2024 Imran Web Developer. All rights reserved.
        </div>
        <div className="copy">
          <ul className="flex items-center gap-6">
            <li className="text-black dark:text-white text-base font-normal cursor-pointer hover:text-[#B923DF] dark:hover:text-[#B923DF]">
              Github
            </li>
            <li className="text-black dark:text-white text-base font-normal cursor-pointer hover:text-[#B923DF] dark:hover:text-[#B923DF]">
              Linkedin
            </li>
            <li className="text-black dark:text-white text-base font-normal cursor-pointer hover:text-[#B923DF] dark:hover:text-[#B923DF]">
              Instagram
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
