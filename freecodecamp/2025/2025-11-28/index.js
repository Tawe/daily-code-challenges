function compare(secret, guess) {
  const n = secret.length;
  const result = Array(n).fill("0");
    
  const freq = {};
  for (let i = 0; i < n; i++) {
    const ch = secret[i];
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let i = 0; i < n; i++) {
    if (guess[i] === secret[i]) {
      result[i] = "2";
      freq[guess[i]]--; 
    }
  }

  for (let i = 0; i < n; i++) {
    if (result[i] === "2") continue; 

    const ch = guess[i];
    if (freq[ch] > 0) {
      result[i] = "1";
      freq[ch]--;
    }
  }

  return result.join("");
}


const x = compare("APPLE", "POPPA");
x;