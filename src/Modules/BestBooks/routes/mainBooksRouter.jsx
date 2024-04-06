import MainBooks from "../pages/MainBooks";
import { addBookRouter } from "./addBooksRouter";
import { booksRouter } from "./bookRouter";
import { editRouter } from "./editRouter";


export const mainBooksRouter = [
    {
      path: "/best-selling-books",
      element: <MainBooks />,
      children:[
        ...booksRouter,
        ...addBookRouter,
        ...editRouter
      ]
    },
  ];