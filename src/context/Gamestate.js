import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { calcbestmove, calcWinner } from "../helpers/Clacsquaers";
import { useModelContext } from "./ModalState";

const gamecontext = createContext();
export const Gamestate = (props) => {
  const context = useModelContext();

  const [screen, setscreen] = useState("start"); // start | game
  const [playmode, setplaymode] = useState("user"); // user | cpu
  const [activeuser, setactiveuser] = useState("x"); // x | o
  const [squares, setsquares] = useState(new Array(9).fill(""));
  const [xnext, setxnext] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winnerLine, setWinnerLine] = useState(null);
  const [ties, setTies] = useState({ x: 0, o: 0 });

  useEffect(()=>{
const curentuser = xnext ? 'o' : 'x' ;
if (playmode === 'cpu' && curentuser !=activeuser && !winner)
{
  nextcpu(squares);
}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[xnext,winner,screen])
  const changeplaymode = (mode) => {
    setplaymode(mode);
    setscreen("game");
  };
  const handelsquareclick = (ix) => {
    if (squares[ix]){
      return;
    }
    const currentuser = xnext ? "o" : "x";
    if (playmode === "cpu" && currentuser !== activeuser) {
      return;
    }
    let ns = [...squares];
    ns[ix] = !xnext ? "x" : "o";
    setsquares(ns);
    setxnext(!xnext);
    celckwinner(ns);
  };
  const celckwinner = (ns) => {
    const iswinner = calcWinner(ns);
    if (iswinner) {
      setWinner(calcWinner.winner);
      setWinnerLine(calcWinner.winnerLine);
      const ti = { ...ties };
      ti[calcWinner.winner] += 1;
      setTies(ti);
      context.showmodal();
      context.setmode("winner");
    }
  };
  const handelresalt =()=>{
    setsquares(new Array(9).fill(""));
    setxnext(false)
    setWinner(null)
    setWinnerLine(null)
    setactiveuser("x")
    setscreen("start")
    context.hidemodal()
    setTies({ x: 0, o: 0 })
  }
  const handelnextround =()=>{
    setsquares(new Array(9).fill(""));
    setxnext(winner === "x")
      setWinner(null)
    setWinnerLine(null)
    context.hidemodal()
  }
 const nextcpu =(s)=>{
const bestmove =calcbestmove(s , activeuser === "x" ?'o ' : 'x')
let ns = [...squares];
ns[bestmove] = !xnext ? "x" : "o";
setsquares(ns);
setxnext(!xnext);
// checkWinner(ns);
  }
  return (
    <gamecontext.Provider
      value={{
        screen,
        playmode,
        squares,
        activeuser,
        xnext,
        ties,
        winner,
        setTies,
        handelresalt,
        handelnextround,
        setactiveuser,
        handelsquareclick,
        setplaymode,
        changeplaymode,
      }}
    >
      {props.children}
    </gamecontext.Provider>
  );
};

export const useGamecontext = () => {
  return useContext(gamecontext);
};
