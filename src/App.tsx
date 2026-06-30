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
  console.log('notes: ', notes);

  const handleDelete=(note:Note)=>{
   const remainingNote= notes.filter((data)=>data.id !== note.id)
    setNotes(remainingNote)
  }

  const handleSearch=(term:string)=>{
    const filteredNotes=notes.filter((note)=>note.title.toLowerCase().includes(term))
    filteredNotes.length===0?setNotes(notes):setNotes(filteredNotes)
  }

  return (
    <div className="app-container">
          <NotepadHeader />  
          <main>
            <section className="main-container">
            <AddNote  onAddNote={(noteData) =>  setNotes(prevNotes => [...prevNotes, noteData])} />
            <NotesSection onTyped={handleSearch} onClickedNote={handleDelete} notes={notes} />
            </section>
          </main>
          <Footer/>
    </div>
  );
}

export default App;
