import React from "react";
import { Link } from "react-router-dom";

const ElementNotFound = () => {
  return (
    <div className="w-full min-h-[63.2vh] h-auto mb-4 mt-4 flex justify-center items-center flex-col">
      <h1 className="text-4xl text-red-400">Page Not Found</h1>
      <Link to="/">
        {" "}
        <img
          src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-a-little-sorry-emoji-png-file-png-image_9192968.png"
          alt=""
          className=" w-[50px] h-[50px] mt-2"
        />
      </Link>
    </div>
  );
};

export default ElementNotFound;
