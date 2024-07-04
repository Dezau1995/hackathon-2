import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Form from "./pages/Form/Form";
import Helpers from "./pages/Helpers/Helpers";
import Appointment from "./pages/Appointment/Appointment";
import Request from "./pages/Request/Request";
import Mentor from "./pages/Mentor/Mentor";

const api = "192.168.1.251:8000";

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
        path: "/mentors/:id",
        element: <Mentor />,
        loader: ({ params }) => fetch(`${api}/mentors/${params.id}`)
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/request",
        element: <Request />,
      },
    ],
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
