import React from "react";

function GuessInput({ guess, setGuess, submitGuess }) {

  return <div>
    <form className="guess-input-wrapper" onSubmit={(e) => {
      e.preventDefault();
      submitGuess();
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        name="guess_input"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="\w{5,5}"
        autoComplete="off"
        required
      />
    </form>
  </div>;
}

export default GuessInput;
