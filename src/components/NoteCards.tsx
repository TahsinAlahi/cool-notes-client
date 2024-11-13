import Card from "./Card";
import { useNoteContext } from "../contexts/noteContext";

function NoteCards({ handleNoteModal }: NoteCardsProps) {
  const { notes } = useNoteContext();

  return (
    <div className="grid-col-1 grid min-h-14 w-full gap-4 px-3 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:px-0">
      {notes.length === 0 ? (
        <p className="col-span-3 mt-5 w-full text-center text-xl font-semibold">
          You don't have any notes yet 🙂
        </p>
      ) : (
        notes.map((note) => (
          <Card key={note._id} note={note} handleNoteModal={handleNoteModal} />
        ))
      )}
    </div>
  );
}

export default NoteCards;
