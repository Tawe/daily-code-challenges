function avalancheRisk(snowDepth, slope) {
    return slope === "Gentle" || snowDepth === "Shallow" ? "Safe" : "Risky";
}

const x = avalancheRisk("Shallow", "Gentle");
x;