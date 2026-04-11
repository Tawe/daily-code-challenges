function rookAttack(rook1, rook2) {
    const [letter1, number1] = rook1.split("");
    const [letter2, number2] = rook2.split("");

    if(letter1 === letter2 || number1 === number2) {
        return true;
    }
    return false;
}

console.log(rookAttack("A1", "A8"));
console.log(rookAttack("A1", "H8"));
console.log(rookAttack("A1", "H7"));
console.log(rookAttack("A1", "H6"));
console.log(rookAttack("A1", "H5"));
console.log(rookAttack("A1", "H4"));
console.log(rookAttack("A1", "H3"));
console.log(rookAttack("A1", "H2"));
console.log(rookAttack("A1", "H1"));