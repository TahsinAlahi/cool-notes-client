import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import ErrorPage from "./Pages/ErrorPage";
import Homepage from "./Pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
