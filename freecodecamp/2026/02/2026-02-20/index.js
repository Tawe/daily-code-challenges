function isValidTrick(trickName) {
    const validFirstWords = ["Misty", "Ghost", "Thunder", "Solar", "Sky", "Phantom", "Frozen", "Polar"];
    const validSecondWords = ["Twister", "Icequake", "Avalanche", "Vortex", "Snowstorm", "Frostbite", "Blizzard", "Shadow"];
    const words = trickName.trim().split(/\s+/);

    if (words.length !== 2) return false;

    const [firstWord, secondWord] = words;
    return validFirstWords.includes(firstWord) && validSecondWords.includes(secondWord);
}

const x = isValidTrick("Misty Twister");
x;
