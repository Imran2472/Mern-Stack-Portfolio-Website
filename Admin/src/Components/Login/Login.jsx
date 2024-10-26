import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../../State/AppContext";
import { Bounce, toast } from "react-toastify";

function Login() {
  const { Login } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await Login(email, password);
    if (res.success) {
      window.location.href = "/";
      toast.success(res.message, {
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
      toast.error(res.message, {
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
    <div className="flex flex-col justify-center items-center w-[100%] h-[100vh]">
      <form
        action=""
        className="w-[500px] max-w-[100%] border shadow-lg bg-slate-50 rounded-lg p-[2rem] flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-[22px] font-medium text-slate-700">
          Sign in
        </h1>
        <div className="w-full">
          <div className="w-full">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2 w-full">
              <input
                id="email"
                type="email"
                placeholder="Enter Your email"
                autoComplete="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block flex-1 border-[1px] border-gray-400 bg-transparent py-[10px] pl-[1rem] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2 w-full">
              <input
                id="password"
                type="password"
                placeholder="Enter Your password"
                autoComplete="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block flex-1 border-[1px] border-gray-400 bg-transparent py-[10px] pl-[1rem] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full rounded-md"
              />
            </div>
          </div>
        </div>
        <button className="btn bg-blue-100 py-[10px] px-20px text-center">
          Login
        </button>
        <p className="text-center text-sm text-gray-500">
          <Link to="/forget-password">Forget Password </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
