import React from "react";
import "../styles/Notepad_header.css";
import DescriptionIcon from '@mui/icons-material/Description';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import SunnyIcon from '@mui/icons-material/Sunny';

// Primary:   #4F46E5
// Background:#F8FAFC
// Card:      #FFFFFF
// Border:    #E5E7EB
// Text:      #1F2937


const NotepadHeader = () => {
   const context = useContext(ThemeContext);

if (!context) {
  throw new Error("ThemeContext must be used inside ThemeProvider");
}

const { theme, setTheme } = context;

  return (
    <header className={`header ${theme}`}>
      <h1 className="header-title">
        {" "}
        <span className="header-icon">
          {" "}
          <DescriptionIcon></DescriptionIcon>
        </span>{" "}
        Notes App
      </h1>
      <button
        className="header-button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        { theme==='dark'?
        <BedtimeIcon />:
        <SunnyIcon></SunnyIcon>
}
      </button>
    </header>
  );
};

export default NotepadHeader;
