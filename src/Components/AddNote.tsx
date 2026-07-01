import react from "react";
import "../styles/add_note.css";
import { useState } from "react";
import type { Note } from "../App";

interface AddNoteProps {
  onAddNote: (noteData: { id: string; title: string; content: string; date: string }) => void;
}

const AddNote = ({onAddNote, editData}: AddNoteProps & { editData: Note | null }) => {
  const [title, setTitle] = react.useState("");
  const [content, setContent] = react.useState('');
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const today = new Date().toLocaleDateString();

    const noteData={
      id: crypto.randomUUID(),
      title: title,
      content: content,
      date: today
    }
    onAddNote(noteData);
    setTitle("");
    setContent("");
  };

  return (
    <div className="add-note-container">
      <h3>Add Note</h3>
      <form className="note-form" onSubmit={handleSubmit}>
        <div>
          <input type="text" id="title" name="title"  placeholder="Note Title" value={title} onChange={(e) => {setTitle(e.target.value);}} />
        </div>
        <div>
          <textarea id="content" name="content"  placeholder="Write your note here..." rows={12} value={content} onChange={(e) => setContent(e.target.value)}/>
        </div>
        <button disabled={title.trim() === "" || content.trim() === ""} type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;