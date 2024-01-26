import React, { useContext, useEffect, useState } from "react";
import AllPost from "../components/AllPost";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../utils/url";
import toast from "react-hot-toast";
import { UserContext } from "../context/userContext";

const Profile = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const { logOut, setLogOut } = useContext(UserContext);
  const { id } = useParams();
  const userInfo = JSON.parse(localStorage.getItem("token"));
  console.log(userInfo);
  const naviagte = useNavigate();

  const getUserPosts = async () => {
    try {
      const res = await axios.get(URL + `post/user/${id}`, {
        headers: {
          Authorization: userInfo.token,
          "Content-type": "application/json",
        },
      });
      setData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const object = {
    username: username || userInfo.info.username,
    email: email || userInfo.info.email,
  };

  const updateUserIformation = async () => {
    try {
      await axios.put(URL + `user/${id}`, object, {
        headers: {
          Authorization: userInfo?.token,
          "Content-type": "application/json",
        },
      });
      toast.success("Post updated successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  const handleDeleteUser = async () => {
    try {
      await axios.delete(URL + `user/${id}`, {
        headers: {
          Authorization: userInfo.token,
          "Content-type": "application/json",
        },
      });
      localStorage.removeItem("token");
      naviagte("/");
      setLogOut(!logOut);

      toast.success("User deleted successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <div className="w-[90%] sm:w-[70%] m-auto min-h-[63.2vh] h-auto mb-4 mt-4 flex md:flex-row flex-col-reverse gap-4">
      {
        <div className="w-[100%] md:w-[70%] m-auto min-h-[63.2vh] h-auto mb-4">
          <h1 className="mt-2 text-2xl text-red-400">Your Post</h1>
          {data.length === 0 ? (
            <p className=" text-sm text-red-700">You have no post yet</p>
          ) : (
            data.map((ele, ind) => (
              <AllPost
                src={ele.photo}
                title={ele.title}
                username={ele.username}
                desc={ele.desc}
                id={ele._id}
                updatedAt={ele.updatedAt}
                sliceNum={140}
              />
            ))
          )}
        </div>
      }

      <div className=" flex flex-col space-y-4 md:w-[30%] w-full">
        <h1 className="mt-2 text-2xl text-red-400">Profile</h1>
        <input
          className=" outline-none border border-red-400 text-sm placeholder:text-sm py-1 px-3 placeholder:text-red-400 rounded-sm"
          type="text"
          name=""
          id=""
          placeholder="Your user name..."
          onChange={(e) => setUserName(e.target.value)}
          value={username}
        />
        <input
          className=" outline-none border border-red-400 text-sm placeholder:text-sm py-1 px-3 placeholder:text-red-400 rounded-sm"
          type="email"
          name=""
          id=""
          placeholder="Your email id..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className=" flex gap-3">
          <button
            className=" py-2 px-3 border border-green-600 text-sm rounded-sm text-green-600 hover:border-none hover:bg-green-600 hover:text-white"
            onClick={updateUserIformation}
          >
            Update Profile
          </button>
          <button
            className=" py-2 px-3 border border-red-700 text-sm rounded-sm text-red-700 hover:border-none hover:bg-red-700 hover:text-white"
            onClick={handleDeleteUser}
          >
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
