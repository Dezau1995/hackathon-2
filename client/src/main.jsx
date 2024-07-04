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
import Messagerie from "./pages/Messagerie/Messagerie";
import DirectMessage from "./pages/Messagerie/DirectMessage";

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
        loader:() => fetch(`http://192.168.1.251:8000/clients`),
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
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/request",
        element: <Request />,
      },
      {
        path: "/messagerie",
        element: <Messagerie />,
        loader:() => fetch(`http://192.168.1.251:8000/mentors`),
      },
    ],
  },
  {
    path:"/direct-message",
    element: <DirectMessage />,
    loader:() => fetch(`http://192.168.1.251:8000/mentors`),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
