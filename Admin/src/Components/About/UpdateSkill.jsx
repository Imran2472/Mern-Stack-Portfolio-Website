import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import SideNav from "../../Dashboard/SideNav";
import AppContext from "../../State/AppContext";
import { Bounce, toast } from "react-toastify";
import { useParams } from "react-router-dom";

function AddSkill() {
  const { reload, SingleSkill, UpdateSkill } = useContext(AppContext);
  const [title, setTitle] = React.useState("");
  const [icon, setIcon] = React.useState("");
  const [description, setDescription] = React.useState([]);
  const params = useParams();
  const id = params.id;
  const FindSkil = async () => {
    const data = await SingleSkill(id);
    setTitle(data?.skill?.title);
    setIcon(data?.skill?.icon);
    setDescription(data?.skill?.description);
  };
  useEffect(() => {
    FindSkil();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await UpdateSkill(title, icon, description, id);
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
      <div className="pl-[300px] py-[5rem] md:pr-[10px] max-[1000px]:pl-[270px] max-[895px]:px-[10px]">
        <form
          action=""
          className="w-[600px] border-[#6b72804e] border-[.4px] rounded-lg p-5 bg-white shadow-xl max-w-[100%]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl text-black text-center font-semibold">
            Update About page Text
          </h1>

          <div className="input_fields flex flex-col gap-2 my-2">
            <label
              htmlFor="title"
              className="text-base text-black cursor-pointer font-medium"
            >
              Sub Title
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
              htmlFor="icon"
              className="text-base text-black cursor-pointer font-medium"
            >
              Sub Title
            </label>
            <input
              type="text"
              id="icon"
              className="text-sm text-black py-[13px] px-[20px] w-[100%] rounded-lg border-[1.3px] border-[#6b72804b] focus:outline-blue-600"
              value={icon}
              name="icon"
              onChange={(e) => setIcon(e.target.value)}
            />
          </div>

          <div className="input_fields flex flex-col gap-2 my-4">
            <label
              htmlFor="description"
              className="text-base text-black cursor-pointer font-medium"
            >
              Description
            </label>
            <textarea
              type="text"
              id="description"
              className="text-sm text-black py-[13px] px-[20px] w-[100%] rounded-lg border-[1.3px] border-[#6b72804b] focus:outline-blue-600 resize-none"
              rows={5}
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-base font-medium text-white cursor-pointer py-[10px] px-[30px] rounded-lg">
            Update Now
          </button>
        </form>
      </div>
    </>
  );
}

export default AddSkill;
