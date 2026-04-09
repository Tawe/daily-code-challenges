function isFizzBuzz(arr) {
    for (let i = 1; i <= arr.length; i++) {
        let expected;
        console.log(i % 3, i % 5);
        if (i % 3 === 0 && i % 5 === 0) expected = "FizzBuzz";
        else if (i % 3 === 0) expected = "Fizz";
        else if (i % 5 === 0) expected = "Buzz";
        else expected = i;
        if (arr[i - 1] !== expected) return false;
    }
    return true;
}

console.log(isFizzBuzz([13, 14, "FizzBuzz", 16, 17]))
console.log(isFizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz"]));
console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, "Buzz", "Fizz", 10, "Buzz", "Fizz", 13, 14, "FizzBuzz"]));
console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, "Buzz", "Fizz", 10, "Buzz", "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"]));