import Modal from "../components/createNoteModal";
import NoteCards from "../components/NoteCards";

interface Modal {
  type: "create" | "edit" | null;
  isOpen: boolean;
}

function Homepage() {
  function handleNoteModal() {}

  return (
    <div className="h-36 lg:mx-auto lg:max-w-screen-lg">
      <button></button>
      <NoteCards />
      {<Modal />}
    </div>
  );
}

export default Homepage;
