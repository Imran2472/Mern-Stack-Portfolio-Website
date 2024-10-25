import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import AppContext from "../../Context/AppContext";
import { useParams } from "react-router-dom";
function ProjectReview() {
  const { GetSingleProject, DarkMode } = useContext(AppContext);
  const [project, setProject] = useState([]);
  const [dateConvert, setDateConvert] = useState();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    GetData();
    // eslint-disable-next-line
  }, [id]);
  const GetData = async () => {
    const res = await GetSingleProject(id);
    setProject(res?.projects);
    const date = new Date(res?.projects?.creatAt).toDateString();
    setDateConvert(date);
    console.log(project);
  };
  return (
    <div>
      <Navbar />
      <div className={`py-[3rem] ${DarkMode && "dark"}`}>
        <div className="px-[80px] grid grid-cols-5 py-[4rem]">
          <div className="col-span-3 shadow-md rounded-md">
            <div className="content p-5">
              <div className="title text-[20px] font-medium text-gray-900 dark:text-white">
                {project?.title}
              </div>
              <p className="text-sm text-gray-900 dark:text-white mt-3">
                {dateConvert}
              </p>
              <div className="img my-8">
                <img
                  src={project?.image}
                  alt=""
                  className="w-[100%] h-[350px] object-cover rounded-md object-top-bottom"
                />
              </div>
              <div className="category">
                <div className="text-sm text-gray-900 dark:text-white flex items-center gap-3">
                  <span className="bg-pink-100 px-[15px] py-[5px] rounded-md">
                    {project?.category}
                  </span>
                </div>
              </div>
              {/* livelink button and githublink button  */}
              <div className="flex gap-4 mt-8">
                <a
                  href={project?.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-medium px-[14px] py-[7px] rounded-lg bg-green-600 hover:bg-green-800"
                >
                  Live Link
                </a>
                <a
                  href={project?.githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-medium px-[14px] py-[7px] rounded-lg bg-blue-500 hover:bg-blue-800"
                >
                  Github Link
                </a>
              </div>
              <div className="description mt-5">
                <div className="text-[12px] text-gray-900 dark:text-white">
                  {project?.description}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">2</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectReview;
