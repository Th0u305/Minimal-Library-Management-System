import App from "@/App";
import AddBook from "@/pages/books/AddBook";
import AllBooks from "@/pages/books/AllBooks";
import BookDetailsPage from "@/pages/books/BookDetails";
import BorrowBookPage from "@/pages/books/BorrowBooks";
import EditBooks from "@/pages/books/EditBooks";
import BorrowSummary from "@/pages/borrow/BorrowSummery";
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
      },
      {
        path : "/borrowSummary",
        element : <BorrowSummary/>
      },
      {
        path : "addBook",
        element : <AddBook/>
      },
      {
        path : "editBook/:id",
        element : <EditBooks/>
      },
      {
        path : "borrowBook/:id",
        element : <BorrowBookPage/>
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
