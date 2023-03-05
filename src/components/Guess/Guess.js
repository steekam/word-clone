import React from "react";

import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {

  const letterStates = checkGuess(value, answer);

  const cellValues = !value ? Array.from({ length: 5 }, () => ({})) : Array.from(value, (_, idx) => letterStates[idx]);

  return <div className="guess">
    {cellValues.map((cell, idx) => (<span key={idx} className={`cell ${cell?.status ?? ''}`}>{cell?.letter ?? ""}</span>))}
  </div>;
}

export default Guess;
