import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SideNav from "../../Dashboard/SideNav";
import fileUpload from "../../assets/file upload.jpg";
import AppContext from "../../State/AppContext";
import { Bounce, toast } from "react-toastify";
import { useParams } from "react-router-dom";
function UpdateProject() {
  const { GetSngleProject, UpdateProject } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [category, setcategory] = useState("");
  const [githublink, setGithublink] = useState("");
  const [liveLink, setliveLink] = useState("");
  const [Preview, setPreview] = useState(null);
  const params = useParams();
  const id = params.id;
  const GetProject = async () => {
    const res = await GetSngleProject(id);
    console.log(res);
    setTitle(res?.projects?.title);
    setDescription(res?.projects?.description);
    setcategory(res?.projects?.category);
    setGithublink(res?.projects?.githublink);
    setliveLink(res?.projects?.liveLink);
    image && setImage(res?.projects?.image);
    setPreview(res?.projects?.image);
  };
  useEffect(() => {
    GetProject();
  }, [id]);
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("githublink", githublink);
    formData.append("liveLink", liveLink);
    formData.append("image", image);
    const response = await UpdateProject(formData, id);

    if (response.success == true) {
      toast.success(response?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(response?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div>
      <Navbar />
      <SideNav />
      <div className="pl-[300px] py-[3rem]">
        <h1 className="text-2xl text-black font-medium">Update Project</h1>
        <form
          className="w-[600px] rounded-lg max-w-[100%] bg-white shadow-xl border p-5 mt-4"
          onSubmit={HandleSubmit}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Name
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              type="text"
              placeholder="Enter project name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required={true}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              type="text"
              placeholder="Enter Category"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              required={true}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              GitHub Link
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              type="text"
              placeholder="Enter GitHub link"
              value={githublink}
              onChange={(e) => setGithublink(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Live Link
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              type="text"
              placeholder="Enter live link"
              value={liveLink}
              onChange={(e) => setliveLink(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="img"
              className="text-sm font-medium text-gray-700 mb-2 h-[300px] p-5 border-[1.2px] rounded-xl flex justify-center flex-col"
            >
              <p className="text-sm font-normal text-black text-center">
                {image ? image.name : Preview}
              </p>
              {image ? (
                <img
                  src={image ? URL.createObjectURL(image) : image}
                  alt=""
                  className="w-[100%] h-[100%] object-contain"
                />
              ) : (
                <img
                  src={Preview}
                  alt=""
                  className="w-[100%] h-[100%] object-contain"
                />
              )}
            </label>

            <input
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 hidden"
              type="file"
              id="img"
              onChange={(e) => setImage(e.target.files[0])}
              required={true}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Description
            </label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-5"
              rows={5}
              placeholder="Enter project description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required={true}
            ></textarea>
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-base font-medium text-white cursor-pointer py-[10px] px-[30px] rounded-lg mt-4"
            type="submit"
          >
            Add Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProject;
