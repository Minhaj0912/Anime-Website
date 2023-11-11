import React from "react";
import Category from "./Category";
import SearchBar from "./SearchBar";
import SignUpButton from "./SignUpButton";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap-Icon importing
import * as Icon from "react-bootstrap-icons";

function NavBar() {
  return (
    <div id="nav-main">
      <nav className="navigation-bar">
        <ul>
          <Category />
          <a href="index.html">
            <img
              className="logo"
              src={require("C:/Users/91771/Desktop/anime-website/src/Photos/Logo.png")}
              alt=""
            />
          </a>
          <SearchBar />
          <a href="https://mangareader.to/" className="read-manga">
            <p>
              {" "}
              <Icon.BookFill /> Read manga{" "}
            </p>
          </a>
          <SignUpButton />
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
