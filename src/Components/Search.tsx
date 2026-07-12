import React from "react";
import "../styles/search.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const Search = ({onTyped}:{onTyped:(value:string)=>void}) => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search notes..." onChange={(e)=>onTyped(e.target.value)} />
      <div className="search-action">
      <FormControl className="sort-control">
        <InputLabel id="demo-simple-select-label">Sort:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={""}
          label="Age"
        >
          <MenuItem value={10}>All Notes</MenuItem>
          <MenuItem value={20}>Most Recent</MenuItem>
          <MenuItem value={30}>Oldest</MenuItem>
        </Select>
      </FormControl>
      <button style={{display:"flex", alignItems:"center"}}><FilterAltIcon />Filter</button>

      </div>
    </div>
  );
};

export default Search;
