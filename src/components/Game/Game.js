import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");

  const [guessList, setGuessList] = useState([]);

  function submitGuess() {
    // TODO: remove debug statement
    console.info({ guess });

    setGuessList([...guessList, guess]);

    setGuess("");
  }

  return <>
    <GuessResults guessList={guessList} />

    <GuessInput guess={guess} setGuess={setGuess} submitGuess={submitGuess} />
  </>;
}

export default Game;
