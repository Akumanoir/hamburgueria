import App from "./App.tsx";
import { Menu } from "./pages/Menu.tsx";
import { Home } from "./pages/home.tsx";
import { ErrorPage } from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom"


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
      },
    ],
  },
]);