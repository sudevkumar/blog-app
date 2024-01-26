import AllPost from "../components/AllPost";
import Loader from "../components/Loader";

const Home = ({ data, loading }) => {
  const sliceNum = 300;
  return (
    <div className="lg:w-[70%] md:w-[80%] w-[90%]  m-auto min-h-[63.2vh] h-auto mb-4">
      {loading ? (
        <Loader />
      ) : (
        data.map((ele, ind) => (
          <AllPost
            src={ele.photo}
            title={ele.title}
            username={ele.username}
            desc={ele.desc}
            id={ele._id}
            updatedAt={ele.updatedAt}
            sliceNum={sliceNum}
          />
        ))
      )}
    </div>
  );
};

export default Home;
