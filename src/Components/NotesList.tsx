import React from "react";
import "../styles/NotesList.css";
import Cards from "./Cards";
import {type Note} from '../App'

const NotesList = ({notes, onClickedNote}:{notes:Note[], onClickedNote:(note: Note) => void}) => {
  return (
    <div className="notes-list-container">
      <h3>Your Notes</h3>
    <div className="notes-list">
      {notes.length===0? (<p style={{fontSize:"1.5rem", "textAlign":"center",width:"100%"}}>There is no notes to view ...</p>):(notes.map((note) => (
        <Cards onClickedNote={onClickedNote} key={note.id} note={note} />
      )))}
    </div>
    </div>
  );
};

export default NotesList;
