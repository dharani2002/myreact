import Square from "./Square"

import { Squares } from "../store";



export default function Board({
  xIsNext,
  squares,
  onPlay,
}: {
  xIsNext: boolean;
  squares: Squares;
  onPlay: (nextSquares: Squares) => void;
}) {
  const player = xIsNext ? "x" : "o";
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const status = calculateStatus(winner, turns, player);

  //game logic
  function calculateWinner(squares: Squares) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }

  //remove null values to find out remaining turns
  function calculateTurns(squares: Squares) {
    return squares.filter((square) => !square).length;
  }

  function calculateStatus(
    winner: "x" | "o" | null,
    turns: number,
    player: "x" | "o"
  ) {
    if (!winner && !turns) return "Draw";
    if (winner) return `Winner ${winner}`;
    return `Next player: ${player}`;
  }

  function handleClick(i: number) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    onPlay(nextSquares);
  }

  return (
    <>
      <div style={{ marginBottom: "0.5rem" }}>{status}</div>
      <div className="grid grid-cols-3 grid-rows-3 w-30 h-30 border border-gray-400">
        {squares.map((square, squareIndex) => (
          <Square
            key={squareIndex}
            value={square}
            onSquareClick={() => handleClick(squareIndex)}
          />
        ))}
      </div>
    </>
  );
}

// to check for the winner the board component would need to know the state of the 9 square components

//lets try to solve this using what we laready know,
//we can use prop drilling to react pass it board component state to square comonent which in return can pass to other board components
//we can use context api, use a context provider to solve this issue 