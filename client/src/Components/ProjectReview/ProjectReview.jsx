import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import AppContext from "../../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
function ProjectReview() {
  const { GetSingleProject, DarkMode, ProjectData } = useContext(AppContext);
  const [project, setProject] = useState([]);
  const [dateConvert, setDateConvert] = useState();
  const [category, setCategory] = useState();
  const [filteredProject, setFilterProject] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  useEffect(() => {
    setFilterProject(
      ProjectData?.project?.filter((project) => project.category === category)
    );
    GetData();
  }, [id, project]);

  const handleChange = (Uid) => {
    navigate(`/project-overview/${Uid}`);
  };
  const GetData = async () => {
    const res = await GetSingleProject(id);
    setProject(res?.projects);
    const date = new Date(res?.projects?.creatAt).toDateString();
    setDateConvert(date);
    setCategory(project?.category);
  };

  return (
    <div>
      <Navbar />
      <div className={`py-[3rem] ${DarkMode && "dark"}`}>
        <div className="lg:px-[80px] md:px-[10px] sm:px-[10px] grid lg:grid-cols-5 md:grid-cols-6 py-[4rem] gap-5 max-[600px]:gap-10 items-start">
          <div className="lg:col-span-3 md:col-span-4 border rounded-xl">
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
                  <span className="bg-pink-100 dark:bg-pink-600 px-[15px] py-[5px] rounded-md">
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
              <h1 className="text-base font-medium text-black dark:text-white mt-5">
                Description :
              </h1>
              <div className="description mt-3">
                <div className="text-[13px] text-gray-900 dark:text-white">
                  {project?.description}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 md:col-span-2 border rounded-xl p-[1.5rem]">
            {filteredProject?.map((data) => (
              <div
                className="grid lg:grid-cols-3 md:grid-cols-2 items-center cursor-pointer"
                onClick={() => handleChange(data._id)}
                key={data._id}
              >
                <div className="image-div lg:col-span-1 md:grid-cols-1 p-8 pl-0">
                  <img
                    src={data?.image}
                    alt=""
                    className="w-[100%] h-[100%] rounded-full object-cover object-top-bottom"
                  />
                </div>
                <div className="info lg:col-span-2 md:grid-cols-1">
                  <div className="title text-[16px] font-medium text-gray-900 dark:text-white">
                    {data?.title}
                  </div>
                  <div className="title text-[12px] font-light text-gray-900 dark:text-white services-disc mt-2">
                    {data?.description}
                  </div>
                  <div className="title text-[12px] font-lightdark:text-white services-disc bg-pink-400 dark:bg-pink-800 w-max px-[10px] py-[5px] rounded-lg text-white cursor-pointer mt-3">
                    {data?.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectReview;
