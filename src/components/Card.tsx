import { useNoteContext } from "../contexts/noteContext";
import { deleteNote } from "../network/notes_funcs";
import { dateFormatter } from "../utils/dateFormatter";

function Card({ note, handleNoteModal }: CardProps) {
  const { handleUpdateOrNewNote, setEditNote } = useNoteContext();
  let createdUpdatedTime: string;

  function handleCardClick() {
    handleNoteModal("update", true);
    setEditNote(note);
  }

  if (note.updatedAt > note.createdAt) {
    createdUpdatedTime = "Updated: " + dateFormatter(note.updatedAt);
  } else {
    createdUpdatedTime = "Created: " + dateFormatter(note.createdAt);
  }

  async function handleDelete(e: any) {
    e.stopPropagation();
    try {
      await deleteNote(note);
      handleUpdateOrNewNote(note, "delete");
    } catch (err) {
      console.error(err);
      alert(err);
    }
  }

  return (
    <div
      className="flex h-56 w-full cursor-pointer flex-col rounded-lg border border-gray-200 bg-yellow-100/70 p-3 text-left shadow transition-shadow duration-150 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
      onClick={handleCardClick}
    >
      <div className="mb-3 flex items-center justify-between gap-5">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {note.title}
        </h5>
        <div
          className="group cursor-pointer rounded-lg border border-gray-500 p-1 duration-150 hover:bg-black"
          onClick={handleDelete}
        >
          <svg
            className="fill-black group-hover:fill-white"
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Delete Note</title>
            <path d="M8 26c0 1.656 1.343 3 3 3h10c1.656 0 3-1.344 3-3l2-16h-20l2 16zM19 13h2v13h-2v-13zM15 13h2v13h-2v-13zM11 13h2v13h-2v-13zM25.5 6h-6.5c0 0-0.448-2-1-2h-4c-0.553 0-1 2-1 2h-6.5c-0.829 0-1.5 0.671-1.5 1.5s0 1.5 0 1.5h22c0 0 0-0.671 0-1.5s-0.672-1.5-1.5-1.5z"></path>
          </svg>
        </div>
      </div>
      <p
        className="mb-2 flex-grow overflow-hidden whitespace-pre-line font-normal text-gray-700 dark:text-gray-400"
        style={{ maskImage: "linear-gradient(180deg, #000 60%, transparent)" }}
      >
        {note.text}
      </p>
      <div className="w-full border-t-2 border-yellow-800/20 py-1 pt-2 font-semibold text-gray-500">
        {createdUpdatedTime}
      </div>
    </div>
  );
}

export default Card;
//
