import { createContext, useContext } from "react";

const NoteContext = createContext(null);

const value = null;

function NoteProvider({ children }: { children: React.ReactNode }) {
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}

export default NoteProvider;

export function useNoteContext() {
  const context = useContext(NoteContext);
  if (context === undefined)
    throw new Error("Context is used outside the provider");
  return context;
}
