function addPunctuation(sentences) {
    sentences = sentences.split(" ");
    for (let i = 0; i < sentences.length; i++) {
        if (i !== 0 && sentences[i][0] === sentences[i][0].toUpperCase()) {
            sentences[i-1] = sentences[i-1] + ".";
        }
        if (i === sentences.length - 1) {
            sentences[i] = sentences[i] + ".";
        }
    }
    sentences = sentences.join(" ");
    return sentences;
}

const x = addPunctuation("A b c D e F g h I J k L m n o P Q r S t U v w X Y Z") 
x;