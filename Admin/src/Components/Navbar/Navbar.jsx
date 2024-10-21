import React from "react";

function Navbar() {
  return (
    <header className="bg-red-700">
      <nav className="flex items-center justify-between lg:px-[40px] px-10px bg-white border-b">
        <div className="flex items-center gap-3">
          <h1 className="text-[2.4rem] text-[var(--dark-text--)] dark:text-white font-bold">
            Imran
          </h1>
          <span className="text-[2.5rem] text-[#B923DF] font-bold mb-3">.</span>
        </div>
        <div className="flex items-center gap-3 border-[1px] border-[#6B7280] rounded-full py-[10px] px-[25px]  hover:bg-[var(--hover-box--)] cursor-pointer dark:hover:bg-[#2A004A] text-black dark:text-white dark:border-[#fff] max-lg:hidden">
          <button className="text-base font-normal">Contact</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
