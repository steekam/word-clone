import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Guess from "../Guess";

function GuessResults({ guessList }) {
  return <div className="guess-results">
    {
      range(NUM_OF_GUESSES_ALLOWED).map((idx) => <Guess key={idx} value={guessList[idx] ?? ""}/>)
    }
  </div>;
}

export default GuessResults;
