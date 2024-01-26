import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../utils/url";
import toast from "react-hot-toast";

const EditPage = () => {
  const [file, setFile] = useState("");
  const [cat, setCat] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cats, setCats] = useState([]);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const userInfo = JSON.parse(localStorage.getItem("token"));

  const addCategoryHandleer = () => {
    let updatedCat = [...cats];
    updatedCat.push(cat);
    setCat("");
    setCats(updatedCat);
  };

  const deleteCategoryHandleer = (e) => {
    let updatedCat = [...cats];

    const newF = updatedCat.filter((ele) => ele !== e);
    setCats(newF);
  };

  const fetchPostUpdatedData = async () => {
    try {
      const res = await axios.get(URL + `post/${id}`);
      setData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePost = async () => {
    const object = {
      title: title || data?.title,
      desc: desc || data?.desc,
      photo: file || data.photo,
      username: userInfo?.info?.username,
      userId: userInfo?.info?._id,
      categories: cats || data?.categories,
    };

    try {
      await axios.put(URL + `post/${id}`, object, {
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

  useEffect(() => {
    fetchPostUpdatedData();
  }, []);

  return (
    <div className="w-[90%] sm:w-[70%] m-auto min-h-[63.2vh] h-auto mb-4 mt-4">
      <h1 className=" font-bold md:text-3xl text-xl mt-8 text-red-400">
        Update post
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
          onChange={(e) => setTitle(e.target.value)}
          value={title || data?.title}
        />

        <input
          type="text"
          name=""
          id=""
          className=" w-[60%] outline-none rounded-sm border border-red-400 placeholder:text-red-400 text-red-400 py-1 px-3 placeholder:text-sm text-sm"
          value={file || data?.photo}
          onChange={(e) => setFile(e.target.value)}
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
          value={desc || data?.desc}
          id=""
          cols="30"
          rows="5"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>

        <button
          className=" py-2 px-3 border border-red-400 text-sm rounded-sm text-red-400 hover:border-none hover:bg-red-400 hover:text-white"
          onClick={handleUpdatePost}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditPage;
