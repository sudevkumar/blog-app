import React, { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { URL } from "../utils/url";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    setLoading(true);
    if (!username || !email || !password || !confirmPassword) {
      setLoading(false);
      return toast.error("All fields are required!");
    }

    if (password && confirmPassword && password !== confirmPassword) {
      setLoading(false);
      return toast.error("Please check your password again!");
    }

    const object = {
      username,
      email,
      password,
    };

    try {
      const res = await axios.post(URL + "auth/register", object);
      if (res.status === 200) {
        toast.success("User register successfully!");
        navigate("/login");
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[63.2vh] flex justify-center items-center mb-4 h-auto mt-4">
      <div className=" flex flex-col space-y-4 w-[80%] md:w-[25%] border p-5 rounded-md border-red-400">
        <h1 className=" text-start text-red-500 text-xl">
          Register To Start Now!
        </h1>

        <input
          type="text"
          name=""
          id=""
          className="w-[100%] border border-red-400 py-1 px-3 placeholder:text-sm rounded-sm placeholder:text-red-400 text-red-400 outline-none text-sm"
          placeholder="Enter your user name..."
          onChange={(e) => setUserName(e.target.value)}
        />
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
        <input
          type={showPassword ? "text" : "password"}
          name=""
          id=""
          className="w-[100%] border border-red-400 py-1 px-3 placeholder:text-sm rounded-sm placeholder:text-red-400 text-red-400 outline-none text-sm"
          placeholder="Confirm your password..."
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          className={` bg-red-400 py-1 rounded-sm text-white hover:text-red-400 hover:bg-white hover:border-red-400 hover:border ${
            loading ? " cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handleRegister}
        >
          {loading ? "Loading" : "Register"}
        </button>

        <div className=" flex p-2 justify-center item-center gap-1">
          <p className=" text-red-400 text-[12px]">Already have an account?</p>
          <p className=" text-red-700 cursor-pointer text-[13px] underline">
            <Link to={"/login"}>Login Now!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
