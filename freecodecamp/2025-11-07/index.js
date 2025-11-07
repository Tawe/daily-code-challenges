

//This is 0(n)
function combinations(cards) {
    let cardCount = 1;
    for(let i = 0; i < cards; i++){
        cardCount *= (52 - i);
    }

    //remove duplicates
    let divisor = 1;
    for (let i = 1; i <= cards; i++) {
        divisor *= i;
    }
    return cardCount/divisor;
}

//This is 0(n)
function combinations2(cards) {
    if (cards < 0 || cards > 52) return 0;
    if (cards === 0 || cards === 52) return 1;
    const k = Math.min(cards, 52 - cards);
    
    let result = 1;
    for (let i = 1; i <= k; i++) {
        result = (result * (52 - k + i)) / i; // Multiply then divide each step
    }
    return Math.round(result);
}
