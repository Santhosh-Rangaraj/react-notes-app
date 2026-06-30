import React from "react";
import "../styles/Cards.css";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {type Note} from '../App'


const Cards = ({ note, onClickedNote }: { note: Note, onClickedNote: (note: Note) => void }) => {

const handleDelete = () => {
    onClickedNote(note);
  }

  return (
    <div className="cards-container"> 
    <div>
    <h4>{note.title}</h4>
    <p className="card-description">{note.content}</p>
    </div>  
    <div className="card-footer">
        <p>{note.date}</p>
        <div>
        <ModeEditIcon className="edit-icon"></ModeEditIcon>
        <DeleteIcon className="delete-icon" onClick={handleDelete} ></DeleteIcon>
        </div>
    </div>
    </div>
    );
};

export default Cards;