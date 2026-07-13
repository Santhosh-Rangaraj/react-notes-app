import React from "react";
import Search from "./Search";
import NotesList from "./NotesList";
import "../styles/NotesList.css";
import'../styles/Search.css';
import {type Note} from '../App'





const NotesSection = ({notes,onClickedNote,onTyped,onEditData,onSortChanged,selectedSort}:{notes:Note[], onClickedNote:(note: Note) => void,onTyped:(value:string)=>void, onEditData: (note: Note) => void, onSortChanged: (value:string) => void, selectedSort:string}) => {
    return (
        <div style={{flex:1}}>
            <Search onTyped={onTyped} onSortChanged={onSortChanged} sortValue={selectedSort} />
            <NotesList onClickedNote={onClickedNote} onEditData={onEditData} notes={notes} />
            </div>
    );
}   
export default NotesSection;