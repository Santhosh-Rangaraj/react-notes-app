import "./App.css";
import NotepadHeader from "./Components/Notepad_header";
import AddNote from "./Components/AddNote";

function App() {
  return (
    <>
          <NotepadHeader />  
          <main>
            <AddNote />
          </main>
    </>
  );
}

export default App;
