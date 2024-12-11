import { useEffect, useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// dont delete this -- to access backend 
// import { noteKeeper_backend } from 'declarations/noteKeeper_backend';
import { noteKeeper_backend } from '../../declarations/noteKeeper_backend';
import styles from './Styles.module.css'

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      noteKeeper_backend.createNote(newNote.title, newNote.content)
      return [newNote, ...prevNotes];
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    //because async we need to await 
    const notesArray = await noteKeeper_backend.readNotes();
    setNotes(notesArray)
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      noteKeeper_backend.removeNote(id)
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className={styles.body}>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
