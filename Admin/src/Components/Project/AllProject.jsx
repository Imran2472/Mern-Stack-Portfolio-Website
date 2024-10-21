import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import SideNav from "../../Dashboard/SideNav";
import AppContext from "../../State/AppContext";
import { Link } from "react-router-dom";

function AllProject() {
  const { projectData, DeleteProject } = useContext(AppContext);
  return (
    <div>
      <Navbar />
      <SideNav />
      <div className="pl-[300px] py-[3rem] pr-[40px]">
        <h1>All Project Page</h1>
        <div className="grid grid-cols-3 gap-3 mt-6">
          {projectData?.project?.map((project) => (
            <div
              key={project?._id}
              className="border-[1px] border-[#9ca3af93] rounded-lg p-5 bg-white shadow-xl"
            >
              <div className="">
                <img
                  src={project?.image}
                  alt=""
                  className="w-[100%] h-[200px] object-cover object-top rounded-lg"
                />
                <h2 className="text-black text-sm font-medium mt-4 capitalize services-disc">
                  {project?.title}
                </h2>
                <p className="text-black text-sm font-light mt-2 services-disc">
                  {project?.description}
                </p>
                <div className="flex items-center gap-3 mt-5">
                  {/* update and delete button  */}
                  <Link
                    to={`/update-project/${project?._id}`}
                    className="text-white text-sm font-medium px-[14px] py-[7px] rounded-lg bg-green-600 hover:bg-green-800"
                  >
                    <i className="fas fa-solid fa-pen-to-square"></i>
                  </Link>
                  <button
                    onClick={() => {
                      if (
                        confirm("Are you sure you want to delet this Project ?")
                      ) {
                        DeleteProject(project?._id);
                      }
                    }}
                    className="text-white text-sm font-medium px-[14px] py-[7px] rounded-lg bg-red-600 hover:bg-red-800"
                  >
                    <i className="fas fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProject;
