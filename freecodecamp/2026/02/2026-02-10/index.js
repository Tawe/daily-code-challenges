function getRelativeResults(results) {
    const toSeconds = (time) => {
      const [hours, minutes, seconds] = time.split(":").map(Number);
      return hours * 3600 + minutes * 60 + seconds;
    };

    const winnerSeconds = toSeconds(results[0]);

    return results.map((result) => {
      const diff = toSeconds(result) - winnerSeconds;
      if (diff === 0) return "0";

      const diffMinutes = Math.floor(diff / 60);
      const diffSeconds = diff % 60;
      return `+${diffMinutes}:${String(diffSeconds).padStart(2, "0")}`;
    });
}

const x = getRelativeResults(["1:25:32", "1:26:10", "1:27:05"])
x;
