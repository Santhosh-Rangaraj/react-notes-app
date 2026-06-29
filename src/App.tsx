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

  return (
    <div className="app-container">
          <NotepadHeader />  
          <main>
            <section className="main-container">
            <AddNote onAddNote={(noteData) => setNotes([...notes, noteData])} />
            <NotesSection notes={notes} />
            </section>
          </main>
          <Footer/>
    </div>
  );
}

export default App;
