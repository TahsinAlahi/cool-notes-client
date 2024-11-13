import { createContext, useContext, useEffect, useState } from "react";
import * as NotesApi from "../network/notes_funcs";

interface Context {
  notes: Note[];
  handleUpdateOrNewNote: (note: Note, method: string) => void;
  setEditNote: (note: Note | null) => void;
  editNote: Note | null;
  isNotesLoading: boolean;
  isNotesError: boolean;
}

const NoteContext = createContext<Context | undefined>(undefined);

function NoteProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editNote, setEditNote] = useState<Note | null>(null);
  const [isNotesLoading, setIsNotesLoading] = useState(false);
  const [isNotesError, setIsNotesError] = useState(false);

  useEffect(() => {
    async function getNotes() {
      setIsNotesLoading(true);
      setIsNotesError(false);
      try {
        const data = await NotesApi.fetchNote();
        setNotes(data);
      } catch (error) {
        setIsNotesError(true);
        console.log(error);
        alert(error);
      } finally {
        setIsNotesLoading(false);
      }
    }

    getNotes();
  }, []);

  function handleUpdateOrNewNote(note: Note, method: string) {
    if (method === "create") {
      setNotes((prevNotes) => [...prevNotes, note]);
    } else if (method === "delete") {
      setNotes((prevNotes) => prevNotes.filter((n) => n._id !== note._id));
    } else if (method === "update") {
      setNotes((prev) => prev.map((n) => (n._id === note._id ? note : n)));
    }
  }

  const value = {
    notes,
    handleUpdateOrNewNote,
    setEditNote,
    editNote,
    isNotesLoading,
    isNotesError,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}

export default NoteProvider;

export function useNoteContext() {
  const context = useContext(NoteContext);
  if (context === undefined)
    throw new Error("Context is used outside the provider");
  return context;
}
