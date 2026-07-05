import "./App.css";
import NotepadHeader from "./Components/Notepad_header";
import AddNote from "./Components/AddNote";
import Footer from ".//Components/Footer";
import NotesSection from "./Components/NotesSection";
import { useState,useEffect } from "react";

export type Note = {
  id: string;
  title: string;
  content: string;
  date: string;
};

function App() {
  //states
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editNote, setEditNote] = useState<Note | null>(null);
  const [showAddNote, setShowAddNote] = useState<boolean>(false);

  useEffect(() => {
    // Load notes from localStorage on component mount
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
      setShowAddNote(true); // Show the AddNote component if there are stored notes
    }
  }, []);

  useEffect(() => {
    // Save notes to localStorage whenever they change
    if(showAddNote) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  // Filter notes based on the search term  {DERVIED STATE EXAMPLE...}
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleDelete = (note: Note) => {
    const remainingNote = notes.filter((data) => data.id !== note.id);
    setNotes(remainingNote);
  };

  const handleUpdate = (updatedNote: Note) => {
    const updatedNotes = notes.map((note) => (note.id === updatedNote.id ? updatedNote : note));
    setNotes(updatedNotes);
    setEditNote(null); // Clear the edit state after updating
  };

  return (
    <div className="app-container">
      <NotepadHeader />
      <main>
        <section className="main-container">
          <AddNote onAddNote={(noteData) => setNotes((prevNotes) => [...prevNotes, noteData])} editData={editNote} onUpdatedNote={handleUpdate} />
          <NotesSection
            onTyped={(term) => setSearchTerm(term)}
            onClickedNote={handleDelete}
            onEditData={(note) => setEditNote(note)}
            notes={filteredNotes}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
