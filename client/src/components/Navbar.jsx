import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { UserContext } from "../context/userContext";
import toast from "react-hot-toast";

const Navbar = ({ setSearch, handleSearchResult, fetchAllPost }) => {
  const [menu, setMenu] = useState(false);
  const { user } = useContext(UserContext);
  const params = useLocation();
  const { logOut, setLogOut } = useContext(UserContext);
  const userInfo = JSON.parse(localStorage.getItem("token"));
  const userId = userInfo?.info?._id;
  const naviagte = useNavigate();

  const handleMenuOpen = () => {
    setMenu(!menu);
  };

  const handleLogOut = async () => {
    localStorage.removeItem("token");
    setLogOut(!logOut);
    naviagte("/");
    toast.success("Logout successfully!");
  };

  return (
    <>
      <div className=" flex items-center justify-between px-6 lg:px-[100px] lg:py-1 relative gap-2 p-1">
        <Link className="" to={"/"}>
          <img
            src="https://cdn.pixabay.com/photo/2015/01/21/13/20/blog-606684_640.png"
            alt=""
            onClick={fetchAllPost}
            className="h-[20px] md:h-[35px]"
          />
        </Link>

        {params.pathname === "/login" || params.pathname === "/register" ? (
          ""
        ) : (
          <div className=" flex justify-center items-center  space-x-0 cursor-pointer ">
            <input
              type="text"
              name=""
              id=""
              className=" outline-none px-3 py-1 placeholder:text-red-300 text-red-400"
              placeholder="Search a post..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className=" text-red-400" onClick={handleSearchResult}>
              <BsSearch size={24} />
            </span>
          </div>
        )}

        <div className="md:flex items-center justify-center space-x-2 md:space-x-10 hidden">
          {user ? (
            <>
              <Link to={"/write"}>
                <h3
                  className={`${
                    params.pathname === "/write"
                      ? "text-sm py-1 px-4 border-0 rounded-full bg-red-400 text-white"
                      : "text-sm py-1 px-4 border rounded-full text-red-400 hover:bg-red-400 hover:text-white cursor-pointer hover:border-0"
                  }`}
                >
                  Create a post
                </h3>
              </Link>
              <Link to={`/profile/${userId}`}>
                <h3
                  className={`${
                    params.pathname === `/profile/${userId}`
                      ? "text-sm py-1 px-4 border-0 rounded-full bg-red-400 text-white"
                      : "text-sm py-1 px-4 border rounded-full text-red-400 hover:bg-red-400 hover:text-white cursor-pointer hover:border-0"
                  }`}
                >
                  Profile
                </h3>
              </Link>

              <h2 className=" py-1 px-3 border rounded-full text-sm text-red-400">
                Hi, {userInfo?.info?.username}
              </h2>

              <h3
                className=" text-sm py-1 px-4 border rounded-full text-red-400 hover:bg-red-400 hover:text-white cursor-pointer hover:border-0"
                onClick={handleLogOut}
              >
                Log out
              </h3>
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

        <div
          className=" block md:hidden text-red-400 p-1 border rounded-md border-red-400 cursor-pointer"
          onClick={handleMenuOpen}
        >
          <RxHamburgerMenu size={22} />
        </div>
      </div>
      <hr className="border-[0.1px] border-red-400 " />
      {menu && (
        <div className=" absolute right-4 mt-1 w-[150px] rounded-md bg-white shadow-gray-400 shadow-md block md:hidden">
          {user ? (
            <>
              <Link to={"/write"}>
                <h3
                  className={`${
                    params.pathname === "/write"
                      ? " py-2 px-6  bg-red-400 text-white"
                      : "py-2 px-6  text-red-400  cursor-pointer "
                  }`}
                  onClick={() => setMenu(false)}
                >
                  Create a post
                </h3>
              </Link>
              <Link to={`/profile/${userId}`}>
                <h3
                  className={`${
                    params.pathname === `/profile/${userId}`
                      ? " py-2 px-6  bg-red-400 text-white"
                      : "py-2 px-6  text-red-400  cursor-pointer "
                  }`}
                  onClick={() => setMenu(false)}
                >
                  Profile
                </h3>
              </Link>

              <h3
                className={`${
                  params.pathname === "/write"
                    ? " py-2 px-6  bg-red-400 text-white"
                    : "py-2 px-6  text-red-400  cursor-pointer "
                }`}
                onClick={() => setMenu(false)}
              >
                Log Out
              </h3>
            </>
          ) : (
            <div className=" flex flex-col gap-0">
              <Link to={"/login"}>
                <h3
                  className={`${
                    params.pathname === "/login"
                      ? " py-2 px-6  text-red-400 bg-white"
                      : "py-2 px-6  bg-red-400 text-white  cursor-pointer "
                  }`}
                  onClick={() => setMenu(false)}
                >
                  Login
                </h3>
              </Link>
              {/* <hr /> */}
              <Link to={"/register"}>
                <h3
                  className={`${
                    params.pathname === "/login"
                      ? " py-2 px-6  text-red-400 bg-white"
                      : "py-2 px-6  bg-red-400 text-white  cursor-pointer "
                  }`}
                  onClick={() => setMenu(false)}
                >
                  Register
                </h3>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
