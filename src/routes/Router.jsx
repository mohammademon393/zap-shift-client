import { createBrowserRouter } from "react-router";
import RootsLayout from "../layouts/RootsLayout";
import Home from "../Pages/Home/home/Home";
import Coverage from "../Pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootsLayout></RootsLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/services",
        Component: Coverage,
      },
      {
        path: "/coverage",
        Component: Coverage,
      },
      {
        path: "/aboutUs",
        Component: Coverage,
      },
      {
        path: "/pricing",
        Component: Coverage,
      },
      {
        path: "/blog",
        Component: Coverage,
      },
      {
        path: "/contact",
        Component: Coverage,
      },
    ],
  },
]);
