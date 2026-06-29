import React from "react";
import Search from "./Search";
import NotesList from "./NotesList";
import "../styles/NotesList.css";
import'../styles/Search.css';
import {type Note} from '../App'





const NotesSection = ({notes}:{notes:Note[]}) => {
    console.log('notes: ', notes);
    return (
        <div style={{flex:1}}>
            <Search />
            <NotesList notes={notes} />
            </div>
    );
}   
export default NotesSection;