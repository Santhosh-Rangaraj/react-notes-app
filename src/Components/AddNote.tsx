import react, { useEffect } from "react";
import "../styles/add_note.css";
import { useState } from "react";
import type { Note } from "../App";
import AddIcon from '@mui/icons-material/Add';

interface AddNoteProps {
  onAddNote: (noteData: { id: string; title: string; content: string; date: string }) => void;
}

const AddNote = ({ onAddNote, editData, onUpdatedNote }: AddNoteProps & { editData: Note | null; onUpdatedNote: (updatedNote: Note) => void }) => {
  const [title, setTitle] = react.useState("");
  const [content, setContent] = react.useState("");

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setContent(editData.content);
    }
  }, [editData]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const today = new Date().toLocaleDateString();
    if (editData) {
      const updatedNote: Note = {
        id: editData.id,
        title: title,
        content: content,
        date: today,
      };
      onUpdatedNote(updatedNote);
      setTitle("");
      setContent("");
    } else {
      const noteData = {
        id: crypto.randomUUID(),
        title: title,
        content: content,
        date: today,
      };
      onAddNote(noteData);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="add-note-container">
      <h3>Add Note</h3>
      <form className="note-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Note Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <textarea
            id="content"
            name="content"
            placeholder="Write your note here..."
            rows={12}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button disabled={title.trim() === "" || content.trim() === ""} type="submit">
          <AddIcon /> {editData ? "Update Note" : "Add Note"}
        </button>
      </form>
    </div>
  );
};

export default AddNote;
