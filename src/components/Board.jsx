import { useState, useEffect, useMemo } from "react";
import { useControls } from "leva";
import WoodsTile from "../models/WoodsTile";
import { calculateBoardPositions } from "../helperFunctions/BoardSetupFunctions";

function Board() {
  const [tiles, setTiles] = useState([]);
  const { size } = useControls({ size: 45 });

  const mappedPositions = useMemo(() => calculateBoardPositions(size), [size]);

  useEffect(() => {
    setTiles(mappedPositions);
  }, []);

  return (
    <>
      {tiles.map((piece, i) => {// for some reason the color for all will be the last one. Not sure how to fix this yet
        console.log(piece);
        if (piece.tileType === "woods") {
          return <WoodsTile key={i} position={piece.position} color="green" />;
        } else if (piece.tileType === "ore") {
          return <WoodsTile key={i} position={piece.position} color="grey" />;
        } else if (piece.tileType === "stone") {
          return <WoodsTile key={i} position={piece.position} color="brown" />;
        } else if (piece.tileType === "sheep") {
          return <WoodsTile key={i} position={piece.position} color="white" />;
        } else if (piece.tileType === "wheat") {
          return <WoodsTile key={i} position={piece.position} color="yellow" />;
        } else {
          return (
            <WoodsTile key={i} position={piece.position} color="#f5f5f5" />
          );
        }
      })}
    </>
  );
}

export default Board;
