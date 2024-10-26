import React, { useContext } from "react";
import StraightSroow from "../../assets/arrow.png";
import AppContext from "../../Context/AppContext";
import Spiners from "../Spiners/Spiners";
function Offers() {
  const { ServicesData, DarkMode } = useContext(AppContext);

  return (
    <div
      className={`my-[3rem] lg:px-[80px] px-[10px] ${DarkMode && "dark"}`}
      id="offer"
    >
      <div className="text-center">
        <p className="text-[17px] text-black dark:text-white font-light">
          What i offer
        </p>
        <h1 className="dark:text-white text-black text-[40px] font-normal">
          My services
        </h1>
        <div className="text-center w-[100%] flex flex-col items-center justify-center my-3">
          <p className="dark:text-white text-black text-[16px] font-light leading-[30px] lg:w-[80%]">
            I am professional MERN Stack developer, I offer comprehensive web
            development services that leverage the power of MongoDB, Express.js,
            React.js, and Node.js. My expertise allows me to create dynamic,
            responsive, and high-performance web applications tailored to your
            specific business needs. Whether you require a custom web
            application, a single-page application (SPA), or an API integration,
            I ensure a seamless and efficient development process.
          </p>
        </div>
        {ServicesData?.service ? (
          <>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[5rem]">
              {ServicesData?.service?.map((data) => (
                <div className="cols p-3 text-left" key={data?._id}>
                  <div className="py-[2.5rem] px-[2rem] border-[1.5px] border-[#9CA3AF] rounded-lg hover:bg-[var(--hover-box--)] cursor-pointer hover:translate-y-[-5px] transition-transform duration-500 ease-in-out hover:shadow-black hover:shadow-lg dark:hover:shadow-white dark:hover:bg-[#1D0034]">
                    <div className="icons px-[10px] py-[10px] bg-gradient-to-r from-[#b820e6] to-[#da7d20] w-[max-content] rounded-lg  hover:bg-[var(--hover-box--)] cursor-pointer hover:translate-y-[-5px] transition-transform duration-500 ease-in-out hover:shadow-black hover:shadow-lg dark:hover:shadow-white dark:hover:bg-[#1D0034]">
                      <img
                        src={data?.image}
                        alt=""
                        className="w-7 h-7 object-covers"
                      />
                    </div>
                    <h1 className="text-[18px] font-normal text-black dark:text-white mt-5 lg:leading-[25px]">
                      {data?.title}
                    </h1>
                    <p className="text-[14px] font-light text-black dark:text-white mt-3 leading-[20px] text-left services-disc">
                      {data?.description}
                    </p>
                    <div className="buttons flex items-center gap-3 mt-5">
                      <button className="text-black dark:text-white text-sm font-normal">
                        Read More{" "}
                      </button>
                      <span className="m-0 p-0">
                        <img src={StraightSroow} alt="" className="w-4 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <Spiners />
          </>
        )}
      </div>
    </div>
  );
}

export default Offers;
