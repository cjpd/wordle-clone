import React, { useContext } from "react";
import { AppContext } from "../App";
import { boardDefault } from "../Words";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    correctWord,
  } = useContext(AppContext);

  const handleRestart = () => {
    // Reset the board and other game state variables
    setBoard([...boardDefault]);
    // Reset other game state variables as needed (e.g., currAttempt, gameOver, etc.)
  };

  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
      <h2>Final Board State:</h2>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className="cell">
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default GameOver;
