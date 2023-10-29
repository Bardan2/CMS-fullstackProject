import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="/">Logo</a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a onClick={() => navigate("/createBlog")}>CreateBlog</a>
          </li>
          {/* <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>  */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
