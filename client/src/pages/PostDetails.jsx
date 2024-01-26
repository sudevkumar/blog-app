import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import Loader from "../components/Loader";
import { URL } from "../utils/url";

const PostDetails = () => {
  const [data, setData] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [updateComment, setUpdateComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [updateComentId, setUpdateComentId] = useState("");

  const userInfo = JSON.parse(localStorage.getItem("token"));
  const logId = userInfo?.info?._id;
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchSinglePost = async () => {
    try {
      setLoading(true);
      const res = await axios.get(URL + `post/${id}`);
      setData(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  const handlePostDelete = async () => {
    try {
      await axios.delete(URL + `post/${id}`, {
        headers: {
          Authorization: userInfo.token,
          "Content-type": "application/json",
        },
      });
      navigate("/");
      toast.success("Post deletd successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  const object = {
    comment: comment,
    author: userInfo?.info?.username,
    postId: id,
    userId: userInfo?.info?._id,
  };

  const handleAddComment = async () => {
    try {
      const res = await axios.post(URL + "comment/create", object, {
        headers: {
          Authorization: userInfo.token,
          "Content-type": "application/json",
        },
      });
      setComment(res?.data);
      fetchPostComment();
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  const handleUpdateComment = async () => {
    const id = updateComentId;
    const object = {
      comment: updateComment,
    };
    console.log(id);
    try {
      await axios.put(URL + `comment/${id}`, object, {
        headers: {
          Authorization: userInfo.token,
          "Content-type": "application/json",
        },
      });
      setOpenEdit(false);
      fetchPostComment();
      toast.success("Comment updated successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const fetchPostComment = async () => {
    try {
      const res = await axios.get(URL + `comment/post/${id}`);
      setComments(res?.data);
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSinglePost();
  }, [id]);

  useEffect(() => {
    fetchPostComment();
  }, []);

  // Test

  const sendDataToParents = (id) => {
    setOpenEdit(true);
    setUpdateComentId(id);
  };

  return (
    <div className="w-[90%] sm:w-[70%] m-auto min-h-[63.2vh] h-auto mb-4 mt-4">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1 className=" text-2xl font-bold text-red-700 md:text-3xl">
              {data?.title}
            </h1>
            {data?.userId === logId && (
              <div className=" flex items-center justify-center space-x-2 ">
                <Link to={`/edit/${id}`}>
                  <p>
                    <BiEdit
                      size={22}
                      className=" text-green-500 cursor-pointer"
                    />
                  </p>
                </Link>
                <p onClick={handlePostDelete}>
                  <MdDelete
                    size={22}
                    className=" text-red-500 cursor-pointer"
                  />
                </p>
              </div>
            )}
          </div>
          <div className=" flex mb-2 text-sm font-semibold text-gray-500 items-center space-x-5 md:mb-4 mt-2">
            <p>{data?.username}@</p>
            <div className="flex space-x-5">
              <p>{new Date(data?.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(data?.updatedAt).toString().slice(16, 21)}</p>
            </div>
          </div>
          <div className="h-[400px] w-full">
            <img
              src={data?.photo}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className=" flex mt-4 item-center gap-2">
            <p className=" py-1 text-gray-400">Categories:</p>

            {data?.categories?.map((cat, ind) => (
              <div className=" py-1 px-3 border rounded-lg border-red-400 text-rose-500 bg-rose-50">
                {cat}
              </div>
            ))}
          </div>

          <div className=" w-full mt-4 text-gray-500 leading-6 text-start tracking-wide">
            <p>{data.desc}</p>
          </div>

          <div className=" flex flex-col gap-3">
            <h3 className=" mt-5 mb-4 font-semibold text-gray-400 text-2xl">
              Comments:
            </h3>

            <div className="min-h-0 max-h-[300px] overflow-y-scroll flex flex-col gap-3 scroll-smooth no-scrollbar">
              {comments.length === 0 ? (
                <p className=" text-sm text-red-600">
                  No comment yet in this post
                </p>
              ) : (
                comments.map((com, ind) => (
                  <Comments
                    author={com.author}
                    comment={com.comment}
                    updatedAt={com.updatedAt}
                    userId={com?.userId}
                    id={com?._id}
                    fetchPostComment={fetchPostComment}
                    sendDataToParents={sendDataToParents}
                  />
                ))
              )}
            </div>
          </div>

          {/* Write  a new comment */}
          {userInfo !== null && openEdit === false && (
            <div className=" flex flex-col mt-4 md:flex-row gap-2">
              <input
                type="text"
                name=""
                id=""
                className="md:w-[85%] outline-none mt-4 md:mt-0 border py-1 px-3 rounded-md placeholder:text-sm text-sm"
                placeholder="Write a comment..."
                onChange={(e) => setComment(e.target.value)}
              />

              <button
                className=" py-1 px-3 bg-red-400 rounded-md text-sm text-white hover:text-red-400 hover:bg-white hover:border hover:border-red-400"
                onClick={handleAddComment}
              >
                Add Comment
              </button>
            </div>
          )}

          {/* Update a commnet */}
          {userInfo !== null && openEdit === true && (
            <div className=" flex flex-col mt-4 md:flex-row gap-2">
              <input
                type="text"
                name=""
                id=""
                className="md:w-[84.3%] outline-none mt-4 md:mt-0 border py-1 px-3 rounded-md placeholder:text-sm text-sm"
                placeholder="Write a comment..."
                onChange={(e) => setUpdateComment(e.target.value)}
              />

              <button
                className=" py-1 px-3 bg-red-400 rounded-md text-sm text-white hover:text-red-400 hover:bg-white hover:border hover:border-red-400"
                onClick={handleUpdateComment}
              >
                Update Comment
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default PostDetails;
