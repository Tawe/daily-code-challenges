function nextGreatestLetter(letters: string[], target: string): string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const targetIndex = alphabet.indexOf(target);
    for (let i = 0; i < letters.length; i++) {
        const letterIndex = alphabet.indexOf(letters[i]);
        if (letterIndex > targetIndex) {
            return letters[i];
        }
    }
    return letters[0];
};

const x = nextGreatestLetter(["c","f","j"], "a");
x;