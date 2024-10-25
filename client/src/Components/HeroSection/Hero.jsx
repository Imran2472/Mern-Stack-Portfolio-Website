import React, { useContext } from "react";
import StraightIcon from "../../assets/straight-srrow.png";
import downloadIcon from "../../assets/downloadicon.png";
import AppContext from "../../Context/AppContext";
function Hero() {
  const { homeData, DarkMode } = useContext(AppContext);

  // console.log(homeData?.home[0]?.subtitle);
  return (
    <div
      className={`lg:px-[80px] px-[10px] grid grid-cols-6 max-md:block ${
        DarkMode && "dark"
      }`}
      id="hero"
    >
      <div className="max-md:hidden"></div>
      {homeData?.home?.map((data) => (
        <div
          className="col-span-4 max-[1800px]:my-[9%] max-sm:my-[20%] max-[1300px]:my-[5%] flex flex-col items-center justify-center p-4 text-center"
          key={data?._id}
        >
          <div className="image w-[100px] h-[100px]">
            <img
              src={data?.image}
              alt=""
              className="w-[100%] h-[100%] object-cover object-top rounded-full"
            />
          </div>
          <div className="info">
            <div className="name text-black dark:text-white text-2xl font-normal my-4 max-sm:text-[18px]">
              {data?.subtitle}
            </div>
            <h1 className="text-[80px] max-xl:text-[60px] leading-[80px] max-xl:leading-[70px] font-normal dark:text-white text-black my-[2rem] max-xl:my-[10px] max-sm:text-[33px] max-sm:font-light max-sm:leading-[40px]">
              {data?.title}
            </h1>
            <p className="text-base font-light px-[60px] text-black dark:text-white mt-2 max-sm:px-[0]">
              {data?.description}
            </p>
            <div className="buttons flex items-center gap-4 mt-6 justify-center">
              {/* hire me and conatct button  */}
              <button className="py-[12px] px-[50px] bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white font-normal rounded-full text-center flex items-center gap-4 text-base max-sm:px-[20px] max-sm:py-[8px] max-sm:text-xs">
                {data?.buttontext}
                <span>
                  <img
                    src={StraightIcon}
                    alt=""
                    className="w-4 h-3 max-sm:w-3 max-sm:h-2"
                  />
                </span>
              </button>
              <div className="flex items-center gap-3 border-[1px] rounded-full py-[12px] px-[50px]  hover:bg-[var(--hover-box--)] text-black bg-[#FFFFFF] text-base max-sm:px-[20px] max-sm:py-[8px]">
                <button className="text-base font-normal max-sm:text-xs">
                  My resume
                </button>
                <span>
                  <img
                    src={downloadIcon}
                    alt=""
                    className="w-4 h-4 max-sm:w-3 max-sm:h-2"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="max-md:hidden"></div>
    </div>
  );
}

export default Hero;
