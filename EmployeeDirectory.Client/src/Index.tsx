import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/app/App";

import "./styles/normalize.scss";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
