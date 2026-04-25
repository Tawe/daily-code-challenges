const numIslands = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Set();
    let count = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1' && !visited.has(`${i},${j}`)) {
                count++;
                dfs(grid, i, j, visited);
            }
        }
    }

    return count;
};

const dfs = function(grid, i, j, visited) {
    visited.add(`${i},${j}`);
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (const [di, dj] of directions) {
        const newI = i + di;
        const newJ = j + dj;
        if (newI >= 0 && newI < grid.length && newJ >= 0 && newJ < grid[0].length && grid[newI][newJ] === '1' && !visited.has(`${newI},${newJ}`)) {
            dfs(grid, newI, newJ, visited);
        }
    }
};

const x = numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]);
x;