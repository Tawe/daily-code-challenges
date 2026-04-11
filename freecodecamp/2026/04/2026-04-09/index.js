function getNextBingoNumber(n) {
  
    let letter = n.charAt(0);
    let number = parseInt(n.slice(1))+1;

    if(number > 75){
       return "B1";
    }

    const bingoObject = {
        "B": 15,
        "I": 30,
        "N": 45,
        "G": 60,
        "O": 75,
    }

    if(number > bingoObject[letter]){
        const keys = Object.keys(bingoObject);
        const index = keys.indexOf(letter);
        letter = index !== -1 && index < keys.length - 1 ? keys[index + 1]   : undefined;

        return letter + number;
    }

    return letter + number;
}

console.log(getNextBingoNumber("I30"));