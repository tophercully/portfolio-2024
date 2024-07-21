import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./output.css";
import Portfolio from "./pages/Portfolio.tsx";
import CVPage from "./pages/cv.tsx";
import { Background } from "./components/global/Background.tsx";
import About from "./pages/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Background />
        <App />
      </>
    ),
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/cv",
    element: <CVPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
