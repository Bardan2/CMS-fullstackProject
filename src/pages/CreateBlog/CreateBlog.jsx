import { useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import "./CreateBlog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  //   first approach to use of useState Hook...
  //   const [title, setTitle] = useState("");
  //   const [subTitle, setSubTitle] = useState("");
  //   const [description, setDescription] = useState("");

  //   console.log(title, SubTitle, description);

  // fourth option to connect with API...
  const [data, setData] = useState({
    title: "",
    subTitle: "",
    description: "",
  });

  const createBlog = async (e) => {
    e.preventDefault();

    //  with useState Hooks...
    // const data = {
    //   title: title,     // Backend le layeko : StatusName
    //   subTitle: subTitle,
    //   description: description,
    // };

    // second approach to connect........without useState Hooks.....
    // const formData = new FormData(e.currentTarget); // {}

    // console.log(formData.get("title"), "FormData");

    // const data = {
    //   title: formData.get("title"),
    //   subTitle: formData.get("subTitle"),
    //   description: formData.get("description"),
    // };

    // third approach to connect.......without useState Hooks.......
    // const formData = new FormData(e.currentTarget); // {}
    // const data = Object.fromEntries(formData);

    // send above states data to api
    const response = await axios.post("http://localhost:2000/blogs", data);
    // console.log(response);
    if (response.status == 201) {
      alert(response.data.message);
      navigate("/");
    } else {
      alert("Somthing went wrong!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h3>Add Blogs</h3>
        <form onSubmit={createBlog}>
          <div className="form-group">
            <label htmlFor="title" className="title">
              Title :
            </label>
            <input
              //   onChange={(e) => setTitle(e.target.value)}  useState with hooks
              onChange={handleChange}
              type="text"
              id="title"
              name="title"
              placeholder="Enter title..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="subTitle" className="subTitle">
              Subtitle :
            </label>
            <input
              //   onChange={(e) => setSubTitle(e.target.value)}  with useState hooks
              onChange={handleChange}
              type="text"
              id="subTitle"
              name="subTitle"
              placeholder="Enter subtitle..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="description">
              Description:
            </label>
            <textarea
              //   onChange={(e) => setDescription(e.target.value)}  with useState hooks
              onChange={handleChange}
              id="description"
              name="description"
              rows="4"
              placeholder="Enter description..."
            ></textarea>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
