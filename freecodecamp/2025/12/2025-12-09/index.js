function mostFrequent(arr) {
  const count = {};
  let best = null;
  let bestCount = 0;

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    count[val] = (count[val] || 0) + 1;

    if (count[val] > bestCount) {
      bestCount = count[val];
      best = val;
    }
  }

  return best;
}


const x = mostFrequent(["a", "b", "a", "c"])
x;