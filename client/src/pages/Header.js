import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
        {/* Replace My Gallery text with logo image */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszDOiz-sKgCcjQG6-aW0iWSnK-TMCaTOFsQ&s"
            alt="Logo"
            style={{ height: "40px" }}
          />
        </Link>

        {/* Navbar Toggler for mobile view (Bootstrap 5 version) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar collapse containing the buttons */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Centered Nav Links */}
          <ul className="navbar-nav mx-auto">
            {/* Add any other links here if needed */}
          </ul>

          {/* Add Image Button */}
          <Link to="/add-image">
            <button className="btn btn-info my-3">Add Image</button>
          </Link>

          {/* Add Category Button */}
          <Link to="/add-category">
            <button className="btn btn-info mx-4 my-3">Add Category</button>
          </Link>

          {/* Login Button */}
          <Link to="/login">
            <button className="btn btn-info mx-2 my-3">Login</button>
          </Link>

          {/* Sign Up Button */}
          <Link to="/signup">
            <button className="btn btn-info mx-2 my-3">Sign Up</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
