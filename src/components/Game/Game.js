import React, { useEffect, useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { GAME_STATE, NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));

  useEffect(() => {
    console.info({ answer });
  }, [answer])

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
    setGuessList([]);
    setGameState(GAME_STATE.PLAYING);
    setAnswer(sample(WORDS));
  }

  return <>

    {guessList.length > 0 && <button onClick={resetGame}>Reset Game</button>}

    <GuessResults guessList={guessList} answer={answer} />

    {gameState === GAME_STATE.WIN && <HappyBanner guessCount={guessList.length} />}
    {gameState === GAME_STATE.LOSE && <SadBanner answer={answer} />}

    <GuessInput
      guess={guess}
      setGuess={setGuess}
      submitGuess={submitGuess}
      disabled={gameState !== GAME_STATE.PLAYING}
    />
  </>;
}

export default Game;
