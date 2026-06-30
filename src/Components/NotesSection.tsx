import React from "react";
import Search from "./Search";
import NotesList from "./NotesList";
import "../styles/NotesList.css";
import'../styles/Search.css';
import {type Note} from '../App'





const NotesSection = ({notes,onClickedNote,onTyped}:{notes:Note[], onClickedNote:(note: Note) => void,onTyped:(value:string)=>void}) => {
    return (
        <div style={{flex:1}}>
            <Search onTyped={onTyped} />
            <NotesList onClickedNote={onClickedNote} notes={notes} />
            </div>
    );
}   
export default NotesSection;