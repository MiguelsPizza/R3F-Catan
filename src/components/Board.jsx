import { useState, useEffect, useRef, useMemo } from "react";
import { useControls } from "leva";
import KatanPiece from "../models/KatanPiece";
import { calculateBoardPositions } from "../helperFunctions/BoardSetupFunctions";

function Board() {
  const [tiles, setTiles] = useState([]);
  const { size, color } = useControls({ size: 45, color: "#4acf59" });

  const mappedPositions = useMemo(() => calculateBoardPositions(size), [size]);

  useEffect(() => {
    setTiles(mappedPositions);
  }, []);

  return (
    <>
      {tiles.map((piece, i) => (
        <KatanPiece key={i} position={piece} color={color} />
      ))}
    </>
  );
}

export default Board;
