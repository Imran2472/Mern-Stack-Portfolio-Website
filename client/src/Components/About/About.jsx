import React, { useContext } from "react";
import profileImg from "../../assets/profile.jpg";
import SchoolIcon from "@mui/icons-material/School";
import codinght from "../../assets/codinght.png";
import cssIcon from "../../assets/css.png";
import vscodeIcon from "../../assets/vscode.png";
import mongooseIcon from "../../assets/mongoose.png";
import jsIcon from "../../assets/js.png";
import nodejs from "../../assets/nodejs.png";
import expressIocn from "../../assets/expressjs.png";
import tailwandIcon from "../../assets/tailwand.png";
import bootstrapeIcon from "../../assets/bootstrape.png";
import AppContext from "../../Context/AppContext";
import Spiners from "../Spiners/Spiners";
function About() {
  const { aboutData, aboutSkill, DarkMode } = useContext(AppContext);
  return (
    <>
      <div
        className={`${
          DarkMode && "dark"
        } lg:px-[80px] px-[10px] text-center py-[4rem]`}
        id="about"
      >
        <p className="text-[17px] text-black dark:text-white font-light">
          Introduction
        </p>
        <h1 className="dark:text-white text-black text-[40px] font-normal">
          About me
        </h1>
        {aboutData?.about ? (
          <>
            <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 mt-[4rem]">
              <div className="lg:col-span-2">
                {aboutData?.about?.map((about) => (
                  <div className="image" key={about?._id}>
                    <img
                      src={about?.image}
                      alt=""
                      className="w-[100%] object-cover bg-none bg-fixed bg-cover rounded-2xl h-[500px] object-top"
                    />
                  </div>
                ))}
              </div>
              <div className="lg:col-span-3">
                {aboutData?.about?.map((about) => (
                  <p
                    className="dark:text-white text-black text-[16px] font-light text-left leading-[30px]"
                    key={about?._id}
                  >
                    {about?.aboutdescription}
                  </p>
                ))}

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
                  {aboutSkill?.skill?.map((skill) => (
                    <div
                      className="col-one border-[#9CA3AF] py-[35px] pl-[30px] px-[10px] border-[1.4px] rounded-lg text-left hover:bg-[var(--hover-box--)] cursor-pointer hover:translate-y-[-5px] transition-transform duration-500 ease-in-out hover:shadow-black hover:shadow-lg dark:hover:shadow-white dark:hover:bg-[#1D0034]"
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
                    </div>
                  ))}
                </div>
                <div className="icons mt-7 text-left">
                  <p className="text-black dark:text-white text-[17px] font-normal ">
                    Work On
                  </p>
                  <div className="images flex items-center flex-wrap gap-3 mt-5">
                    <div className="img w-[60px] h-[60px] rounded-lg border-[1.3px] border-[#6B7280] p-3 cursor-pointer hover:translate-y-[-10px] transition-transform ease-linear duration-600">
                      <img
                        src={vscodeIcon}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="img w-[60px] h-[60px] rounded-lg border-[1.3px] border-[#6B7280] p-3 cursor-pointer hover:translate-y-[-10px] transition-transform ease-linear duration-600">
                      <img
                        src={codinght}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="img w-[60px] h-[60px] rounded-lg border-[1.3px] border-[#6B7280] p-3 cursor-pointer hover:translate-y-[-10px] transition-transform ease-linear duration-600">
                      <img
                        src={cssIcon}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="img w-[60px] h-[60px] rounded-lg border-[1.3px] border-[#6B7280] p-3 cursor-pointer hover:translate-y-[-10px] transition-transform ease-linear duration-600">
                      <img
                        src={jsIcon}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="img w-[60px] h-[60px] rounded-lg border-[1.3px] border-[#6B7280] p-3 cursor-pointer hover:translate-y-[-10px] transition-transform ease-linear duration-600">
                      <img
                        src={nodejs}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="img w-[60px] h-[60px] rounded-lg border-[1.3px] border-[#6B7280] p-3 cursor-pointer hover:translate-y-[-10px] transition-transform ease-linear duration-600">
                      <img
                        src={expressIocn}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="img w-[60px] h-[60px] rounded-lg border-[1.3px] border-[#6B7280] p-3 cursor-pointer hover:translate-y-[-10px] transition-transform ease-linear duration-600">
                      <img
                        src={mongooseIcon}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="img w-[60px] h-[60px] rounded-lg border-[1.3px] border-[#6B7280] p-3 cursor-pointer hover:translate-y-[-10px] transition-transform ease-linear duration-600">
                      <img
                        src={tailwandIcon}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="img w-[60px] h-[60px] rounded-lg border-[1.3px] border-[#6B7280] p-3 cursor-pointer hover:translate-y-[-10px] transition-transform ease-linear duration-600">
                      <img
                        src={bootstrapeIcon}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Spiners />
          </>
        )}
      </div>
    </>
  );
}

export default About;
