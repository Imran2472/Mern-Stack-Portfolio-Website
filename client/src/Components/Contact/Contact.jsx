import React from "react";
import straightArrow from "../../assets/straight-srrow.png";
import darkArrow from "../../assets/arrow.png";
import { useState } from "react";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import AppContext from "../../Context/AppContext";
function Contact({ DarkMode }) {
  const { ContactAdd } = useContext(AppContext);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await ContactAdd(fullname, email, number, message);
    if (res.success == true) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    setFullname("");
    setEmail("");
    setNumber("");
    setMessage("");
  };

  return (
    <>
      {/* Hello world */}
      <div className={`${DarkMode && "dark"} py-[3rem] lg:px-[80px] px-[10px]`}>
        <div className="text-center">
          <p className="text-[17px] text-black dark:text-white font-light">
            Connect with me
          </p>
          <h1 className="dark:text-white text-black text-[40px] font-normal">
            Get in touch
          </h1>
          <div className="text-center w-[100%] flex flex-col items-center justify-center my-3">
            <p className="dark:text-white text-black text-[16px] font-light leading-[30px] lg:w-[50%]">
              I'd love to hear from you! If you have any questions, comments or
              feedback, please use the form below.
            </p>
          </div>
        </div>

        <form
          className="w-[650px] mx-auto max-w-[100%]"
          onSubmit={handleSubmit}
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-10 mb-8">
            <input
              type="text"
              placeholder="Enter your name"
              className="flex-1 p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#19002C] dark:border-white/90 text-black dark:text-white"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#19002C] dark:border-white/90 text-black dark:text-white"
              required=""
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-[100%] mb-8">
            <input
              type="text"
              placeholder="Enter your Number"
              className="flex-1 p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#19002C] dark:border-white/90 text-black dark:text-white w-[100%]"
              required=""
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <textarea
            rows={6}
            placeholder="Enter your message"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-[#19002C] dark:border-white/90 text-black dark:text-white"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent border-[#fff] dark:border-[0.5px] dark:hover:bg-[#2A004A]  dark:text-white"
          >
            Submit now
            <img
              src={DarkMode ? straightArrow : darkArrow}
              alt=""
              className="w-4"
            />
          </button>
          <p className="mt-4"></p>
        </form>
      </div>
    </>
  );
}

export default Contact;
