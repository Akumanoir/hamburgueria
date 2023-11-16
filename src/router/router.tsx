import App from "../App.tsx";
import { Menu, Loader as menuLoader } from "../pages/Menu.tsx";
import { Home } from "../pages/Home.tsx";
import { ItemModal, Loader as itemLoader } from "../pages/ItemModal.tsx";
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
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/menu/:id",
        element: <ItemModal />,
        loader: itemLoader
      }
    ],
  },
]);