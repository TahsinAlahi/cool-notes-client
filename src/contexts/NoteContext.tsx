import { createContext, useContext, useEffect, useState } from "react";
import * as NotesApi from "../network/notes_funcs";

interface Context {
  notes: Note[];
  handleUpdateOrNewNote: (note: Note) => void;
}

const NoteContext = createContext<Context | undefined>(undefined);

function NoteProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function getNotes() {
      try {
        const data = await NotesApi.fetchNote();

        setNotes(data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }

    getNotes();
  }, []);

  function handleUpdateOrNewNote(note: Note) {
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  const value = { notes, handleUpdateOrNewNote };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}

export default NoteProvider;

export function useNoteContext() {
  const context = useContext(NoteContext);
  if (context === undefined)
    throw new Error("Context is used outside the provider");
  return context;
}