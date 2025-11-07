var maxPower = function (stations, r, k) {
  const n = stations.length;

  // 1) base power per city via prefix sums
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + stations[i];

  const base = new Array(n);
  for (let i = 0; i < n; i++) {
    const L = Math.max(0, i - r);
    const R = Math.min(n - 1, i + r);
    base[i] = prefix[R + 1] - prefix[L];
  }

  let minBase = Infinity;
  for (let x of base) if (x < minBase) minBase = x;

  function canReach(X) {
    let remaining = BigInt(k);             // k can be large
    const diff = new Array(n + 1).fill(0n);
    let addCover = 0n;

    for (let i = 0; i < n; i++) {
      addCover += diff[i];
      const current = BigInt(base[i]) + addCover;

      if (current < BigInt(X)) {
        const need = BigInt(X) - current;
        if (need > remaining) return false;
        remaining -= need;

        // place at the rightmost position that still covers city i
        const p = Math.min(i + r, n - 1);
        addCover += need;

        const end = p + r + 1;
        if (end < n) diff[end] -= need;
      }
    }
    return true;
  }

  // 2) binary search with a SAFE hi
  let lo = minBase;
  let hi = minBase + k; // <= each added station can raise any single city by at most +1
  let ans = lo;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (canReach(mid)) {
      ans = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return ans;
};
