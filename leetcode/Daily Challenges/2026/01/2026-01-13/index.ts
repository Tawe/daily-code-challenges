function separateSquares(squares: number[][]): number {
    let totalArea = 0;
    for (const [xi, yi, li] of squares) {
        totalArea += li * li;
    }
    const targetArea = totalArea / 2;
    
    let minY = Infinity;
    let maxY = -Infinity;
    for (const [xi, yi, li] of squares) {
        minY = Math.min(minY, yi);
        maxY = Math.max(maxY, yi + li);
    }

    const EPSILON = 1e-5;
    let left = minY;
    let right = maxY;
    let result = minY;
    
    while (right - left > EPSILON) {
        const mid = (left + right) / 2;
        
        let areaBelow = 0;
        for (const [xi, yi, li] of squares) {
            const bottom = yi;
            const top = yi + li;
            
            if (top <= mid) {
                areaBelow += li * li;
            } else if (bottom < mid) {
                const heightBelow = mid - bottom;
                areaBelow += heightBelow * li;
            }
        }
        
        if (areaBelow < targetArea) {
            left = mid;
        } else {
            result = mid;
            right = mid;
        }
    }
    
    return result;
}

const squares = [[1,1,1,1],[1,1,3,3],[1,1,3,4],[5,5,5,5]];
separateSquares(squares);