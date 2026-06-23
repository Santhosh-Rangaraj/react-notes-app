import React from "react";
import "../styles/Cards.css";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

const Cards = () => {

const today = new Date().toLocaleDateString();

  return (
    <div className="cards-container"> 
    <div>
    <h4>Note Title</h4>
    <p className="card-description">Some Content appear Here...</p>
    </div>  
    <div className="card-footer">
        <p>{today}</p>
        <div>
        <ModeEditIcon className="edit-icon"></ModeEditIcon>
        <DeleteIcon className="delete-icon"></DeleteIcon>
        </div>
    </div>
    </div>
    );
};

export default Cards;