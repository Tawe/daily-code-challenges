function shiftArray(arr, n) {
    const len = arr.length;
    if (len === 0) return arr;
    let k = n % len;
    if (k < 0) k += len; 
    
    return arr.slice(k).concat(arr.slice(0, k));
}

const x = shiftArray(["alpha", "bravo", "charlie"], 5)
