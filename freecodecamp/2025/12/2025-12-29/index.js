function fuelToAdd(currentGallons, requiredLiters) {
    const GALLON_TO_LITERS = 3.78541;
    if (currentGallons * GALLON_TO_LITERS >= requiredLiters) return 0;
    return Math.ceil((requiredLiters - currentGallons * GALLON_TO_LITERS) / GALLON_TO_LITERS);
}

const x = fuelToAdd(0, 1);
x;