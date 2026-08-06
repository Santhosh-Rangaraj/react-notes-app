import { useEffect } from "react";
import "../styles/add_note.css";
import { useState } from "react";
import type { Note } from "../App";
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PushPinIcon from '@mui/icons-material/PushPin';

interface AddNoteProps {
  onAddNote: (noteData: { id: string; title: string; content: string; date: string,pinNote:boolean,category:string }) => void;
}

const AddNote = ({ onAddNote, editData, onUpdatedNote }: AddNoteProps & { editData: Note | null; onUpdatedNote: (updatedNote: Note) => void }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category,setCategory]=useState('');

  const [pinNote,setPinNote]=useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setContent(editData.content);
      setCategory(editData.category);
      setPinNote(editData.pinNote);
    }
  }, [editData]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const today = new Date().toISOString();
    if (editData) {
      const updatedNote: Note = {
        id: editData.id,
        title: title,
        content: content,
        date: today,
        category:category,
        pinNote:pinNote
      };
      onUpdatedNote(updatedNote);
      setOpenSnackbar(true);
      setTitle("");
      setContent("");
      setCategory('');
      setPinNote(false);
    } else {
      const noteData = {
        id: crypto.randomUUID(),
        title: title,
        content: content,
        date: today,
        category:category,
        pinNote:pinNote
      };
      onAddNote(noteData);
      setTitle("");
      setContent("");
      setCategory('');
      setPinNote(false);
      setOpenSnackbar(true);
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
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <FormControl className="category-control">
        <InputLabel id="demo-simple-select-label">Category:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value={"Work"}>🟣{""}Work</MenuItem>
          <MenuItem value={"Personal"}>🟢Personal</MenuItem>
          <MenuItem value={"Ideas"}>🟡Ideas</MenuItem>
          <MenuItem value={"Others"}>🔴Others</MenuItem>
        </Select>
      </FormControl>
      <div className="pin-container">
        <div>
        <input type="checkbox" checked={pinNote} id="important" onClick={()=>setPinNote(!pinNote)} />
        <span>Pin this note</span>
        </div>
        <div>
        <PushPinIcon className="pin-icon" />
        </div>
      </div>
        <button disabled={title.trim() === "" || content.trim() === ""|| category.trim() === ""} type="submit">
          <AddIcon /> {editData ? "Update Note" : "Add Note"}
        </button>
      </form>
  <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={() => setOpenSnackbar(false)}>
  <Alert
    onClose={() => setOpenSnackbar(false)}
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >
    Note {editData ? "updated" : "added"} successfully!
  </Alert>
</Snackbar>
    </div>
  );
};

export default AddNote