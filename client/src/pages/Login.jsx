import React, { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full min-h-[51.8vh] sm:min-h-[63.2vh] flex justify-center items-center mb-2 h-auto mt-2">
      <div className=" flex flex-col space-y-4 w-[80%] md:w-[25%] border p-5 rounded-md border-red-400">
        <h1 className=" text-start text-red-400">Login To Your Account!</h1>
        <input
          type="email"
          name=""
          id=""
          className="w-[100%] border border-red-400 py-1 px-3 placeholder:text-sm rounded-sm placeholder:text-red-400 text-red-400 outline-none text-sm"
          placeholder="Enter your email id..."
        />

        <input
          type={showPassword ? "text" : "password"}
          name=""
          id=""
          className="w-[100%] border border-red-400 py-1 px-3 placeholder:text-sm rounded-sm placeholder:text-red-400 text-red-400 outline-none text-sm"
          placeholder="Enter your password..."
        />
        <div className=" flex p-1 text-sm items-center gap-1 text-red-400">
          <span className="" onClick={toggleShowPassword}>
            {showPassword ? <BiSolidHide /> : <BiSolidShow />}
          </span>
          <p className=" text-[12px]">
            {showPassword ? "Hide Password" : "Show passwod"}
          </p>
        </div>
        <button className=" bg-red-400 py-1 rounded-sm text-white hover:text-red-400 hover:bg-white hover:border-red-400 hover:border">
          Login
        </button>

        <div className=" flex p-2 justify-center item-center gap-1">
          <p className=" text-red-400 text-[12px]">Don't have an account?</p>
          <p className=" text-red-700 cursor-pointer text-[13px] underline">
            <Link to={"/register"}>Register Now!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
