import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Category() {
  return (
    <li className="nav-items" id="categories">
      <div className="dropdown">
        <p className="dropdown-button">
          <i className="bi bi-grid-3x2-gap-fill"></i>
          {<i class="fa fa-bars" aria-hidden="true"></i>}
        </p>
        <div className="dropdown-content">
          <a href="#Action">Action</a>
          <a href="#Sci-Fi">Sci fi</a>
          <a href="#Adventure">Adventure</a>
          <a href="#Comedy">Comedy</a>
          <a href="#Horror">Horror</a>
          <a href="#Romance">Rommance</a>
          <a href="#Fantasy">Fantasy</a>
        </div>
      </div>
    </li>
  );
}

export default Category;
