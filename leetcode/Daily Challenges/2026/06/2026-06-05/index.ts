type DpResult = [bigint, bigint]; 

function sumWavinessUpTo(n: number): bigint {
    if (n < 0) return 0n;
    const s = String(n);
    const len = s.length;
    const memo = new Map<string, DpResult>();

    function dfs(
        pos: number,
        tight: boolean,
        started: boolean,
        prev: number,
        prev2: number
    ): DpResult {
        if (pos === len) return [1n, 0n];

        const key = `${pos},${tight ? 1 : 0},${started ? 1 : 0},${prev},${prev2}`;
        const cached = memo.get(key);
        if (cached) return cached;

        const limit = tight ? Number(s[pos]) : 9;
        let count = 0n;
        let sum = 0n;

        for (let d = 0; d <= limit; d++) {
            const newTight = tight && d === limit;

            if (!started && d === 0) {
                const [c, sub] = dfs(pos + 1, newTight, false, -1, -1);
                count += c;
                sum += sub;
                continue;
            }

            let add = 0n;
            if (started && prev2 >= 0) {
                if (prev > prev2 && prev > d) add = 1n;
                else if (prev < prev2 && prev < d) add = 1n;
            }

            const [c, sub] = dfs(
                pos + 1,
                newTight,
                true,
                d,
                started ? prev : -1
            );
            count += c;
            sum += sub + add * c;
        }

        const result: DpResult = [count, sum];
        memo.set(key, result);
        return result;
    }

    return dfs(0, true, false, -1, -1)[1];
}

function totalWaviness(num1: number, num2: number): number {
    return Number(sumWavinessUpTo(num2) - sumWavinessUpTo(num1 - 1));
}

console.log(totalWaviness(120, 130)); // 3
console.log(totalWaviness(198, 202)); // 3
console.log(totalWaviness(4848, 4848)); // 2
