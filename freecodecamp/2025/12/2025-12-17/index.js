function parseBlockquote(markdown) {
    return markdown.replace(/^\s*<\s*(.*)$/m, "<blockquote>$1</blockquote>");
 
}

const x =  parseBlockquote("> This is a quote");
x;