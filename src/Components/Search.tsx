import React from "react";
import "../styles/search.css";

const Search = () => {
  return (
    <div className="search-container">
      <h3>Search Notes</h3>
      <input type="text" placeholder="Search notes..." />
    </div>
  );
};

export default Search;
