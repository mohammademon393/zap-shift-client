import { createBrowserRouter } from "react-router";
import RootsLayout from "../layouts/RootsLayout";
import Home from "../Pages/Home/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootsLayout></RootsLayout>,
    children: [
      {
        index: true,
        Component: Home,
      }
    ]
  }
]);
