import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Comments = () => {
  return (
    <>
      <div className=" p-2 px-5 bg-gray-200 rounded-lg">
        <div className=" flex items-center justify-between">
          <h3 className=" font-bold text-gray-600 text-sm">@Sudo</h3>
          <div className=" flex items-center space-x-4">
            <p className="text-sm text-gray-600">16/12/2024</p>
            <p className="text-sm text-gray-600">16.45</p>
          </div>

          <div className="flex gap-4">
            <p>
              <BiEdit size={22} className=" text-green-500 cursor-pointer" />
            </p>
            <p>
              <MdDelete size={22} className=" text-red-500 cursor-pointer" />
            </p>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-sm">Nice Info!</p>
        </div>
      </div>
    </>
  );
};

export default Comments;
