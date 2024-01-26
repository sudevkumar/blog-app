import React, { useContext, useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { URL } from "../utils/url";

import { UserContext } from "../context/userContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    setLoading(true);
    if (!email || !password) {
      setLoading(false);
      return toast.error("All fields are required!");
    }

    const object = {
      email,
      password,
    };

    try {
      const res = await axios.post(URL + "auth/login", object);
      if (res?.status === 200) {
        toast.success("User register successfully!");
        setUser(res?.data);
        console.log(res?.data);
        localStorage.setItem(
          "token",
          JSON.stringify({ token: res?.data?.token, info: res?.data?.user })
        );
        navigate("/");
        setEmail("");
        setPassword("");
      }
      setLoading(false);
    } catch (error) {
      if (error?.response?.status === 500) {
        setLoading(false);
        return toast.success("User is already registered!");
      }
      console.log(error);
      setLoading(false);
    }
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
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type={showPassword ? "text" : "password"}
          name=""
          id=""
          className="w-[100%] border border-red-400 py-1 px-3 placeholder:text-sm rounded-sm placeholder:text-red-400 text-red-400 outline-none text-sm"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className=" flex p-1 text-sm items-center gap-1 text-red-400">
          <span className="" onClick={toggleShowPassword}>
            {showPassword ? <BiSolidHide /> : <BiSolidShow />}
          </span>
          <p className=" text-[12px]">
            {showPassword ? "Hide Password" : "Show passwod"}
          </p>
        </div>
        <button
          onClick={handleLogin}
          className={` bg-red-400 py-1 rounded-sm text-white hover:text-red-400 hover:bg-white hover:border-red-400 hover:border ${
            loading ? " cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {loading ? "Loading..." : "Login"}
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
