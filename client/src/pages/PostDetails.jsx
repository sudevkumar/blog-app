import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comments from "../components/Comments";

const PostDetails = () => {
  const desc =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit velquo blanditiis repellat et veritatis nobis nostrum, ratione voluptatum pariatur ipsum quasi iste magni ducimus. Saepe eaque ullam pariatur utin voluptatibus, perferendis ipsa illo nesciunt impedit isteconsectetur! Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quia ad error itaque voluptatibus blanditiis fuga voluptatum. Minimaobcaecati quam voluptatum quia cumque beatae esse doloribusaccusantium, dolorem quae blanditiis labore! Lorem ipsum dolor sitamet consectetur adipisicing elit. Pariatur est ipsa, cupiditateminus, sunt, commodi dolores id delectus cum libero temporibus laborererum iste. Praesentium delectus reprehenderit incidunt dolorumlaboriosam.";

  return (
    <div className="w-[90%] sm:w-[70%] m-auto min-h-[63.2vh] h-auto mb-4 mt-4">
      <div className="flex justify-between items-center">
        <h1 className=" text-2xl font-bold text-red-700 md:text-3xl">
          Title Of The Post
        </h1>
        <div className=" flex items-center justify-center space-x-2 ">
          <p>
            <BiEdit size={22} className=" text-green-500 cursor-pointer" />
          </p>
          <p>
            <MdDelete size={22} className=" text-red-500 cursor-pointer" />
          </p>
        </div>
      </div>
      <div className=" flex mb-2 text-sm font-semibold text-gray-500 items-center space-x-5 md:mb-4 mt-2">
        <p>Sudev Kumar @</p>
        <div className="flex space-x-5">
          <p>16/12/2024</p>
          <p>16.45</p>
        </div>
      </div>
      <div className="h-[400px] w-full">
        <img
          src="https://images.unsplash.com/photo-1519962551779-514fa155be9a?q=80&w=3197&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className=" flex mt-4 item-center gap-2">
        <p className=" py-1 text-gray-400">Categories:</p>
        <div className=" py-1 px-3 border rounded-lg border-red-400 text-rose-500 bg-rose-50">
          Tech
        </div>
        <div className=" py-1 px-3 border rounded-lg border-red-400 text-rose-500 bg-rose-50">
          Ai
        </div>
      </div>

      <div className=" w-full mt-4 text-gray-500 leading-6 text-start tracking-wide">
        <p>{desc}</p>
      </div>

      <div className=" flex flex-col gap-3">
        <h3 className=" mt-5 mb-4 font-semibold text-gray-400 text-2xl">
          Comments:
        </h3>

        <div className="min-h-0 max-h-[300px] overflow-y-scroll flex flex-col gap-3 scroll-smooth no-scrollbar">
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
        </div>
      </div>

      {/* Write  a new comment */}
      <div className=" flex flex-col mt-4 md:flex-row gap-2">
        <input
          type="text"
          name=""
          id=""
          className="md:w-[85%] outline-none mt-4 md:mt-0 border py-1 px-3 rounded-md placeholder:text-sm text-sm"
          placeholder="Write a comment..."
        />

        <button className=" py-1 px-3 bg-red-400 rounded-md text-sm text-white hover:text-red-400 hover:bg-white hover:border hover:border-red-400">
          Add Comment
        </button>
      </div>
    </div>
  );
};
export default PostDetails;
