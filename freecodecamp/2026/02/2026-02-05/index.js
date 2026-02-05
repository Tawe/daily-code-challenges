function countChange(change) {
    let total = 0;
    for (const coin of change) {
        total += coin;
    }
    const dollars = Math.floor(total / 100);
    const cents = total % 100;
    return `$${dollars}.${cents.toString().padStart(2, '0')}`;
}

const x = countChange([25, 25, 25, 25]) 
x;