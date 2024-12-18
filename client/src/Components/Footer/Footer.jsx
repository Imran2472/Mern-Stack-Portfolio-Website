import React, { useContext } from "react";
import DarkChe from "../../assets/darkche.png";
import lightChe from "../../assets/lightche.png";
import AppContext from "../../Context/AppContext";
function Footer() {
  const { DarkMode } = useContext(AppContext);
  return (
    <div className={`${DarkMode && "dark"} pt-[3rem] lg:px-[80px] px-[10px]`}>
      <div className="text-center mb-[4rem]">
        <div className="logo flex items-center gap-1 justify-center">
          <h1 className="text-[2.4rem] text-[var(--dark-text--)] dark:text-white font-bold">
            Imran
          </h1>
          <span className="text-[3rem] text-[#B923DF] font-bold mb-3">.</span>
        </div>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          target="_blank"
          className="cursor-pointer"
        >
          <div className="w-max flex items-center gap-2 mx-auto dark:text-white">
            <img src={DarkMode ? lightChe : DarkChe} alt="" className="w-6 " />
            accimran1@gmail.com
          </div>
        </a>
      </div>
      <div className="footer_end max-sm:flex-col max-sm:gap-5 flex items-center justify-between py-[20px] border-gray-400 dark:border-t-white border-t-[0.5px]">
        <div className="copy text-base text-black dark:text-white font-normal text-center">
          © 2024 Imran Web Developer. All rights reserved.
        </div>
        <div className="copy">
          <ul className="flex items-center gap-6">
            <a
              href="https://github.com/Imran2472"
              target="_blank"
              className="cursor-pointer"
            >
              <li className="text-black dark:text-white text-base font-normal cursor-pointer hover:text-[#B923DF] dark:hover:text-[#B923DF]">
                Github
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/imran-khan-6ab8b6276/"
              target="_blank"
            >
              <li className="text-black dark:text-white text-base font-normal cursor-pointer hover:text-[#B923DF] dark:hover:text-[#B923DF]">
                Linkedin
              </li>
            </a>
            <a
              href="https://www.instagram.com/itx__imran__0/?next=%2F"
              target="_blank"
            >
              <li className="text-black dark:text-white text-base font-normal cursor-pointer hover:text-[#B923DF] dark:hover:text-[#B923DF]">
                Instagram
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
