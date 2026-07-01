import "./App.css";
import NotepadHeader from "./Components/Notepad_header";
import AddNote from "./Components/AddNote";
import Footer from './/Components/Footer'
import NotesSection from "./Components/NotesSection";
import { useState } from "react";

export type Note = {
  id: string;
  title: string;
  content: string;
  date: string;
};


function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editNote, setEditNote] = useState<Note | null>(null);
  console.log('editNote: ', editNote);

  const handleDelete=(note:Note)=>{
   const remainingNote= notes.filter((data)=>data.id !== note.id)
    setNotes(remainingNote)
  }

    const filteredNotes=notes.filter((note)=>note.title.toLowerCase().includes(searchTerm.toLowerCase()))  


  return (
    <div className="app-container">
          <NotepadHeader />  
          <main>
            <section className="main-container">
            <AddNote  onAddNote={(noteData) =>  setNotes(prevNotes => [...prevNotes, noteData])} editData={editNote} />
            <NotesSection onTyped={(term)=>setSearchTerm(term)} onClickedNote={handleDelete} onEditData={(note)=>setEditNote(note)} notes={filteredNotes} />
            </section>
          </main>
          <Footer/>
    </div>
  );
}

export default App;
