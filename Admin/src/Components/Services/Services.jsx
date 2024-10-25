import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import SideNav from "../../Dashboard/SideNav";
import AppContext from "../../State/AppContext";
import { Link } from "react-router-dom";

function Services() {
  const { ServicesData, DeletServices } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <SideNav />
      <div className="pl-[300px] py-[5rem] md:pr-[10px] max-[1000px]:pl-[270px] max-[895px]:px-[10px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center">
          {ServicesData?.service?.map((data) => (
            <div className="cols p-3 text-left" key={data?._id}>
              <div className="py-[2.5rem] px-[2rem] border-[1.5px] border-[#9CA3AF] rounded-lg hover:bg-[var(--hover-box--)] cursor-pointer hover:translate-y-[-5px] transition-transform duration-500 ease-in-out">
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
                  {/* update and delet button beautifull hover effect  */}
                  <Link
                    to={`/update-services/${data?._id}`}
                    className="text-white bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-lg py-[6px] px-[10px] text-xs font-normal "
                  >
                    Update
                  </Link>
                  <button
                    className="text-white bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-lg py-[6px] px-[10px] text-xs font-normal "
                    onClick={() => DeletServices(data?._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
