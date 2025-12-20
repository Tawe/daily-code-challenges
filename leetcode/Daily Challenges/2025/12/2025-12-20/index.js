var minDeletionSize = function(strs) {
    const n = strs.length;
    const m = strs[0].length;
    let deletions = 0;

    for (let c = 0; c < m; c++) {
        for (let r = 1; r < n; r++) {
            if (strs[r][c] < strs[r - 1][c]) {
                deletions++;
                break;
            }
        }
    }

    return deletions;

};

const x =minDeletionSize(["zyx","wvu","tsr"])
x;