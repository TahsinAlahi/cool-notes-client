import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
