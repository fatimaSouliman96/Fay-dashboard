import MainProducts from "../pages/MainProducts";
import { addProductRouter } from "./addProductRouter";
import { editProductRouter } from "./editProductsRouter";
import { productsRouter } from "./productsRouter";

export const mainProductsRouter = [
    {
      path: "main",
      element: <MainProducts />,
      children:[
        ...productsRouter,
        ...addProductRouter,
        ...editProductRouter
      ]
    },
  ];