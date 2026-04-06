function getRotation(n) {
    let rotation = 0;
    let nStr = n.toString();

    for(let i = 0; i < nStr.length; i++) {
        if(Number(nStr) % Number(nStr.length) === 0) {
            return rotation;
        }
        rotation ++;
        nStr = nStr.slice(1) + nStr.slice(0, 1);
    }

    return "none";
}

console.log(getRotation(13579));