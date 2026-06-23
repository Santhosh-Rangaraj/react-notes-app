import React from "react";
import "../styles/NotesList.css";
import Cards from "./Cards";

const NotesList = () => {
  return (
    <div className="notes-list-container">
      <h3>Your Notes</h3>
    <div className="notes-list">
      <Cards></Cards>
        <Cards></Cards>
          <Cards></Cards>
            <Cards></Cards>
    </div>
    </div>
  );
};

export default NotesList;
