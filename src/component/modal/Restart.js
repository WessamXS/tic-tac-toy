import React, { useContext } from "react";

const Restart = () => {
 
  return (
    <div className="restart">
      <h3 className="restart__title">Restart Game?</h3>
      <div className="restart__btns">
        <button className="btn btn-sm" >
          no, cancal
        </button>
        <button className="btn btn-yellow btn-sm" >
          yes, restart
        </button>
      </div>
    </div>
  );
};

export default Restart;
