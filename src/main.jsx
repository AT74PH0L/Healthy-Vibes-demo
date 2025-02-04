import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./routes/Router"; // Assuming this file exports the router

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
