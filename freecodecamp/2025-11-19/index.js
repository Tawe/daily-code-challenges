function convert(heading) {
  const trimmed = heading.trimStart();
  const match = trimmed.match(/^(#{1,6})\s+(.+)$/);

  if (!match) {
    return "Invalid format";
  }

  const level = match[1].length;
  const text  = match[2];
  
  return `<h${level}>${text}</h${level}>`;
}



const x = convert("# My heading")
x;