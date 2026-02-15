function getHillRating(drop, distance, type) {
    
    const steepness = drop / distance;
    let adjustedSteepness = steepness;
    if (type === "Downhill") {
        adjustedSteepness *= 1.2;
    } else if (type === "Slalom") {
        adjustedSteepness *= 0.9;
    } else if (type === "Giant Slalom") {
        adjustedSteepness *= 1.0;
    }
    if (adjustedSteepness <= 0.1) {
        return "Green";
    } else if (adjustedSteepness <= 0.25) {
        return "Blue";
    } else {
        return "Black";
    }
}

const x = getHillRating(100, 1000, "Downhill");
x;