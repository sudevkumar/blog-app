import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const CreatePost = () => {
  const [file, setFile] = useState("");
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);

  const addCategoryHandleer = () => {
    let updatedCat = [...cats];
    updatedCat.push(cat);
    setCat("");
    setCats(updatedCat);
  };

  const deleteCategoryHandleer = (e) => {
    let updatedCat = [...cats];
    console.log(updatedCat);
    const newF = updatedCat.filter((ele) => ele !== e);
    // updatedCat.splice(i);
    console.log(newF);
    setCats(newF);
  };

  //   const handleCreatePostHandler = (e) => {
  //     e.preventDefault();
  //   };

  return (
    <div className="w-[90%] sm:w-[70%] m-auto min-h-[63.2vh] h-auto mb-4 mt-4">
      <h1 className=" font-bold md:text-3xl text-xl mt-8 text-red-400">
        Create a post
      </h1>
      <div
        action=""
        className="w-[100%] mt-5 flex flex-col gap-3"
        // onSubmit={handleCreatePostHandler}
      >
        <input
          type="text"
          name=""
          id=""
          className=" w-[60%] outline-none rounded-sm border border-red-400 placeholder:text-red-400 text-red-400 py-1 px-3 placeholder:text-sm text-sm"
          placeholder="Enter post title..."
        />
        <div className="flex flex-col">
          <div className="flex items-center space-x-4 md:space-x-4">
            <input
              type="text"
              name=""
              id=""
              className=" w-[60%] outline-none rounded-sm border border-red-400 placeholder:text-red-400 text-red-400 py-1 px-3 placeholder:text-sm text-sm"
              placeholder="Enter post category..."
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            />

            <button
              className=" bg-red-400 text-white px-3 py-1 rounded-sm text-sm"
              onClick={addCategoryHandleer}
            >
              Add
            </button>
          </div>

          {/* All Categories */}

          <div className="flex gap-2">
            {cats.length > 0 &&
              cats.map((ele, ind) => (
                <>
                  <div
                    className=" flex items-center gap-3 py-1 rounded-sm bg-red-400 w-fit px-3 mt-4 text-white cursor-pointer"
                    key={ind}
                  >
                    <p>{ele}</p>
                    <p
                      className=" p-1 bg-white rounded-full text-red-600"
                      onClick={() => deleteCategoryHandleer(ele)}
                    >
                      <ImCross size={10} />
                    </p>
                  </div>
                </>
              ))}
          </div>
        </div>

        <textarea
          name=""
          className=" border border-red-400 rounded-sm placeholder:text-red-400 py-1 px-3 text-red-400 placeholder:text-sm text-sm outline-none"
          placeholder="Enter post description..."
          id=""
          cols="30"
          rows="5"
        ></textarea>

        <label
          className="text-sm border-red-400  py-1 p-3 w-fit cursor-pointer text-red-400 border hover:border-none hover:bg-red-400 hover:text-white rounded-sm"
          htmlFor="fileUpload"
        >
          <input
            type="file"
            className=" hidden"
            id="fileUpload"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {file === "" ? "Upload File" : file.name}
        </label>

        <button className=" py-2 px-3 border border-red-400 text-sm rounded-sm text-red-400 hover:border-none hover:bg-red-400 hover:text-white">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
