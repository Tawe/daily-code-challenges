function countLettersAndNumbers(str) {
    const letters = str.match(/[a-zA-Z]/g) || [];
    const numbers = str.match(/\d/g) || [];
    let letterString = "letters";
    let numberString = "numbers";

    if (letters && letters.length === 1) {
        letterString = "letter";
    }
    if (numbers && numbers.length === 1) {
        numberString = "number";
    }
    return `The string has ${letters.length} ${letterString} and ${numbers.length} ${numberString}.`;
    
}

const x =  countLettersAndNumbers("12345") 
x;