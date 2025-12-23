var minDeletionSize = function(strs) {
    const n = strs.length;
  const m = strs[0].length;

  const dp = new Array(m).fill(1);
  let best = 1;

  // canKeep(i, j): for all rows r, strs[r][i] <= strs[r][j]
  const canKeep = (i, j) => {
    for (let r = 0; r < n; r++) {
      if (strs[r][i] > strs[r][j]) return false;
    }
    return true;
  };

  for (let j = 0; j < m; j++) {
    for (let i = 0; i < j; i++) {
      if (canKeep(i, j)) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
    best = Math.max(best, dp[j]);
  }

  return m - best;
};

const x = minDeletionSize(["ghi","def","abc"])
x;