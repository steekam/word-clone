import React from "react";

function Guess({value}) {

  const cellValues = !value ? Array.from({length: 5}, () => "") : Array.from(value);

  return <div className="guess">
    {cellValues.map((character, idx) => (<span key={idx} className="cell">{character}</span>))}
  </div>;
}

export default Guess;
