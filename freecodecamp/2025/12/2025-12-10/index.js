function parseBold(markdown) { 
    return markdown.replace(/(__|\*\*)(?! )(.+?)(?<! )\1/g, "<b>$2</b>");;
}

const x = parseBold("**This is bold**")
x;