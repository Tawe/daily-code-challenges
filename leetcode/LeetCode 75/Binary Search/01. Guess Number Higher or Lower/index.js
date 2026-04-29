const guessNumber = function(n) {
   let found = false;
   let pickedNumber = 0;
   let low = 1;
   let high = n;

   while (!found) {
    const mid = Math.floor((low + high) / 2);
    const result = guess(mid);
    if (result  === 0) {
        found = true;
        pickedNumber = mid;
    } else if (result === -1) {
        high = mid - 1;
    } else {
        low = mid + 1;
    }   
   }
   return pickedNumber;
};
