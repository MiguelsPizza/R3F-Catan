const calculateBoardPositions = (size) => {
  const positions = mockApiResponseForBoardPositions();
  const mappedPositions = positions.map((pos) => {
    const [q, r] = pos;
    return [
      ((q * 3) / 2) * size,
      0,
      size * ((Math.sqrt(3) / 2) * q + Math.sqrt(3) * r),
    ];
  });
  return mappedPositions;
};

const mockApiResponseForBoardPositions = () => {
  // This will be replaced with a real API call when we have one
  const positions = [];
  for (let i = -2; i <= 2; i++) {
    for (let j = -2; j <= 2; j++) {
      if (i + j < 3 && i + j > -3) {
        positions.push([i, j]);
      }
    }
  }
  return positions;
};

export { calculateBoardPositions };
