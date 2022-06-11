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
      {tiles.map((piece, i) => {
        switch (piece.tileType) {
          case "woods":
            return (
              <WoodsTile key={i} position={piece.position} color="green" />
            );
          case "ore":
            return (
            <WoodsTile key={i} position={piece.position} color="grey" />
            );
          case "brick":
            return (
              <WoodsTile key={i} position={piece.position} color="brown" />
            );
          case "sheep":
            return (
              <WoodsTile key={i} position={piece.position} color="white" />
            );
          case "wheat":
            return (
              <WoodsTile key={i} position={piece.position} color="yellow" />
            );
          case "desert":
            return (
              <WoodsTile key={i} position={piece.position} color="#f5f5f5" />
            );
          default:
            return null;
        }
      })}
    </>
  );
}

export default Board;
