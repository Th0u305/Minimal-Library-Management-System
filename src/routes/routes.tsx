import App from "@/App";
import AllBooks from "@/pages/AllBooks";
import Home from "@/pages/Home/home";

import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allBooks",
        element : <AllBooks/>
      },
    ],
  },
  {
    path: "/register",
  },
  {
    path: "/login",
  },
]);
