import Card from "./Card";
import { useNoteContext } from "../contexts/noteContext";

interface NoteCardsProps {
  handleNoteModal: (type: "create" | "update" | null, action: boolean) => void;
}

function NoteCards({ handleNoteModal }: NoteCardsProps) {
  const { notes } = useNoteContext();

  return (
    <div className="grid-col-1 grid min-h-14 w-full gap-4 px-3 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:px-0">
      {notes.map((note) => (
        <Card key={note._id} note={note} handleNoteModal={handleNoteModal} />
      ))}
    </div>
  );
}

export default NoteCards;
