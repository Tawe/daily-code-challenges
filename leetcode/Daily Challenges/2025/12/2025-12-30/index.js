var numMagicSquaresInside = function(grid) {
    const R = grid.length;
    const C = grid[0].length;
    let count = 0;

    for (let r = 0; r + 2 < R; r++) {
        for (let c = 0; c + 2 < C; c++) {
          if (isMagic3x3(grid, r, c)) count++;
        }
    }
    return count;
}

function isMagic3x3(g, r, c) {  
    if (g[r + 1][c + 1] !== 5) return false;

    const seen = new Array(10).fill(false);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const v = g[r + i][c + j];
            if (v < 1 || v > 9 || seen[v]) return false;
            seen[v] = true;
        }
    }

    const s = 15;
    for (let i = 0; i < 3; i++) {
        if (g[r + i][c] + g[r + i][c + 1] + g[r + i][c + 2] !== s) return false;
    }
    for (let j = 0; j < 3; j++) {
     if (g[r][c + j] + g[r + 1][c + j] + g[r + 2][c + j] !== s) return false;
    }
    if (g[r][c] + g[r + 1][c + 1] + g[r + 2][c + 2] !== s) return false;
    if (g[r][c + 2] + g[r + 1][c + 1] + g[r + 2][c] !== s) return false;

    return true;
}    

const x = numMagicSquaresInside([[4,3,8,4],[9,5,1,9],[2,7,6,2]])
x;