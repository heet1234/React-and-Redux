import React from "react";
import "./Home.css";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About </Link>
          <Link to="/store">Store </Link>
        </div>
        <div className="home_headerRight">
          <Link to="/gmail">Gmail </Link>
          <Link to="/images">Images </Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home_body">
        <img
          src="https://pngimg.com/uploads/google/google_PNG19631.png"
          alt="Google Logo"
        />
        <div className="home_inputContainer">
          <Search showButtons />
        </div>
      </div>
    </div>
  );
}

export default Home;
