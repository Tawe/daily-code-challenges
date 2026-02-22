function countMedals(winners) {
    const table = new Map();

    for (const [gold, silver, bronze] of winners) {
        if (!table.has(gold)) table.set(gold, { gold: 0, silver: 0, bronze: 0, total: 0 });
        if (!table.has(silver)) table.set(silver, { gold: 0, silver: 0, bronze: 0, total: 0 });
        if (!table.has(bronze)) table.set(bronze, { gold: 0, silver: 0, bronze: 0, total: 0 });

        table.get(gold).gold++;
        table.get(gold).total++;

        table.get(silver).silver++;
        table.get(silver).total++;

        table.get(bronze).bronze++;
        table.get(bronze).total++;
    }

    const sortedCountries = [...table.keys()].sort((a, b) => {
        const byGold = table.get(b).gold - table.get(a).gold;
        if (byGold !== 0) return byGold;
        return a.localeCompare(b);
    });

    const rows = ["Country,Gold,Silver,Bronze,Total"];
    for (const country of sortedCountries) {
        const { gold, silver, bronze, total } = table.get(country);
        rows.push(`${country},${gold},${silver},${bronze},${total}`);
    }

    return rows.join("\n");
}

const x = [
    ["USA", "CAN", "NOR"],
    ["NOR", "USA", "CAN"],
    ["USA", "NOR", "SWE"]
]
const y = countMedals(x);
y;