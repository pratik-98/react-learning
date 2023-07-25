import Square from "./Square";

interface BoardProps {
  xIsNext: boolean;
  squareStates: any[];
  onPlay: (nextSquareStates: any[]) => void;
}

function Board({ xIsNext, squareStates, onPlay }: BoardProps) {
  function handleSquareClick(i: number) {
    // you should treat arrays in React state as read-only.: https://react.dev/learn/updating-arrays-in-state
    // Why? -> https://react.dev/learn/tutorial-tic-tac-toe#why-immutability-is-important
    // but by mutating it doesn't work, why?
    if (calculateWinner(squareStates) || squareStates[i]) {
      return;
    }
    const nextSquareStates = squareStates.slice(); // deep copy array
    nextSquareStates[i] = xIsNext ? "X" : "O";
    onPlay(nextSquareStates);
  }

  const winner = calculateWinner(squareStates);
  let status;
  status = winner
    ? `Player '${winner}' won! Congrats!!!`
    : `Player ${xIsNext ? "'X'" : "'O'"}: your turn...`;

  return (
    <div>
      <div className={winner ? "alert alert-success" : "alert alert-info"}>
        {status}
      </div>
      <div className="container text-center">
        <div className="row">
          <Square
            givenMark={squareStates[0]}
            onSquareClick={() => handleSquareClick(0)}
          />
          <Square
            givenMark={squareStates[1]}
            onSquareClick={() => handleSquareClick(1)}
          />
          <Square
            givenMark={squareStates[2]}
            onSquareClick={() => handleSquareClick(2)}
          />
        </div>
        <div className="row">
          <Square
            givenMark={squareStates[3]}
            onSquareClick={() => handleSquareClick(3)}
          />
          <Square
            givenMark={squareStates[4]}
            onSquareClick={() => handleSquareClick(4)}
          />
          <Square
            givenMark={squareStates[5]}
            onSquareClick={() => handleSquareClick(5)}
          />
        </div>
        <div className="row">
          <Square
            givenMark={squareStates[6]}
            onSquareClick={() => handleSquareClick(6)}
          />
          <Square
            givenMark={squareStates[7]}
            onSquareClick={() => handleSquareClick(7)}
          />
          <Square
            givenMark={squareStates[8]}
            onSquareClick={() => handleSquareClick(8)}
          />
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
