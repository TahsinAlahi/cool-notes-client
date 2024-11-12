import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import NoteProvider from "./contexts/noteContext";

function AppLayout() {
  return (
    <NoteProvider>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </NoteProvider>
  );
}

export default AppLayout;
