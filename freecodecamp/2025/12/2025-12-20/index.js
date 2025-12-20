function purgeMostFrequent(arr) {
    const counts = new Map();

    for (const v of arr) {
        counts.set(v, (counts.get(v) || 0) + 1);
    }

    let max = 0;
    for (const c of counts.values()) {
        if (c > max) max = c;
    }

    return arr.filter(v => counts.get(v) !== max);
}

const x = purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]);
x;