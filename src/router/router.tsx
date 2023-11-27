import App from "../App.tsx";
import { HomePage } from "../pages/HomePage.tsx";
import { MenuPage, Loader as menuLoader } from "../pages/MenuPage.tsx";
import { ItemPage, Loader as itemLoader } from "../pages/ItemPage.tsx";
import {
  ShoppingCartPage,
  Loader as shoppingCartLoader,
} from "../pages/ShoppingCartPage.tsx";
import { InfoPage } from "../pages/InfoPage.tsx";
import { ErrorPage } from "../pages/ErrorPage.tsx";
import { createHashRouter } from "react-router-dom";

// , Loader as itemsOnPromotionLoader

export const router = createHashRouter([
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
        path: "/menu",
        element: <MenuPage />,
        loader: menuLoader,
      },
      {
        path: "/menu/:id",
        element: <ItemPage />,
        loader: itemLoader,
      },
      {
        path: "/ShoppingCart",
        element: <ShoppingCartPage />,
        loader: shoppingCartLoader,
      },
      {
        path: "/Info",
        element: <InfoPage />,
        loader: shoppingCartLoader,
      },
    ],
  },
]);