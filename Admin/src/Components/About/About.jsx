import React from "react";
import Navbar from "../Navbar/Navbar";
import SideNav from "../../Dashboard/SideNav";
import { useState } from "react";
import { useContext } from "react";
import AppContext from "../../State/AppContext";
import { useEffect } from "react";
import { Bounce, toast } from "react-toastify";
import { useParams } from "react-router-dom";

function About() {
  const [aboutdescription, setAboutdescription] = useState("");
  const [image, setImage] = useState(null);
  const [Preview, setPreview] = useState(null);
  const { GetSingleAbout, UpdateAbout, reload } = useContext(AppContext);
  const params = useParams();
  const id = params.id;

  const GetData = async () => {
    const res = await GetSingleAbout(id);
    setAboutdescription(res?.about?.aboutdescription);
    image && setImage(res?.about?.image);
    setPreview(res?.about?.image);
  };
  useEffect(() => {
    GetData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("aboutdescription", aboutdescription);
    formData.append("image", image);
    const res = await UpdateAbout(formData, id);
    // Update home page text API call
    if (res.success == true) {
      toast.success(res?.message, {
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
      toast.error(res?.message, {
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
            Update About page Text
          </h1>

          <div className="input_fields flex flex-col gap-2 my-4">
            <label
              htmlFor="aboutdescription"
              className="text-base text-black cursor-pointer font-medium"
            >
              Description
            </label>
            <textarea
              type="text"
              id="aboutdescription"
              className="text-sm text-black py-[13px] px-[20px] w-[100%] rounded-lg border-[1.3px] border-[#6b72804b] focus:outline-blue-600 resize-none"
              rows={5}
              name="aboutdescription"
              value={aboutdescription}
              onChange={(e) => setAboutdescription(e.target.value)}
            ></textarea>
          </div>

          <div className="input_fields flex flex-col gap-2 my-4">
            <label
              htmlFor="file"
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
              id="file"
              className="text-sm text-black py-[13px] px-[20px] w-[100%] rounded-lg border-[1.3px] border-[#6b72804b] focus:outline-blue-600 hidden"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
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

export default About;
