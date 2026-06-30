import React from "react";
import "../styles/search.css";

const Search = ({onTyped}:{onTyped:(value:string)=>void}) => {
  return (
    <div className="search-container">
      <h3>Search Notes</h3>
      <input type="text" placeholder="Search notes..." onChange={(e)=>onTyped(e.target.value)} />
    </div>
  );
};

export default Search;
