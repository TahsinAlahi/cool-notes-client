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
