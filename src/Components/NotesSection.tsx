import React from "react";
import Search from "./Search";
import NotesList from "./NotesList";
import "../styles/NotesList.css";
import'../styles/Search.css';




const NotesSection = () => {
    return (
        <div style={{flex:1}}>
            <Search />
            <NotesList />
            </div>
    );
}   
export default NotesSection;