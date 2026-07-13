import React from "react";
import "../styles/search.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const Search = ({onTyped,onSortChanged,sortValue}:{onTyped:(value:string)=>void,onSortChanged:(value:string)=>void,sortValue:string}) => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search notes..." onChange={(e)=>onTyped(e.target.value)} />
      <div className="search-action">
      <FormControl className="sort-control">
        <InputLabel id="demo-simple-select-label">Sort:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortValue}
          label="Age"
          onChange={(e)=>onSortChanged(e.target.value)}
        >
          <MenuItem value={"All Notes"}>All Notes</MenuItem>
          <MenuItem value={"Newest First"}>Newest First</MenuItem>
          <MenuItem value={"Oldest First"}>Oldest First</MenuItem>
          <MenuItem value={"Title (A–Z)"}>Title (A–Z)</MenuItem>
          <MenuItem value={"Title (Z–A)"}>Title (Z–A)</MenuItem>
        </Select>
      </FormControl>
      <button style={{display:"flex", alignItems:"center"}}><FilterAltIcon />Filter</button>

      </div>
    </div>
  );
};

export default Search;
