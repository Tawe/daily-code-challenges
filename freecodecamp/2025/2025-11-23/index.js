function countCharacters(sentence) {
  const freq = {};

  for (const ch of sentence.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z') {
      freq[ch] = (freq[ch] || 0) + 1;
    }
  }
  
  return Object.keys(freq)
    .sort()
    .map(letter => `${letter} ${freq[letter]}`);
}

const x = countCharacters("hello world")
