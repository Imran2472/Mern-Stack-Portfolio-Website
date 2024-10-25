import React, { useContext, useState } from "react";
import AppContext from "../../State/AppContext";

function Navbar() {
  const { user, auth, Logout, HandleOpen, open } = useContext(AppContext);

  return (
    <header className="bg-red-700">
      <nav
        className={`flex items-center justify-between bg-white border-b py-[14px] cursor-pointer pl-[280px] pr-[10px] max-[895px]:px-[10px]`}
      >
        <div
          className="menubar text-black text-xl max-[895px]:block hidden"
          onClick={HandleOpen}
        >
          <i className={`fa-solid  ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </div>
        <div></div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 border-[1px] border-[#6B7280] rounded-full py-[10px] px-[25px]  hover:bg-[var(--hover-box--)] cursor-pointer dark:hover:bg-[#2A004A] text-black dark:text-white dark:border-[#fff] max-[895px]:px-[16px]  max-[895px]:py-[8px]">
            <button className="text-base font-normal max-[400px]:text-xs">
              {auth && user?.name}
            </button>
          </div>
          {auth && (
            <div
              className="flex items-center gap-3 border-[1px] border-[#6B7280] rounded-full py-[10px] px-[25px]  hover:bg-[var(--hover-box--)] cursor-pointer dark:hover:bg-[#2A004A] text-black dark:text-white dark:border-[#fff] max-[895px]:px-[16px]  max-[895px]:py-[8px]"
              onClick={Logout}
            >
              <button className="text-base font-normal max-[400px]:text-xs">
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
