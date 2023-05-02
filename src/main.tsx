import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/Styles/CssResets.scss";
import "../src/assets/Styles/Global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
