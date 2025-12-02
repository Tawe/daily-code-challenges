function toSnake(camel) {
    return camel.replace(/([A-Z])/g, "_$1").toLowerCase();
}

const x = toSnake("freecodecampDailyChallenges");
x;