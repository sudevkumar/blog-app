import React, { useState } from "react";
import AllPost from "../components/AllPost";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-[90%] sm:w-[70%] m-auto min-h-[63.2vh] h-auto mb-4 mt-4 flex md:flex-row flex-col-reverse gap-4">
      <div className="w-[100%] md:w-[70%] m-auto min-h-[63.2vh] h-auto mb-4">
        <h1 className="mt-2 text-2xl text-red-400">Your Post</h1>
        <AllPost />
      </div>

      <div className=" flex flex-col space-y-4 md:w-[30%] w-full">
        <h1 className="mt-2 text-2xl text-red-400">Profile</h1>
        <input
          className=" outline-none border border-red-400 text-sm placeholder:text-sm py-1 px-3 placeholder:text-red-400 rounded-sm"
          type="text"
          name=""
          id=""
          placeholder="Your user name..."
        />
        <input
          className=" outline-none border border-red-400 text-sm placeholder:text-sm py-1 px-3 placeholder:text-red-400 rounded-sm"
          type="email"
          name=""
          id=""
          placeholder="Your email id..."
        />
        <input
          className=" outline-none border border-red-400 text-sm placeholder:text-sm py-1 px-3 placeholder:text-red-400 rounded-sm"
          type={showPassword ? "text" : "password"}
          name=""
          id=""
          placeholder="Your password..."
        />
        <div className=" flex p-1 text-sm items-center gap-1 text-red-400">
          <span className="" onClick={toggleShowPassword}>
            {showPassword ? <BiSolidHide /> : <BiSolidShow />}
          </span>
          <p className=" text-[12px]">
            {showPassword ? "Hide Password" : "Show passwod"}
          </p>
        </div>
        <div className=" flex gap-3">
          <button className=" py-2 px-3 border border-green-600 text-sm rounded-sm text-green-600 hover:border-none hover:bg-green-600 hover:text-white">
            Update Profile
          </button>
          <button className=" py-2 px-3 border border-red-700 text-sm rounded-sm text-red-700 hover:border-none hover:bg-red-700 hover:text-white">
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
