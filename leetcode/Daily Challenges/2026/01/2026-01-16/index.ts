function maximizeSquareArea(m: number, n: number, hFences: number[], vFences: number[]): number {
    const MOD = 10**9 + 7;
    
    function getAllGaps(positions: number[]): Set<number> {
        const gaps = new Set<number>();
        const sorted = [...positions].sort((a, b) => a - b);
        
        for (let i = 0; i < sorted.length; i++) {
            for (let j = i + 1; j < sorted.length; j++) {
                gaps.add(sorted[j] - sorted[i]);
            }
        }
        
        return gaps;
    }

    const hPositions = [1, ...hFences, m];
    const hGaps = getAllGaps(hPositions);
    const vPositions = [1, ...vFences, n];
    const vGaps = getAllGaps(vPositions);
    
    let maxSide = 0;
    for (const gap of hGaps) {
        if (vGaps.has(gap)) {
            maxSide = Math.max(maxSide, gap);
        }
    }
    
    if (maxSide === 0) return -1;
    
    return Number((BigInt(maxSide) * BigInt(maxSide)) % BigInt(MOD));
}

const x = maximizeSquareArea(6, 3, [2,3], [2]);
x;
