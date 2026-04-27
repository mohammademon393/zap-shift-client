import { createBrowserRouter } from "react-router";
import RootsLayout from "../layouts/RootsLayout";
import Home from "../Pages/Home/home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Contact from "../Pages/Contact/Contact/Contact";
import Blog from "../Pages/Blog/Blog/Blog";
import Pricing from "../Pages/Pricing/pricing/Pricing";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import Services from "../Pages/Services/services/Services";

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
        Component: Services,
      },
      {
        path: "/coverage",
        Component: Coverage,
      },
      {
        path: "/aboutUs",
        Component: AboutUs,
      },
      {
        path: "/pricing",
        Component: Pricing,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
