function getLandingStance(startStance, rotation) {
    const flips = Math.floor(Math.abs(rotation) / 180);
    return flips % 2 === 0
        ? startStance
        : startStance === "Regular" ? "Goofy" : "Regular";
}

const x = getLandingStance("Regular", 90);
x;
