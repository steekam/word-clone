import React from "react";

function GuessResults({guessList}) {
  return <div className="guess-results">
      {
        guessList.length > 0 && (
          guessList.map((guess, idx) => (
            <p key={idx} className="guess">{guess}</p>
          ))
        )
      }
  </div>;
}

export default GuessResults;
