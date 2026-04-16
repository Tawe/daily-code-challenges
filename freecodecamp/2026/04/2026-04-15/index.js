function sortAndSwap(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    for(let i = 0; i < sortedArr.length; i++) {

        if(i % 3 === 0 && i !== 0) {
            let temp = sortedArr[i];
            sortedArr[i] = sortedArr[i - 1];
            sortedArr[i - 1] = temp;
        }
    }
    return sortedArr;
}

console.log(sortAndSwap([3, 1, 2, 4, 5]));