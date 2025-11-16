import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Team from "./pages/Team";
import Robots from "./pages/Robots";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import PastSeasons from "./pages/PastSeasons";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "competitions", element: <Programs /> },
      { path: "competitions/:id", element: <ProgramDetail /> },
      { path: "team", element: <Team /> },
      { path: "robots", element: <Robots /> },
      { path: "donate", element: <Donate /> },
      { path: "contact", element: <Contact /> },
      { path: "past-seasons", element: <PastSeasons /> },
      { path: "resources", element: <Resources /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
