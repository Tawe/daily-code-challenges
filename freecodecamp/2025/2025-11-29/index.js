function getNextLocation(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let r1 = -1, c1 = -1;
  let r2 = -1, c2 = -1; 

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 1) {
        r1 = r;
        c1 = c;
      } else if (matrix[r][c] === 2) {
        r2 = r;
        c2 = c;
      }
    }
  }

  let dr = r2 - r1;
  let dc = c2 - c1;
  let tryR = r2 + dr;
  let tryC = c2 + dc;

  if (tryR < 0 || tryR >= rows) {
    dr = -dr; 
  }
  if (tryC < 0 || tryC >= cols) {
    dc = -dc; 
  }

   const nextR = r2 + dr;
  const nextC = c2 + dc;

  return [nextR, nextC];
}

const x = getNextLocation([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]])