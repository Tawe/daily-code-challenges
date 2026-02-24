function countBusinessDays(start, end) {
    const [y1, m1, d1] = start.split("-").map(Number);
    const [y2, m2, d2] = end.split("-").map(Number);

    let startTime = Date.UTC(y1, m1 - 1, d1);
    let endTime = Date.UTC(y2, m2 - 1, d2);

    if (startTime > endTime) {
        const tmp = startTime;
        startTime = endTime;
        endTime = tmp;
    }

    const startDate = new Date(startTime);
    const totalDays = Math.round((endTime - startTime) / 86400000) + 1; 

    let businessDays = 0;
    for (let i = 0; i < totalDays; i++) {
        const dayOfWeek = (startDate.getUTCDay() + i) % 7; 
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            businessDays++;
        }
    }

    return businessDays;
}

const x = countBusinessDays("2026-02-24", "2026-02-28");
x;