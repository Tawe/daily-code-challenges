const letterCombinations = function(digits) {
    
    const mapping = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    const result = [];
    const backtrack = (index, current) => {
        if (current.length === digits.length) {
            result.push(current);
            return;
        }
        const letters = mapping[digits[index]];
        for (const letter of letters) {
            backtrack(index + 1, current + letter);
        }
    };
    backtrack(0, '');
    return result;
};

const x = letterCombinations("23");