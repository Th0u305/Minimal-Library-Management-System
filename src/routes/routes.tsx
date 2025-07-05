import App from "@/App";
import AllBooks from "@/pages/books/AllBooks";
import BookDetailsPage from "@/pages/books/BookDetails";
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
        element : <AllBooks/>,
      },
      {
        path : "/allBooks/:id",
        element : <BookDetailsPage/>
      }
    ],
  },
  {
    path: "/register",
  },
  {
    path: "/login",
  },
]);
