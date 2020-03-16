function triangularCoordsToCollumns(cube) {
  const col = cube.x;
  const row = cube.z + (cube.x - (cube.x**1)) / 2;

  return {col, row};
}

module.exports = triangularCoordsToCollumns;