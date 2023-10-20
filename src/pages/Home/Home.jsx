import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import axios from "axios";

const Home = () => {
  const [blogs, setBlog] = useState([]);

  // api call here

  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:2000/blogs");

    setBlog(response.data.blogs);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="card m-3" style={{ width: "18rem" }}>
        {blogs.map((blog) => {
          return (
            <div key={blog._id} className="card-body">
              <h4 className="card-title">{blog.title}</h4>
              <h5 className="card-title">{blog.subTitle}</h5>
              <p className="card-text">{blog.description}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
