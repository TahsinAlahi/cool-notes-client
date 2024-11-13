async function fetchData(input: RequestInfo, init?: RequestInit) {
  const res = await fetch(input, init);

  if (res.ok) {
    return res;
  } else {
    const errorBody = await res.json();
    const errorMessage = errorBody.error;
    throw Error(errorMessage);
  }
}

export async function fetchNote(): Promise<Note[]> {
  const res = await fetchData("/api/notes", { method: "GET" });
  return res.json();
}

interface NoteInput {
  title: string;
  text?: string;
}

export async function createNote(note: NoteInput) {
  const res = await fetchData("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });

  return res.json();
}

export async function deleteNote(note: Note) {
  await fetchData(`/api/notes/${note._id}`, { method: "DELETE" });
}

export async function updateNote(_id: string, note: NoteInput): Promise<Note> {
  const res = await fetchData(`/api/notes/${_id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });

  return res.json();
}
