import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const user = false;
  const params = useLocation();
  console.log(params);

  return (
    <>
      <div className=" flex items-center justify-between px-6 md:px-[200px] py-2">
        <Link className="" to={"/"}>
          <h1 className=" text-lg md:text-xl  font-semibold text-red-400 p-4">
            Blog Market
          </h1>
        </Link>

        {params.pathname === "/login" || params.pathname === "/register" ? (
          ""
        ) : (
          <div className=" flex justify-center items-center  space-x-0 cursor-pointer ">
            <span className=" text-red-400">
              <BsSearch size={24} />
            </span>
            <input
              type="text"
              name=""
              id=""
              className=" outline-none px-3 py-1 placeholder:text-red-300 text-red-400"
              placeholder="Search a post..."
            />
          </div>
        )}

        <div className=" flex items-center justify-center space-x-2 md:space-x-10">
          {user ? (
            <>
              <Link to={"/write"}>
                <h3 className=" py-2 px-6 border rounded-full text-red-400 hover:bg-red-400 hover:text-white cursor-pointer hover:border-0">
                  Create a post
                </h3>
              </Link>
              <Link to={"/profile"}>
                <h3 className=" py-2 px-6 border rounded-full bg-red-400 text-white hover:bg-white hover:text-red-400 cursor-pointer hover:border">
                  Profile
                </h3>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <h3
                  className={`${
                    params.pathname === "/login"
                      ? " py-2 px-6 border rounded-full bg-red-400 text-white"
                      : "py-2 px-6 border rounded-full text-red-400 hover:bg-red-400 hover:text-white cursor-pointer hover:border-0"
                  }`}
                >
                  Login
                </h3>
              </Link>
              <Link to={"/register"}>
                <h3
                  className={`${
                    params.pathname === "/register"
                      ? " py-2 px-6 border rounded-full bg-red-400 text-white"
                      : "py-2 px-6 border rounded-full text-red-400 hover:bg-red-400 hover:text-white cursor-pointer hover:border-0"
                  }`}
                >
                  Register
                </h3>
              </Link>
            </>
          )}
        </div>
      </div>

      <hr className="border-[0.1px] border-red-400 " />
    </>
  );
};

export default Navbar;
