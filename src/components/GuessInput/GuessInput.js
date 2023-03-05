import React from "react";

function GuessInput({ guess, setGuess }) {

  function submitGuess(event) {
    event.preventDefault();

    console.info({ guess });

    setGuess("");
  }

  return <div>
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
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
