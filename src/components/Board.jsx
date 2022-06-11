import { useState, useEffect, useMemo } from "react";
import { useControls } from "leva";
import WoodsTile from "../models/WoodsTile";
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
        <WoodsTile key={i} position={piece} color={color} />
      ))}
    </>
  );
}

export default Board;
