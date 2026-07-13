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
  category:string;
  pinNote:boolean
};

function App() {
  //states
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editNote, setEditNote] = useState<Note | null>(null);
  const [showAddNote, setShowAddNote] = useState<boolean>(false);
  const[selectedSort,setSelectedSort]=useState<string>('All Notes');

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
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase())).sort((a, b) => {
    if (selectedSort === "Newest First") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (selectedSort === "Oldest First") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (selectedSort === "Title (A–Z)") {
      return a.title.localeCompare(b.title);
    } else if (selectedSort === "Title (Z–A)") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

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
          selectedSort={selectedSort}
            onTyped={(term) => setSearchTerm(term)}
            onSortChanged={(sort) => setSelectedSort(sort)}
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
