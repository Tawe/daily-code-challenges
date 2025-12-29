const pyramidTransition = (bottom, allowed) => {
    const nextMap = new Map();
    for (const pat of allowed) {
        const key = pat.slice(0, 2);
        const top = pat[2];
        if (!nextMap.has(key)) nextMap.set(key, []);
            nextMap.get(key).push(top);
        }

        const memo = new Map();

        function canBuild(row) {
            if (row.length === 1) return true;
            if (memo.has(row)) return memo.get(row);

            const nextRow = [];

            function dfs(i) {
                if (i === row.length - 1) {
                const res = canBuild(nextRow.join(""));
                if (res) return true;
                return false;
            }

            const key = row[i] + row[i + 1];
            const options = nextMap.get(key);
            if (!options) return false;

            for (const ch of options) {
                nextRow.push(ch);
                if (dfs(i + 1)) return true;
                nextRow.pop();
            }
            return false;
        }

        const ans = dfs(0);
        memo.set(row, ans);
        return ans;
    }

    return canBuild(bottom);
}

const x = pyramidTransition("AAAA", ["AAB","AAC","BCD","BBE","DEF"]);
x;