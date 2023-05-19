import react from "react";
import "./App.css";
import Board from "./component/board/Board";
import Modal from "./component/modal/Modal";

import Start from "./component/start/Start";
import { useGamecontext } from "./context/Gamestate";

function App() {
  const gamecontext = useGamecontext();
  return (
    <div className="App">
      <div className="container">
        {gamecontext.screen === "start" && <Start />}
        {gamecontext.screen === "game" && <Board />}
      </div>
      <Modal />
    </div>
  );
}

export default App;
