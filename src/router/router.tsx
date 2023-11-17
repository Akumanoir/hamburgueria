import App from "../App.tsx";
import { HomePage } from "../pages/HomePage.tsx";
import { MenuPage, Loader as menuLoader } from "../pages/MenuPage.tsx";
import { ItemPage, Loader as itemLoader } from "../pages/ItemPage.tsx";
import {
  ShoppingCartPage,
  Loader as shoppingCartLoader,
} from "../pages/ShoppingCartPage.tsx";
import { ErrorPage } from "../pages/ErrorPage.tsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "menu",
        element: <MenuPage />,
        loader: menuLoader,
      },
      {
        path: "/menu/:id",
        element: <ItemPage />,
        loader: itemLoader,
      },
      {
        path: "ShoppingCart",
        element: <ShoppingCartPage />,
        loader: shoppingCartLoader,
      },
    ],
  },
]);