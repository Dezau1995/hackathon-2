import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Form from "./pages/Form/Form";
import Request from "./pages/Request/Request";
import Mentor from "./pages/Mentor/Mentor";
import Listementors from "./pages/ListeMentors/Listementors";
import Formation from "./pages/Formation/Formation";
import Createaccount from "./pages/login/Createacount";
import Messagerie from "./pages/Messagerie/Messagerie";
import DirectMessage from "./pages/Messagerie/DirectMessage";

const api = "http://192.168.1.251:8000";

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
        loader: () => fetch(`http://192.168.1.251:8000/clients`),
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/mentors",
        element: <Listementors />,
      },
      {
        path: "/mentor/:id",
        element: <Mentor />,
        // loader: ({ params }) => fetch(`${api}/mentors/${params.id}`)
      },
      {
        path: "/request",
        element: <Request />,
      },
      {
        path: "/formations",
        element: <Formation />,
        loader: () => fetch(`${api}/trainings`),
      },
      {
        path: "/createacount",
        element: <Createaccount />,
      },
      {
        path: "/messagerie",
        element: <Messagerie />,
        // loader: () => fetch(`http://192.168.1.251:8000/mentors`),
      },
    ],
  },
  {
    path: "/direct-message",
    element: <DirectMessage />,
    // loader: () => fetch(`http://192.168.1.251:8000/mentors`),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
