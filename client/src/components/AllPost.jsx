import { Link } from "react-router-dom";

const AllPost = ({
  key,
  id,
  src,
  title,
  username,
  desc,
  updatedAt,
  sliceNum,
}) => {
  return (
    <>
      <Link to={`/posts/post/${id}`}>
        <div className=" w-full flex flex-col mt-8 lg:space-x-4 cursor-pointer lg:flex-row">
          {/* Left */}

          <div className=" w-[100%] h-[250px] lg:w-[35%] lg:h-[200px]  flex justify-center items-center">
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>

          {/* Right */}

          <div className=" flex flex-col w-[100%] lg:w-[65%] mt-2">
            <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl text-red-500">
              {title.length > 52 ? title?.substring(0, 47) + "..." : title}
              {/* {title?.substring(0, 52)} */}
            </h1>
            <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center space-x-5 md:mb-4 ">
              <p>{username}@</p>
              <div className="flex space-x-5">
                <p>{new Date(updatedAt).toString().slice(0, 15)}</p>
                <p>{new Date(updatedAt).toString().slice(16, 21)}</p>
              </div>
            </div>
            {desc?.length > 300 ? (
              <p className=" text-gray-500 font-light leading-6 tracking-wide">
                {desc?.substring(0, sliceNum)}...
              </p>
            ) : (
              <p>{desc}</p>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default AllPost;
