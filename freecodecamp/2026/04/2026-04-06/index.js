function getDayOfWeek(timestamp) {
    const date = new Date(timestamp);
    const day = date.getUTCDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];   
}

console.log(getDayOfWeek(1712390400000));