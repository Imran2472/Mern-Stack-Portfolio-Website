import React from "react";
import Navbar from "../Navbar/Navbar";
import SideNav from "../../Dashboard/SideNav";
import { useState } from "react";
import { useContext } from "react";
import AppContext from "../../State/AppContext";
import { useEffect } from "react";
import { Bounce, toast } from "react-toastify";
import { useParams } from "react-router-dom";

function Home() {
  const { homeData, UpdateHome, reload, GetSingleHomw } =
    useContext(AppContext);
  //   console.log(homeData?.home);
  const [subtitle, setSubTitle] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [buttontext, setButtonText] = useState("");
  const [buttonlink, setButtonLink] = useState("");
  const [image, setimage] = useState(null);
  const [Preview, setPreview] = useState(null);
  const params = useParams();
  const id = params.id;

  const GetData = async () => {
    const res = await GetSingleHomw(id);
    setSubTitle(res?.home?.subtitle);
    setTitle(res?.home?.title);
    setDescription(res?.home?.description);
    setButtonText(res?.home?.buttontext);
    setButtonLink(res?.home?.buttonlink);
    image && setimage(res?.home?.image);
    setPreview(res?.home?.image);
  };
  useState(() => {
    GetData();
  }, [id, reload]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("subtitle", subtitle);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("buttontext", buttontext);
    formData.append("buttonlink", buttonlink);
    formData.append("image", image);

    const response = await UpdateHome(formData, id);
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
    <>
      <Navbar />
      <SideNav />
      <div className="pl-[300px] py-[5rem]">
        <form
          action=""
          className="w-[600px] border-[#6b72804e] border-[.4px] rounded-lg p-5 bg-white shadow-xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl text-black text-center font-semibold">
            Update Home page Text
          </h1>
          <div className="input_fields flex flex-col gap-2 my-2">
            <label
              htmlFor="subtitle"
              className="text-base text-black cursor-pointer font-medium"
            >
              Sub Title
            </label>
            <input
              type="text"
              id="subtitle"
              className="text-sm text-black py-[13px] px-[20px] w-[100%] rounded-lg border-[1.3px] border-[#6b72804b] focus:outline-blue-600"
              value={subtitle}
              name="subtitle"
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>
          <div className="input_fields flex flex-col gap-2 my-4">
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
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input_fields flex flex-col gap-2 my-4">
            <label
              htmlFor="Description"
              className="text-base text-black cursor-pointer font-medium"
            >
              Description
            </label>
            <textarea
              type="text"
              id="Description"
              className="text-sm text-black py-[13px] px-[20px] w-[100%] rounded-lg border-[1.3px] border-[#6b72804b] focus:outline-blue-600 resize-none"
              rows={5}
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="input_fields flex flex-col gap-2 my-4">
            <label
              htmlFor="buttontext"
              className="text-base text-black cursor-pointer font-medium"
            >
              Button Text
            </label>
            <input
              type="text"
              id="buttontext"
              className="text-sm text-black py-[13px] px-[20px] w-[100%] rounded-lg border-[1.3px] border-[#6b72804b] focus:outline-blue-600"
              name="buttontext"
              value={buttontext}
              onChange={(e) => setButtonText(e.target.value)}
            />
          </div>

          <div className="input_fields flex flex-col gap-2 my-4">
            <label
              htmlFor="buttonlink"
              className="text-base text-black cursor-pointer font-medium"
            >
              Button Link
            </label>
            <input
              type="text"
              id="buttonlink"
              className="text-sm text-black py-[13px] px-[20px] w-[100%] rounded-lg border-[1.3px] border-[#6b72804b] focus:outline-blue-600"
              name="buttonlink"
              value={buttonlink}
              onChange={(e) => setButtonLink(e.target.value)}
            />
          </div>

          <div className="input_fields flex flex-col gap-2 my-4">
            <label
              htmlFor="image"
              className="text-base text-black cursor-pointer font-medium w-[100%] h-[400px] rounded-lg border-[#6b72804b] border-[1.3px] overflow-hidden p-4"
            >
              <p className="text-xs text-black text-center">
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
              type="file"
              id="image"
              className="text-sm text-black py-[13px] px-[20px] w-[100%] rounded-lg border-[1.3px] border-[#6b72804b] focus:outline-blue-600 hidden"
              name="image"
              onChange={(e) => setimage(e.target.files[0])}
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-base font-medium text-white cursor-pointer py-[10px] px-[30px] rounded-lg">
            Update Now
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;
