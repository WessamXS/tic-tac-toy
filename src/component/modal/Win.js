import React, { useContext } from "react";
import { useGamecontext } from "../../context/Gamestate";

import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";

const Win = () => {
  const startcontext = useGamecontext();
  return (
    <div className="score">
      <>
        <p>you win!</p>
      </>
       <h3 className="score__title ">
       {startcontext.winner === "x" ? <Xicon/> : <Oicon/>}
       Takes the round
       </h3>
       
      <div className="score__btns">
        <button className="btn btn-sm" onClick={startcontext.handelresalt}>Quit</button>
        <button className="btn   btn-sm " onClick={startcontext.handelnextround}>Next Round</button>
      </div>
    </div>
  );
};

export default Win;
