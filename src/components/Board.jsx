import { useState, useEffect, useRef } from "react";
import { useControls } from "leva";
import KatanPiece from "../models/KatanPiece";
import funcs  from "../helperFunctions/BoardSetupFunctions";
const {mockApiResponseForBoardPositions, calculateBoardPositions} = funcs;


function Board() {
  const [pieces, setPieces] = useState([]);
  const { size, color } = useControls({ size: 45, color: "#4acf59" });
  useEffect(() => {
    const positions = mockApiResponseForBoardPositions();
    const mappeddPositions = calculateBoardPositions(positions, size);
    setPieces(mappeddPositions);
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




