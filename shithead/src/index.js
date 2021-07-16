import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GameBoard from "./components/GameBoard";
import { observe } from "./components/Game";

observe((cardPosition) =>
  ReactDOM.render(
    <React.StrictMode>
      <GameBoard cardPosition={cardPosition} />
    </React.StrictMode>,
    document.getElementById("root")
  )
);
