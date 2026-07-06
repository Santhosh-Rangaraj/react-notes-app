import React from "react";
import "../styles/Notepad_header.css";
import DescriptionIcon from '@mui/icons-material/Description';
import BedtimeIcon from '@mui/icons-material/Bedtime';

// Primary:   #4F46E5
// Background:#F8FAFC
// Card:      #FFFFFF
// Border:    #E5E7EB
// Text:      #1F2937

const NotepadHeader = () => {
  return (
      <header className="header">
        <h1 className="header-title"> <span className="header-icon"> <DescriptionIcon ></DescriptionIcon></span> Notes App</h1>
        <button className="header-button"><BedtimeIcon /></button>
      </header>
  );
};

export default NotepadHeader;
