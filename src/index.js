import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import React from "react";
import { ModalState } from "./context/ModalState";
import { Gamestate } from "./context/Gamestate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalState>
    <Gamestate>
      <App />
    </Gamestate>
  </ModalState>
);
