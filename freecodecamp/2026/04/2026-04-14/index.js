function getLastLetter(str) {
    let lastLetter = "";
    let bestLower = "";

    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        const lower = ch.toLowerCase();
        const isLetter = lower >= "a" && lower <= "z";

        if (!isLetter) {
            continue;
        }

        if (bestLower === "" || lower > bestLower) {
            bestLower = lower;
            lastLetter = ch;
        }
    }

    return lastLetter;
}

console.log(getLastLetter("Hello World"));