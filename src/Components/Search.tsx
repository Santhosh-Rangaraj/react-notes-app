import React from "react";
import "../styles/search.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { Divider, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { useEffect } from "react";

const Search = ({
  onTyped,
  onSortChanged,
  sortValue,
  filterValue,
  onFiltered,
}: {
  onTyped: (value: string) => void;
  onSortChanged: (value: string) => void;
  sortValue: string;
  // filterValue contains the current show filter and selected categories
  filterValue: { show: string; categories: string[] };
  onFiltered: (filter: { show: string; categories: string[] }) => void;
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [localFilter, setLocalFilter] = useState(filterValue);

useEffect(() => {
  setLocalFilter(filterValue);
}, [filterValue]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => onTyped(e.target.value)}
      />
      <div className="search-action">
        <FormControl className="sort-control">
          <InputLabel id="demo-simple-select-label">Sort:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortValue}
            label="Age"
            onChange={(e) => onSortChanged(e.target.value)}
          >
            <MenuItem value={"All Notes"}>All Notes</MenuItem>
            <MenuItem value={"Newest First"}>Newest First</MenuItem>
            <MenuItem value={"Oldest First"}>Oldest First</MenuItem>
            <MenuItem value={"Title (A–Z)"}>Title (A–Z)</MenuItem>
            <MenuItem value={"Title (Z–A)"}>Title (Z–A)</MenuItem>
          </Select>
        </FormControl>
        <button
          style={{ display: "flex", alignItems: "center" }}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <FilterAltIcon />
          Filter
        </button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          slotProps={{
            paper: {
              className: "filter-paper",
            },
          }}
        >
          <Typography className="filter-title">Filter Notes</Typography>
          <MenuList>
            <FormControl>
              <FormLabel id={`show-label`}>Show</FormLabel>
              <RadioGroup
                value={localFilter.show}
                onChange={(e) =>
                  setLocalFilter({
                    ...localFilter,
                    show: e.target.value,
                  })
                }
                aria-labelledby={`show-label`}
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="All Notes"
                  control={<Radio />}
                  label="All Notes"
                />
                <FormControlLabel
                  value="Today"
                  control={<Radio />}
                  label="Today"
                />
                <FormControlLabel
                  value="This Week"
                  control={<Radio />}
                  label="This Week"
                />
                <FormControlLabel
                  value="This Month"
                  control={<Radio />}
                  label="This Month"
                />
              </RadioGroup>
            </FormControl>
            <Divider />
            <FormLabel id={`category-label`}>Category</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={localFilter.categories.includes("Work")}
                    onChange={(e) =>
                      setLocalFilter({
                        ...localFilter,
                        categories: e.target.checked
                          ? [...localFilter.categories, "Work"]
                          : localFilter.categories.filter(
                              (category) => category !== "Work",
                            ),
                      })
                    }
                  />
                }
                label="Work"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={localFilter.categories.includes("Personal")}
                    onChange={(e) =>
                      setLocalFilter({
                        ...localFilter,
                        categories: e.target.checked
                          ? [...localFilter.categories, "Personal"]
                          : localFilter.categories.filter(
                              (category) => category !== "Personal",
                            ),
                      })
                    }
                  />
                }
                label="Personal"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={localFilter.categories.includes("Important")}
                    onChange={(e) =>
                      setLocalFilter({
                        ...localFilter,
                        categories: e.target.checked
                          ? [...localFilter.categories, "Important"]
                          : localFilter.categories.filter(
                              (category) => category !== "Important",
                            ),
                      })
                    }
                  />
                }
                label="Important"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={localFilter.categories.includes("Others")}
                    onChange={(e) =>
                      setLocalFilter({
                        ...localFilter,
                        categories: e.target.checked
                          ? [...localFilter.categories, "Others"]
                          : localFilter.categories.filter(
                              (category) => category !== "Others",
                            ),
                      })
                    }
                  />
                }
                label="Others"
              />
            </FormGroup>
          </MenuList>
          <div className="filter-actions">
            <button
              className="filter-button filter-action-cancel"
              onClick={() => {
                setAnchorEl(null);
                setLocalFilter({ show: 'All Notes', categories: [] });
              }}
              style={{ margin: "10px" }}
            >
              Cancel
            </button>
            <button
              className="filter-button filter-action-apply"
              onClick={() => {
                onFiltered(localFilter);
                setAnchorEl(null);
              }}
              style={{ margin: "10px" }}
            >
              Apply
            </button>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Search;
