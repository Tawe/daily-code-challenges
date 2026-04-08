function palindromeLocator(str) {
    if (str === str.split("").reverse().join("")) {
        return str.length % 2 === 0 ? str.slice(str.length / 2 - 1, str.length / 2 + 1) : str[Math.floor(str.length / 2)];
    }
    return "none";
  }

  console.log(palindromeLocator("racecar"));
  console.log(palindromeLocator("hello"));
  console.log(palindromeLocator("madam"));
  console.log(palindromeLocator("noon"));
  console.log(palindromeLocator("level"));
  console.log(palindromeLocator("rotor"));
  console.log(palindromeLocator("deified"));
  console.log(palindromeLocator("civic"));
  console.log(palindromeLocator("radar"));
  console.log(palindromeLocator("stats"));
  console.log(palindromeLocator("refer"));