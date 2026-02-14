function getDifficulty(track) {
    let difficulty = 0;
    for (let i = 0; i < track.length; i++) {
        if (track[i] === "L" || track[i] === "R") {
            const isDirectionChange =
                (track[i] === "L" && track[i + 1] === "R") ||
                (track[i] === "R" && track[i + 1] === "L");
            difficulty += isDirectionChange ? 15 : 5;
        }
    }
    if (difficulty <= 100) {
        return "Easy";
    } else if (difficulty <= 200) {
        return "Medium";
    } else {
        return "Hard";
    }
}

const x = getDifficulty("SLSLLSRRLSRLRL");
x;
