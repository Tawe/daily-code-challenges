function truncateText(text) {
    if (text.length <= 20) {
        return text;
    }
    return text.slice(0, 17) + "...";       
}

const x = truncateText("Hello, world! This is a longer string that should be truncated.");
x;