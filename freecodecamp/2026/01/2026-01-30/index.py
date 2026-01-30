def find_pawn_moves(position):
    col = position[0]
    row = int(position[1]) - 1
    moves = []

    if row + 1 < 8:
        moves.append(f"{col}{row + 2}")

    if row == 1 and row + 2 < 8:
        moves.append(f"{col}{row + 3}")

    return sorted(moves)

print(find_pawn_moves("D4"))