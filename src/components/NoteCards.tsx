import { useEffect, useState } from "react";
import Card from "./Card";

function NoteCards() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function getNotes() {
      try {
        const res = await fetch("/api/notes", { method: "GET" });
        const data = await res.json();

        setNotes(data);
      } catch (error) {
        console.log(error);
      }
    }

    getNotes();
  }, []);

  return (
    <div className="grid-col-1 grid min-h-14 w-full gap-4 px-3 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:px-0">
      {notes.map((note) => (
        <Card key={note._id} note={note} />
      ))}
    </div>
  );
}

export default NoteCards;
