function speedCheck(speedMph, speedLimitKph) {
    const MPH_TO_KPH = 1.60934;
    const speedKph = speedMph * MPH_TO_KPH;

    if (speedKph > speedLimitKph + 5) return "Ticket";
    if (speedKph <= speedLimitKph) return "Not Speeding";
    return "Warning";
}

const x = speedCheck(60, 90);
x;