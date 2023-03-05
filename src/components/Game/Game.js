import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { GAME_STATE, NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");

  const [guessList, setGuessList] = useState([]);

  const [gameState, setGameState] = useState(GAME_STATE.PLAYING);

  function submitGuess() {
    if (guessList.length === NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    console.info({ guess });

    const newGuessList = [...guessList, guess];
    setGuessList(newGuessList);

    if (guess === answer) {
      setGameState(GAME_STATE.WIN);
    } else if (newGuessList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameState(GAME_STATE.LOSE);
    }

    // Reset input
    setGuess("");
  }

  function resetGame() {
    window.location = window.location.href;
  }

  return <>
    <button onClick={resetGame}>Reset Game</button>
    <GuessResults guessList={guessList} answer={answer} />

    {gameState === GAME_STATE.WIN && <HappyBanner guessCount={guessList.length}/>}
    {gameState === GAME_STATE.LOSE && <SadBanner answer={answer}/>}

    <GuessInput
      guess={guess}
      setGuess={setGuess}
      submitGuess={submitGuess}
      disabled={gameState !== GAME_STATE.PLAYING}
    />
  </>;
}

export default Game;
