import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../State/AppContext";
import Navbar from "../Navbar/Navbar";
import SideNav from "../../Dashboard/SideNav";
import { Bounce, toast } from "react-toastify";

function UpdateServices() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [Preview, setPreview] = useState(null);
  const { GetSIngleServices, UpdateServices } = useContext(AppContext);
  const params = useParams();
  const id = params.id;

  const UpdateFun = async () => {
    const data = await GetSIngleServices(id);
    setTitle(data?.service?.title);
    setDescription(data?.service?.description);
    image && setImage(data?.service?.image);
    setPreview(data?.service?.image);
  };

  useEffect(() => {
    UpdateFun();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    const data = await UpdateServices(formData, id);
    if (data.success) {
      toast.success(data?.message, {
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
      toast.error(data?.message, {
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
    <>
      <Navbar />
      <SideNav />
      <div className="pl-[300px] py-[5rem] md:pr-[10px] max-[1000px]:pl-[270px] max-[895px]:px-[10px]">
        <form
          action=""
          className="w-[600px] border-[#6b72804e] border-[.4px] rounded-lg p-5 bg-white shadow-xl max-w-[100%]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl text-black text-center font-semibold">
            Add Services
          </h1>

          <div className="input_fields flex flex-col gap-2 my-2">
            <label
              htmlFor="title"
              className="text-base text-black cursor-pointer font-medium"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="text-sm text-black py-[13px] px-[20px] w-[100%] rounded-lg border-[1.3px] border-[#6b72804b] focus:outline-blue-600"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input_fields flex flex-col gap-2 my-2">
            <label
              htmlFor="description"
              className="text-base text-black cursor-pointer font-medium"
            >
              Description
            </label>
            <textarea
              type="text"
              id="description"
              className="text-sm text-black py-[13px] px-[20px] w-[100%] rounded-lg border-[1.3px] border-[#6b72804b] focus:outline-blue-600"
              value={description}
              name="description"
              rows={5}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="input_fields flex flex-col gap-2 my-4">
            <label
              htmlFor="file"
              className="text-base text-black cursor-pointer font-medium w-[100%] h-[300px] rounded-lg border-[#6b72804b] border-[1.3px] overflow-hidden p-4"
            >
              <p className="text-xs text-black text-center">
                {image ? image.name : Preview}
              </p>

              {image ? (
                <img
                  src={image ? URL.createObjectURL(image) : image}
                  alt=""
                  className="w-[100%] h-[100%] object-contain bg-gray-300"
                />
              ) : (
                <img
                  src={Preview}
                  alt=""
                  className="w-[100%] h-[100%] object-contain bg-gray-300"
                />
              )}

              <input
                type="file"
                id="file"
                className="text-sm text-black py-[13px] px-[20px] w-[100%] rounded-lg border-[1.3px] border-[#6b72804b] focus:outline-blue-600 hidden"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-base font-medium text-white cursor-pointer py-[10px] px-[30px] rounded-lg">
            Add Now
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateServices;
