function longestWord(sentence) {
    const cleanSentence = sentence.replace(/[^a-zA-Z ]/g, '');
    const words = cleanSentence.split(' ').filter(w => w.length > 0);
    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}


const x = longestWord("Hello coding challenge.");
