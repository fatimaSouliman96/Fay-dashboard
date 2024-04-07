import { createHashRouter } from "react-router-dom";
import App from "./App";
import { mainProductsRouter } from "./Modules/Products/routes/mainProductsRouter";
import { categoriesRouter } from "./Modules/Categories/routes/categoreisRouter";
import { mainCommentsRouter } from "./Modules/Comments/routes/mainCommentsRouter";
import { mainContactRouter } from "./Modules/Contact/routes/mainContactRouter";
import { mainBooksRouter } from "./Modules/BestBooks/routes/mainBooksRouter";
import { logInRouter } from "./pages/Authentication/routes/logInRouter";
import { signUpRouter } from "./pages/Authentication/routes/signUpRouter";


export const router = createHashRouter ([
    {
      path: "main",
      element: <App />,
      children:[
        ...mainProductsRouter,
        ...categoriesRouter,
        ...mainCommentsRouter,
        ...mainContactRouter,
        ...mainBooksRouter
      ]
    },
    ...logInRouter,
    ...signUpRouter
  ]);