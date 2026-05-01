import { createBrowserRouter } from "react-router";
import RootsLayout from "../layouts/RootsLayout";
import Home from "../Pages/Home/home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Contact from "../Pages/Contact/Contact/Contact";
import Blog from "../Pages/Blog/Blog/Blog";
import Pricing from "../Pages/Pricing/pricing/Pricing";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import Services from "../Pages/Services/services/Services";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Rider from "../Pages/Rider/Rider";
import SendPercel from "../Pages/SendPercel/SendPercel";
import ErrorPage from "../components/logo/ErrorPage/ErrorPage";

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
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
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
      {
        path: "/rider",
        element: (
          <PrivetRoute>
            <Rider></Rider>
          </PrivetRoute>
        ),
      },
      {
        path: "send-parcel",
        element: (
          <PrivetRoute>
            <SendPercel></SendPercel>
          </PrivetRoute>
        ),
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },

  // 2nd main layout
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
