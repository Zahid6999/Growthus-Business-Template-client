import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import About from "../../Pages/About/About/About";
import Service from "../../Pages/Services/Service/Service";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Service />,
      },
    ],
  },
]);
