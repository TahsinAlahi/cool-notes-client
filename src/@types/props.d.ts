type HandleNoteModal = (
  type: "create" | "update" | null,
  action: boolean,
) => void;

interface NoteCardsProps {
  handleNoteModal: HandleNoteModal;
}

interface CardProps extends NoteCardsProps {
  note: Note;
}

interface ModalProps extends NoteCardsProps {
  noteModal: {
    type: "create" | "update" | null;
    isOpen: boolean;
  };
}
