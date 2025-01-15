import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./output.css";
import Portfolio from "./pages/Portfolio.tsx";
import { Analytics } from "@vercel/analytics/react";
import About from "./pages/About.tsx";

import SnipppWriteup from "./pages/projects/SnipppWriteup.tsx";
import { CV } from "./pages/CVPage.tsx";
import BrandPage from "./pages/BrandPage.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/portfolio/snippp",
    element: <SnipppWriteup />,
  },

  {
    path: "/cv",
    element: <CV />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/brand/:projectId?",
    element: <BrandPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Analytics />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
