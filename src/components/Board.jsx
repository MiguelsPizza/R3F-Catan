import { useState, useEffect, useRef } from "react";
import { useControls } from "leva";
import KatanPiece from "../models/KatanPiece";

function Board() {
  const [pieces, setPieces] = useState([]);
  const { size, color } = useControls({ size: 45, color: "#4acf59" });
  useEffect(() => {
    const positions = [];
    for (let i = -2; i <= 2; i++) {
      for (let j = -2; j <= 2; j++) {
        if (i + j < 3 && i + j > -3) {
          positions.push([i, j]);
        }
      }
    }

    setPieces(
      positions.map((pos) => {
        const [q, r] = pos;
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
