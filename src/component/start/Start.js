import React from "react";
import Xicon from '../icons/Xicon'
import Oicon from '../icons/Oicon'
import { useGamecontext } from "../../context/Gamestate";
const Start = () => {
  const startcontext =useGamecontext();
  return (
    <div className="start">
      <div className="start__header"><Xicon/>
      <Oicon/>
      </div>
      <div className="card shadow-gray">
        <h1 className="text-lg">Pick player 1'st mark</h1>
        <div className="start__players"> 
          <span className={startcontext.activeuser === "x" ? "start__players--active" : " "} onClick={()=>startcontext.setactiveuser("x")}><Xicon className="icon"/></span>
          <span className={startcontext.activeuser === "o" ? "start__players--active" : " "} onClick={()=>startcontext.setactiveuser("o")}><Oicon/></span>
        </div>
        <p className="text-light text-normal">remember: x goes first</p>
      </div>
      <div className="start__btns">
        <button className="btn btn-yellow" onClick={()=>startcontext.changeplaymode("cpu")}>new game (vs cpu)</button>
        <button className="btn btn-blue" onClick={()=>startcontext.changeplaymode("user")}>new game (vs palyer)</button>
      </div>
    </div>
  );
};

export default Start;
