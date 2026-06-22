import "./App.css";
import NotepadHeader from "./Components/Notepad_header";
import AddNote from "./Components/AddNote";
import Search from "./Components/Search";

function App() {
  return (
    <>
          <NotepadHeader />  
          <main>
            <section>
            <AddNote />
            </section>
            <section>
            <Search />
            </section>
          </main>
    </>
  );
}

export default App;
