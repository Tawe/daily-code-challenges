function digitalDetox(logs) {
  const fourHoursMs = 4 * 60 * 60 * 1000;

  if (logs.length === 0) return true;
  const timestamps = logs.map((log) => {
    const [date, time] = log.split(" ");
    return new Date(`${date}T${time}`).getTime();
  });

  timestamps.sort((a, b) => a - b);

  for (let i = 1; i < timestamps.length; i++) {
    if (timestamps[i] - timestamps[i - 1] < fourHoursMs) {
      return false;
    }
  }
  const countByDay = {};
  for (const log of logs) {
    const date = log.split(" ")[0];
    countByDay[date] = (countByDay[date] || 0) + 1;
  }
  for (const date of Object.keys(countByDay)) {
    if (countByDay[date] > 2) return false;
  }

  return true;
}

const x = digitalDetox(["2026-01-31 10:00:00", "2026-01-31 10:01:00", "2026-01-31 10:02:00", "2026-01-31 10:03:00"]);
x;