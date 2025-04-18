import React, { useState } from "react";

import Header from "./header";
import Note from "./note";
import Footer from "./footer";
import CreateArea from "./createArea";


function App() {
    const [notes, setNotes] = useState([]);

// It returns a new array that includes all the previous notes (...prevNotes) and the new note (newNote).
// Purpose: This ensures that the new note is added to the existing list of notes without overwriting the previous ones.
  function addNote(newNote) {
    setNotes(prevNotes => {    
      return  [...prevNotes, newNote];
    });
  }

  // to delete notes
    function deleteNote(id) {
      setNotes(prevNotes => {
       return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {/* This dynamically displays all the notes
      stored in the notes array by rendering a <Note /> component for each one.
      */}

      { 
        notes.map((noteItem, index ) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote} />
           );
        }) 
      }
      <Footer />
    </div>
  )
}
export default App