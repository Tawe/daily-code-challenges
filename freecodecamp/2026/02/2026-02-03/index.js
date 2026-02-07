function mirror(str) {
     const newStr = [...str].reverse().join("");
     return str+newStr;
}

const x = mirror("Hello");
console.log(x);