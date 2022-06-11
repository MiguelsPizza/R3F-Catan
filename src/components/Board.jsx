import { useState, useEffect, useRef } from "react";
import { useControls } from "leva";
import KatanPiece from "../models/KatanPiece";

function Board() {
  const [pieces, setPieces] = useState([]);
  const { size, color } = useControls({ size: 45, color: "#4acf59" });
  useEffect(() => {
    const positions = [
      [0, 0],
      [1, 0],
      [0, 1],
      [-1, 1],
      [0, -1],
      [-1, 0],
      [1, -1],
    ];
    setPieces(
      positions.map((pos) => {
        const q = pos[0];
        const r = pos[1];
        return [
          ((q * 3) / 2) * size,
          0,
          size * ((Math.sqrt(3) / 2) * q + Math.sqrt(3) * r),
        ];
      })
    );
  }, []);

  return (
    <>
      {pieces.map((piece, i) => (
        <KatanPiece key={i} position={piece} color={color} />
      ))}
    </>
  );
}

export default Board;