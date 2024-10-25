import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import SideNav from "../../Dashboard/SideNav";
import AppContext from "../../State/AppContext";
import { Link } from "react-router-dom";

function AboutServices() {
  const { aboutSkill, DeletSkill } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <SideNav />
      <div className="pl-[300px] py-[5rem] md:pr-[10px] max-[1000px]:pl-[270px] max-[895px]:px-[10px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {aboutSkill?.skill?.map((skill) => (
            <div
              className="col-one border-[#9CA3AF] py-[35px] pl-[30px] px-[10px] border-[1.4px] rounded-lg text-left hover:bg-[var(--hover-box--)] cursor-pointer hover:translate-y-[-5px] transition-transform duration-500 ease-in-out bg-white"
              key={skill?._id}
            >
              <div className="iconss  dark:text-[#fff] text-[#49516B] text-[1.5rem]">
                <i className={`${skill?.icon}`}></i>
              </div>
              <div className="title">
                <p className="dark:text-white text-[#49516B] text-[18px] font-medium mt-4">
                  {skill?.title}
                </p>
                <p className="dark:text-white text-[#49516B] text-[16px] font-light mt-3">
                  {skill?.description}
                </p>
              </div>
              <div className="buttons flex items-center gap-3 mt-5">
                {/* update and delet  */}
                <Link
                  to={`/update-skill/${skill?._id}`}
                  className="dark:text-white text-sm font-normal bg-blue-600 text-white py-[6px] px-[10px] rounded-lg hover:bg-blue-800"
                >
                  Update
                </Link>
                <button
                  onClick={() => DeletSkill(skill?._id)}
                  className="dark:text-white text-sm font-normal bg-blue-600 text-white py-[6px] px-[10px] rounded-lg hover:bg-blue-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutServices;
