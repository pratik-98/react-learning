interface SquareProps {
  givenMark: string;
  onSquareClick: () => void;
}

export default function Square({ givenMark, onSquareClick }: SquareProps) {
  return (
    <button
      type="submit"
      className="btn btn-lg btn-outline-primary btn-custom border"
      onClick={onSquareClick}
    >
      {givenMark}
    </button>
  );
}
