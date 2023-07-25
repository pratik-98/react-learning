import { useState } from "react";
import Board from "./Board";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const currSquareStates = history[currentMove];
  // At even nextMove, Player X will play and at Odd - Player O
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = (nextSquareStates: any[]) => {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      nextSquareStates,
    ]; // taking a slice of history from 0 to current move
    setHistory(nextHistory); // set history
    setCurrentMove(currentMove + 1); // set current move to latest current move
  };

  const goToMove = (nextMove: number) => {
    setCurrentMove(nextMove); // set current move to next move (on which user wants to go)
  };

  const listOfMovesMade = history.map((squareStates, move) => {
    let description =
      move > 0 ? `Go to move number: ${move}` : "Go to game start";

    return (
      <li key={move}>
        <button
          type="submit"
          className="btn btn-outline-dark"
          onClick={() => goToMove(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div>
      <Board
        xIsNext={xIsNext}
        squareStates={currSquareStates}
        onPlay={handlePlay}
      />
      <div>
        <h3>Game history:</h3>
        <ol>{listOfMovesMade}</ol>
      </div>
    </div>
  );
}

export default Game;
