import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { homeRouter } from "./pages/routes/homeRouter";
import { mainProductsRouter } from "./Modules/Products/routes/mainProductsRouter";
import { categoriesRouter } from "./Modules/Categories/routes/categoreisRouter";
import { mainCommentsRouter } from "./Modules/Comments/routes/mainCommentsRouter";
import { mainContactRouter } from "./Modules/Contact/routes/mainContactRouter";
import { mainBooksRouter } from "./Modules/BestBooks/routes/mainBooksRouter";


export const router = createBrowserRouter([
    {
      path: "/Fay-dashboard/",
      element: <App />,
      children:[
        ...mainProductsRouter,
        ...categoriesRouter,
        ...mainCommentsRouter,
        ...mainContactRouter,
        ...mainBooksRouter
      ]
    },
  ]);