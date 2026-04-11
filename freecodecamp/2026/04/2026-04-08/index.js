function fizzBuzzAt(n) {
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return n;
}

function matchesSlice(arr, start) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== fizzBuzzAt(start + i)) return false;
    }
    return true;
}

function isFizzBuzz(arr) {
    if (arr.length === 0) return true;
    for (let j = 0; j < arr.length; j++) {
        if (typeof arr[j] === "number") {
            return matchesSlice(arr, arr[j] - j);
        }
    }
    const MAX_START = 1_000_000;
    for (let start = 1; start <= MAX_START; start++) {
        if (matchesSlice(arr, start)) return true;
    }
    return false;
}

console.log(isFizzBuzz([13, 14, "FizzBuzz", 16, 17]))
console.log(isFizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz"]));
console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]));
console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"]));
