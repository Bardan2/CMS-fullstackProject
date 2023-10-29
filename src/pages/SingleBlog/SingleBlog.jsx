import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  //   deleteBlog...
  const deleteBlog = async () => {
    const response = await axios.delete("http://localhost:2000/blogs/" + id);
    if (response.status == 200) {
      //   alert("Deleted successfull");
      navigate("/");
    }
  };

  //   fetch single Blogs...
  const fetchSingleBlog = async () => {
    const response = await axios.get("http://localhost:2000/blogs/" + id);
    // console.log(response);
    if (response.status == 200) {
      setBlog(response.data.data);
    }
  };

  useEffect(() => {
    fetchSingleBlog();
  }, []);

  return (
    <div>
      <h1>{blog.title}</h1>
      <h3>{blog.subTitle}</h3>
      <h5>{blog.description}</h5>
      <button onClick={deleteBlog}>Delete</button>
    </div>
  );
};

export default SingleBlog;
