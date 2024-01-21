import React from "react";

const AllPost = () => {
  const desc =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit velquo blanditiis repellat et veritatis nobis nostrum, ratione voluptatum pariatur ipsum quasi iste magni ducimus. Saepe eaque ullam pariatur utin voluptatibus, perferendis ipsa illo nesciunt impedit isteconsectetur! Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quia ad error itaque voluptatibus blanditiis fuga voluptatum. Minimaobcaecati quam voluptatum quia cumque beatae esse doloribusaccusantium, dolorem quae blanditiis labore! Lorem ipsum dolor sitamet consectetur adipisicing elit. Pariatur est ipsa, cupiditateminus, sunt, commodi dolores id delectus cum libero temporibus laborererum iste. Praesentium delectus reprehenderit incidunt dolorumlaboriosam.";

  return (
    <div className=" w-full flex mt-8 space-x-4 cursor-pointer">
      {/* Left */}

      <div className=" w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1519962551779-514fa155be9a?q=80&w=3197&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right */}

      <div className=" flex flex-col w-[65%] ">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl text-red-500">
          Title Of The Post
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center space-x-5 md:mb-4 ">
          <p>Sudev Kumar @</p>
          <div className="flex space-x-5">
            <p>16/12/2024</p>
            <p>16.45</p>
          </div>
        </div>
        {desc.length > 300 ? (
          <p className=" text-gray-500 font-light leading-6 tracking-wide">
            {desc.substring(0, 300)}...
          </p>
        ) : (
          <p>{desc}</p>
        )}
      </div>
    </div>
  );
};

export default AllPost;
