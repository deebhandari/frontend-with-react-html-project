import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import RootLayout from "./layouts/RootLayouts";

import HomePage from "./Pages/NewHome";
import AboutPage from "./Pages/About";
import ServicesPage from "./Pages/Services";
import WorksPage from "./Pages/Works";
import BlogPage from "./Pages/Blog";
import ContactPage from "./Pages/Contact";
import UserDetailsPage from "./Pages/UserDetailsPage";

import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "works",
        element: <WorksPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "user/:id",
        loader: async ({ params }) => {
          return { params };
        },
        element: <UserDetailsPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);