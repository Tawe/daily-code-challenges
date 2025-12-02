

function countTrapezoids(points) {
const MOD = 1_000_000_007n;
  const counts = new Map(); 
  for (const [x, y] of points) {
    const key = BigInt(y);
    counts.set(key, (counts.get(key) || 0n) + 1n);
  }

  const ways = [];
  for (const cnt of counts.values()) {
    if (cnt >= 2n) {
      const w = (cnt * (cnt - 1n)) / 2n;
      ways.push(w % MOD);
    }
  }

  if (ways.length < 2) return 0;

  let prefix = 0n;
  let ans = 0n;

  for (const w of ways) {
    ans = (ans + w * prefix) % MOD;
    prefix = (prefix + w) % MOD;
  }

  return Number(ans); 
}

const x = countTrapezoids([[1,0],[2,0],[3,0],[2,2],[3,2]])