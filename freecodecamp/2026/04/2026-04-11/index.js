function rookBishopAttack(rook, bishop) {
    const [rookLetter, rookNumber] = rook.split("");
    const [bishopLetter, letterNumber] = bishop.split("");

    if(rookLetter === bishopLetter || rookNumber === letterNumber) {
        return "rook";
    }

    if(Math.abs(rookLetter.charCodeAt(0) - bishopLetter.charCodeAt(0)) === Math.abs(rookNumber - letterNumber)) {
        return "bishop";
    }

    return "neither";
}

console.log(rookBishopAttack("A1", "A8"));
console.log(rookBishopAttack("A1", "H8"));
console.log(rookBishopAttack("A1", "H7"));
console.log(rookBishopAttack("A1", "H6"));
console.log(rookBishopAttack("A1", "H5"));
console.log(rookBishopAttack("A1", "H4"));
console.log(rookBishopAttack("A1", "H2"));
console.log(rookBishopAttack("A1", "H1"));