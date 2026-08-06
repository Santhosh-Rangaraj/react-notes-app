import "../styles/NotesList.css";
import Cards from "./Cards";
import {type Note} from '../App'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const EmptyNotes=()=>{
  return (
  <div className="empty-notes-container">
    <DescriptionOutlinedIcon className="empty-notes-icon"/>
    <div className="empty-notes-heading">
      <h4>Notes Not Found...</h4>
      <p>Create your first note or try a different search.</p>
    </div>
  </div>
  )
}

const NotesList = ({notes, onClickedNote,onEditData}:{notes:Note[], onClickedNote:(note: Note) => void, onEditData: (note: Note) => void}) => {
  return (
    <div className="notes-list-container">
    <div className="notes-list-header">
      <h3>Your Notes</h3><p>{notes.length}</p>
    </div>
    <div className="notes-list">
      {notes.length===0? (<EmptyNotes></EmptyNotes>):(notes.map((note) => (
        <Cards onClickedNote={onClickedNote} onEditData={onEditData} key={note.id} note={note} />
      )))}
    </div>
    </div>
  );
};

export default NotesList;
