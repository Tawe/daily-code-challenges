function generateSnowflake(crystals) {
    return crystals.
    split("\n")
    .map(line => line + [...line].reverse().join(""))
    .join("\n");
}

const x = generateSnowflake("* \n *\n* ");
x;