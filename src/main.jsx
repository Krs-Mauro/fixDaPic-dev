import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const createRoot = () =>
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

export default createRoot;
