def knight_moves(pos):
    col = ord(pos[0]) - ord('A')
    row = int(pos[1]) - 1

    deltas = [(2,1),(2,-1),(-2,1),(-2,-1),(1,2),(1,-2),(-1,2),(-1,-2)]
    return sum(0 <= row+dr < 8 and 0 <= col+dc < 8 for dr, dc in deltas)

print(knight_moves("A1")) 