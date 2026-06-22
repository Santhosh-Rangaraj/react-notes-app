import react from "react";
import "../styles/add_note.css";

const AddNote = () => {
  return (
    <div className="add-note-container">
      <h3>Add Note</h3>
      <form className="note-form">
        <div>
          <input type="text" id="title" name="title"  placeholder="Note Title"/>
        </div>
        <div>
          <textarea id="content" name="content"  placeholder="Write your note here..." rows={12}/>
        </div>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;