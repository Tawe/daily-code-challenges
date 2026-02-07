function getLandingStance(startStance, rotation) {
    const newRotation = Math.abs(rotation) % 360;
    if (newRotation % 180 === 0) {
        return startStance === "Regular" ? "Goofy" : "Regular";
    }
    if (newRotation % 90 === 0) {
        return startStance === "Regular" ? "Regular" : "Goofy";
    }
    return startStance === "Regular" ? "Goofy" : "Regular";
}

console.log(getLandingStance("Regular", 90));
console.log(getLandingStance("Regular", 180));
console.log(getLandingStance("Goofy", -270));
console.log(getLandingStance("Goofy", 180));
