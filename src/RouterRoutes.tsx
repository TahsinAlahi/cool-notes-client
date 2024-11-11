import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);

export default router;
