function fizzBuzz(n) {
    let arr = []
    for(let i = 1; i <= n; i++){
        let str = "";
        if (i % 3 === 0) str += "Fizz";
        if (i % 5 === 0) str += "Buzz";
        arr.push(str || i);
    }

    return arr;
}

const x = fizzBuzz(4);
x;