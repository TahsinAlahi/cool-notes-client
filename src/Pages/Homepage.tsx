import { useEffect, useState } from "react";

function Homepage() {
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

  return <div>Homepage</div>;
}

export default Homepage;
