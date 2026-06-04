function waviness(n: number): number {
    const s = String(n);
    if (s.length < 3) return 0;

    let count = 0;
    for (let i = 1; i < s.length - 1; i++) {
        const d = Number(s[i]);
        const left = Number(s[i - 1]);
        const right = Number(s[i + 1]);
        if (d > left && d > right) count++;
        else if (d < left && d < right) count++;
    }
    return count;
}

function totalWaviness(num1: number, num2: number): number {
    let total = 0;
    for (let n = num1; n <= num2; n++) {
        total += waviness(n);
    }
    return total;
}

console.log(totalWaviness(120, 130));
console.log(totalWaviness(198, 202));
console.log(totalWaviness(4848, 4848));
