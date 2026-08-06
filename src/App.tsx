import "./App.css";
import NotepadHeader from "./Components/Notepad_header";
import AddNote from "./Components/AddNote";
import Footer from ".//Components/Footer";
import NotesSection from "./Components/NotesSection";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";

export type Note = {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  pinNote: boolean;
};

function App() {
  //states
  const [notes, setNotes] = useState<Note[]>(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editNote, setEditNote] = useState<Note | null>(null);
  const [selectedSort, setSelectedSort] = useState<string>("All Notes");
  const [filterOption, setFilterOption] = useState({
    show: "All Notes",
    categories: [],
  });

  useEffect(() => {
    // Save notes to localStorage whenever they change
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Filter notes based on the search term  {DERVIED STATE EXAMPLE...}
  const filteredNotes = notes
    .sort((a:any, b:any) => b.pinNote - a.pinNote)
    .filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a:any, b:any) => {
      if(b.pinNote-a.pinNote){
        return b.pinNote-a.pinNote
      }
      else{
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
    }
    })
    .filter((note) => {
      if (filterOption.show === "All Notes") {
        return true;
      }
      if (filterOption.show === "Today") {
        const noteDate = new Date(note.date);
        const today = new Date();
        return (
          noteDate.getFullYear() === today.getFullYear() &&
          noteDate.getMonth() === today.getMonth() &&
          noteDate.getDate() === today.getDate()
        );
      }
      if (filterOption.show === "This Week") {
        const noteDate = new Date(note.date);
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
        const endoftheWeek = new Date(startOfWeek);
        endoftheWeek.setDate(endoftheWeek.getDate() + 6);
        return noteDate >= startOfWeek && noteDate <= endoftheWeek;
      }
      if (filterOption.show === "This Month") {
        const noteDate = new Date(note.date);
        const today = new Date();
        return (
          noteDate.getFullYear() === today.getFullYear() &&
          noteDate.getMonth() === today.getMonth()
        );
      }
      return true;
    })
    .filter((note) =>
      filterOption.categories.length > 0
        ? filterOption.categories.includes(note.category)
        : true,
    );

  const handleDelete = (note: Note) => {
    const remainingNote = notes.filter((data) => data.id !== note.id);
    setNotes(remainingNote);
  };

  const handleUpdate = (updatedNote: Note) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note,
    );
    setNotes(updatedNotes);
    setEditNote(null); // Clear the edit state after updating
  };

   const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error("ThemeContext must be used inside ThemeProvider");
  }
  
  const { theme } = context;

  return (
    <div className={`app-container ${theme}`}>
      <NotepadHeader />
      <main>
        <section className={`main-container`}>
          <AddNote
            onAddNote={(noteData) =>
              setNotes((prevNotes) => [...prevNotes, noteData])
            }
            editData={editNote}
            onUpdatedNote={handleUpdate}
          />
          <NotesSection
            onFiltered={(filter:any) => {
              setFilterOption(filter);
            }}
            filterValue={filterOption}
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
