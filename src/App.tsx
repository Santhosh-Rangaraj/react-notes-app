import "./App.css";
import NotepadHeader from "./Components/Notepad_header";
import AddNote from "./Components/AddNote";
import Footer from './/Components/Footer'
import NotesSection from "./Components/NotesSection";


function App() {
  return (
    <>
          <NotepadHeader />  
          <main>
            <section className="main-container">
            <AddNote />
            <NotesSection />
            </section>
          </main>
          <Footer/>
    </>
  );
}

export default App;
