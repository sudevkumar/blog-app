import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import EditPage from "./pages/EditPage";
import Profile from "./pages/Profile";
import ElementNotFound from "./pages/ElementNotFound";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "./utils/url";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const naviagte = useNavigate();
  const [loading, setLoading] = useState(false);

  const fetchAllPost = async () => {
    try {
      setLoading(true);
      const res = await axios.get(URL + "post");
      setData(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleSearchResult = async () => {
    try {
      setLoading(true);
      naviagte("/");
      const res = await axios.get(URL + `post?search=${search}`);
      setData(res?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPost();
  }, []);

  return (
    <div className="">
      <Navbar
        search={search}
        setSearch={setSearch}
        handleSearchResult={handleSearchResult}
        fetchAllPost={fetchAllPost}
      />
      <Toaster />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home data={data} setLoading={setLoading} loading={loading} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/write"
          element={<CreatePost fetchAllPost={fetchAllPost} />}
        />
        <Route path="/posts/post/:id" element={<PostDetails />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<ElementNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
