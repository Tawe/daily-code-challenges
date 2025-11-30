function detectAI(text) {
  const dashCount = (text.match(/-/g) || []).length;
  if (dashCount >= 2) return "AI";

  const parenCount = (text.match(/\([^)]*\)/g) || []).length;
  if (parenCount >= 2) return "AI";
  const words = text.match(/[A-Za-z]+/g) || [];

  let longWordCount = 0;
  for (const w of words) {
    if (w.length >= 7) longWordCount++;
  }

  if (longWordCount >= 3) return "AI";

  return "Human";
}

const x = detectAI("The quick brown fox jumped over the lazy dog.");
