export interface SquareProps{
    value:"x"|"o"|null;
    onSquareClick:()=>void
}

export default function Square({value,onSquareClick}:SquareProps) {
  return (
    <button
      className="inline-flex items-center justify-center bg-cyan-500 border-2 border-indigo-600 text-2xl font-bold"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

//each sqwuare component could manitain a part of game's state


