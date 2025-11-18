function oneHundred(chars) {
  return chars.repeat(Math.ceil(100 / chars.length)).slice(0, 100);
}

const x = oneHundred("One hundred ") ;