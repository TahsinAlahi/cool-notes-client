import { useState } from "react";
import Modal from "../components/Modal";
import NoteCards from "../components/NoteCards";
import { useNoteContext } from "../contexts/noteContext";
import Loader from "../components/Loader";

interface Modal {
  type: "create" | "update" | null;
  isOpen: boolean;
}

function Homepage() {
  const { isNotesLoading, notes } = useNoteContext();

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

  if (isNotesLoading) return <Loader />;

  return (
    <div className="md:min-h-[calc(100vh-84px)] lg:mx-auto lg:max-w-screen-lg">
      <button
        className="mx-auto mb-4 block rounded-xl bg-blue-700 px-5 py-2 font-semibold text-white hover:bg-blue-800"
        onClick={() => handleNoteModal("create", true)}
      >
        All new note
      </button>
      {notes.length === 0 ? (
        <p className="mt-5 w-full text-center text-xl font-semibold">
          You don't have any notes yet
        </p>
      ) : (
        <NoteCards handleNoteModal={handleNoteModal} />
      )}

      {NoteModal.isOpen && (
        <Modal handleNoteModal={handleNoteModal} noteModal={NoteModal} />
      )}
    </div>
  );
}

export default Homepage;
