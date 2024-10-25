import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import DarkStraight from "../../assets/dark-straight-arrow.png";
import arrowLight from "../../assets/straight-srrow.png";
import { useContext } from "react";
import AppContext from "../../Context/AppContext";
import { Link } from "react-router-dom";
function Project() {
  const { ProjectData, DarkMode } = useContext(AppContext);
  // console.log(ProjectData?.project);
  return (
    <div
      className={`my-[5rem] lg:px-[80px] px-[10px] ${DarkMode && "dark"}`}
      id="project"
    >
      <div className="text-center">
        <p className="text-[17px] text-black dark:text-white font-light">
          My portfolio
        </p>
        <h1 className="dark:text-white text-black text-[40px] font-normal">
          My latest work
        </h1>
        <div className="text-center w-[100%] flex flex-col items-center justify-center my-3">
          <p className="dark:text-white text-black text-[16px] font-light leading-[30px] lg:w-[50%]">
            Welcome to my web development portfolio! Explore a collection of
            projects showcasing my expertise in Full Stack Web development.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-[2rem]">
        {/* col -1  */}
        {ProjectData?.project?.map((project) => (
          <Link to={`/project-overview/${project?._id}`} key={project?._id}>
            <div className="p-3">
              <div className={`image relative group h-[260px]`}>
                <img
                  src={project?.image}
                  alt=""
                  className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group w-[100%] h-[100%]"
                />
                <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                  <div>
                    <h2 className="font-semibold">{project?.title}</h2>
                    <p className="text-sm text-gray-700">{project?.category}</p>
                  </div>
                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiCAYAAAA3WXuFAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGFSURBVHgBzZfbcYMwEEUvGQpwCbiCuAQ6SEpwKkg6yFBCOoAOXIJLIBUEVxCXkN0gecQahDAr2WdmzUP6OHMRK5PhASiKYkOHPdUmwx0hkZIOL1aG6i25kJMGi5TOUEdscySCRHZG4gN9GpKKf6ImZNIoqd4xTEPynw6fREnIiLDEVBqSxp6oCplF+gl/GmPU9mS10A1pXMnw88JaoRVpSCr3YpGQQhqSQTrBQoppSBp5I/dIaKchOVI4R8wJmTRs34ghYmnGbmZGwqbxSrVDfC6NUJInTMSlmhoYbB0mqULUM3pRreQm02FyMfNMh9bUFSRcYFo2NN2Db1BtcyXXX4RJbWXvcXmCHl3AnNonw2gKfQfMqeYmaAq1M+Oz6TApH1mDAFIl1I5tE2NoCp09Y18IRPU/Nb36P+j7k4u3EUo0E2LGHtvsm+WiLXQS15xOjQVoC3Xi+oCFxBYKXsyWmGsoqBFKVIWMgH39Fy1mS4wv147qdEs6TAwh3mRrPArUHPdYwR/kAHQ6DcL5BgAAAABJRU5ErkJggg=="
                      alt=""
                      className="w-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="button text-center flex flex-col justify-center items-center w-[100%]">
        <button
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 hover:bg-[var(--hover-box--)] duration-500
    dark:text-white dark:border-white dark:hover:bg-[#2A004A]"
        >
          Show more
          <img
            src={DarkMode ? arrowLight : DarkStraight}
            alt=""
            className="w-4 dark:block"
          />
        </button>
      </div>
    </div>
  );
}

export default Project;
