import React from "react";

function SearchBar() {
  return (
    <li className="nav-items" id="search-bar">
      <div className="search-bar">
        <form className="d-flex searchBar" action="/" method="POST">
          <input
            className="form-control me-2"
            id="search-input"
            type="search"
            placeholder="Search anime..."
          />

          <button type="button" className="btn btn-secondary">
            <i className="fa fa-search"> </i>
          </button>
        </form>
      </div>
    </li>
  );
}

export default SearchBar;
