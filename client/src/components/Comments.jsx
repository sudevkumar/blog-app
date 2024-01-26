import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { URL } from "../utils/url";

const Comments = ({
  id,
  userId,
  author,
  comment,
  updatedAt,
  fetchPostComment,
  sendDataToParents,
}) => {
  const userInfo = JSON.parse(localStorage.getItem("token"));

  const handleDeleteComment = async () => {
    try {
      await axios.delete(URL + `comment/${id}`, {
        headers: {
          Authorization: userInfo.token,
          "Content-type": "application/json",
        },
      });
      fetchPostComment();
      toast.success("Comment deletd successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <div className=" p-2 px-5 bg-gray-200 rounded-lg">
        <div className=" flex items-center justify-between">
          <h3 className=" font-bold text-gray-600 text-sm">{author}</h3>
          <div className=" flex items-center space-x-4">
            <p className="text-sm text-gray-600">
              {new Date(updatedAt).toString().slice(0, 15)}
            </p>
            <p className="text-sm text-gray-600">
              {new Date(updatedAt).toString().slice(16, 21)}
            </p>
          </div>
          {userInfo?.info?._id === userId && (
            <div className="flex gap-4">
              <p onClick={() => sendDataToParents(id)}>
                <BiEdit size={22} className=" text-green-500 cursor-pointer" />
              </p>
              <p onClick={handleDeleteComment}>
                <MdDelete size={22} className=" text-red-500 cursor-pointer" />
              </p>
            </div>
          )}
        </div>
        <div className="mt-3">
          <p className="text-sm">{comment}</p>
        </div>
      </div>
    </>
  );
};

export default Comments;
