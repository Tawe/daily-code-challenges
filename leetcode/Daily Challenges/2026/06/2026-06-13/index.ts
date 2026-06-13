function mapWordWeights(words: string[], weights: number[]): string {
    return words
        .map((word) => {
            const sum = [...word].reduce(
                (total, ch) => total + weights[ch.charCodeAt(0) - 97],
                0
            );
            return String.fromCharCode(122 - (sum % 26));
        })
        .join('');
}

console.log(
    mapWordWeights(
        ['abcd', 'def', 'xyz'],
        [5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7, 7, 2]
    )
); // rij
console.log(mapWordWeights(['a', 'b', 'c'], Array(26).fill(1))); // yyy
console.log(
    mapWordWeights(
        ['abcd'],
        [7, 5, 3, 4, 3, 5, 4, 9, 4, 2, 2, 7, 10, 2, 5, 10, 6, 1, 2, 2, 4, 1, 3, 4, 4, 5]
    )
); // g
