import { useRef } from "react";
import * as NotesApi from "../network/notes_funcs";
import { useNoteContext } from "../contexts/noteContext";

function Modal({ handleNoteModal, noteModal }: ModalProps) {
  const { handleUpdateOrNewNote } = useNoteContext();

  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (noteModal.type === "create") {
      const res = await NotesApi.createNote({
        title: titleRef.current?.value as string,
        text: textRef?.current?.value,
      });
      handleUpdateOrNewNote(res, "create");

      handleNoteModal(null, false);
    }
  }

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 flex h-full max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50 md:inset-0">
        <div className="relative max-h-full w-full max-w-2xl p-2 lg:p-4">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {noteModal.type === "create" ? "Create Note" : "Update Note"}
              </h3>
              <button
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => handleNoteModal(null, false)}
              >
                <svg
                  className="h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form
              className="flex w-full flex-col items-center justify-between gap-2 border-b p-4 dark:border-gray-600 md:p-5"
              onSubmit={handleSubmit}
            >
              <div className="flex w-3/4 flex-col gap-1">
                <label htmlFor="" className="text-lg font-bold">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  required
                  className="w-full rounded-lg border border-gray-600 outline-none"
                  ref={titleRef}
                />
              </div>
              <div className="flex w-3/4 flex-col gap-1">
                <label htmlFor="" className="text-lg font-bold">
                  Text
                </label>
                <textarea
                  defaultValue=" "
                  placeholder="Note Text"
                  rows={5}
                  className="w-full rounded-lg border border-gray-600 outline-none"
                  ref={textRef}
                />
              </div>
              <button className="mt-4 rounded-2xl bg-blue-700 px-7 py-1 text-lg font-semibold text-white hover:bg-blue-800 md:px-12">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
