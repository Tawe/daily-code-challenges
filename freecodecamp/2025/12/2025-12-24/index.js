function parseImage(markdown) {
   const formatedMarkdown = markdown.match(/^!\[(.*?)\]\((.*?)\)$/);
   return formatedMarkdown ? `<img src="${formatedMarkdown[2]}" alt="${formatedMarkdown[1]}">` : "Invalid format";
   
}
const x = parseImage("![Cute cat](cat.png)");
x;