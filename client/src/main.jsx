import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Form from "./pages/Form";
import Helpers from "./pages/Helpers";
import Appoimnt from "./pages/Appoimnt";
import Request from "./pages/Request";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/helpers",
        element: <Helpers />,
      },
      {
        path: "/appoimnt",
        element: <Appoimnt />,
      },
      {
        path: "/request",
        element: <Request />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
