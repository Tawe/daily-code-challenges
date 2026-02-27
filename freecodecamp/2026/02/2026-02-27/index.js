function shiftMatrix(matrix, shift) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const total = rows * cols;

    let k = shift % total;
    if (k < 0) k += total;

    const newMatrix = Array.from({ length: rows }, () => Array(cols));

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const newIndex = (r * cols + c + k) % total;
            const nr = Math.floor(newIndex / cols);
            const nc = newIndex % cols;
            newMatrix[nr][nc] = matrix[r][c];
        }
    }

    return newMatrix;
}

const x = shiftMatrix([[1, 2, 3], [4, 5, 6]], 1);
x;