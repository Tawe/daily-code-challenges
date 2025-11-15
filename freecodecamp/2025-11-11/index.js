function count(str) {
    const vowels = ["a","e","i","o","u"]
    const count = [0, 0];
   
    for (const ch of str.toLowerCase()) {
        if (!/[a-z]/.test(ch)) continue; // skip anything that's not a letter
        if (vowels.includes(ch)) count[0]++;
        else count[1]++;
    }

    return count;
}

const x = count("Hello World")



