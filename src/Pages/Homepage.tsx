import { useState } from "react";
import Modal from "../components/Modal";
import NoteCards from "../components/NoteCards";

interface Modal {
  type: "create" | "update" | null;
  isOpen: boolean;
}

function Homepage() {
  const [NoteModal, setNoteModal] = useState<Modal>({
    type: null,
    isOpen: false,
  });

  function handleNoteModal(type: "create" | "update" | null, action: boolean) {
    if (type === "create" && action) {
      setNoteModal({ type: "create", isOpen: true });
    } else if (type === "update" && action) {
      setNoteModal({ type: "update", isOpen: true });
    } else if (!action) {
      setNoteModal({ type: null, isOpen: false });
    }
  }

  return (
    <div className="h-36 text-center lg:mx-auto lg:max-w-screen-lg">
      <button
        className="mb-4 rounded-xl bg-blue-700 px-5 py-2 text-center font-semibold text-white hover:bg-blue-800"
        onClick={() => handleNoteModal("create", true)}
      >
        All new note
      </button>
      <NoteCards />
      {NoteModal.isOpen && (
        <Modal handleNoteModal={handleNoteModal} noteModal={NoteModal} />
      )}
    </div>
  );
}

export default Homepage;
