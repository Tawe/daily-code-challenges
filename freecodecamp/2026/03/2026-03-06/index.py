def navigate_trail(trail_map):
    rows = len(trail_map)
    cols = len(trail_map[0])

    start = None
    for r in range(rows):
        for c in range(cols):
            if trail_map[r][c] == "C":
                start = (r, c)
                break
        if start is not None:
            break

    def is_trail_cell(r, c):
        if 0 <= r < rows and 0 <= c < cols:
            return trail_map[r][c] in ("C", "T", "G")
        return False

    moves = []
    prev = None
    curr = start

    while trail_map[curr[0]][curr[1]] != "G":
        r, c = curr
        neighbors = [
            ("U", -1, 0),
            ("D", 1, 0),
            ("L", 0, -1),
            ("R", 0, 1),
        ]

        next_cell = None
        next_move = None

        for move_char, dr, dc in neighbors:
            nr, nc = r + dr, c + dc
            if not is_trail_cell(nr, nc):
                continue
            if prev is not None and (nr, nc) == prev:
                continue
            next_cell = (nr, nc)
            next_move = move_char
            break

        moves.append(next_move)
        prev = curr
        curr = next_cell

    return "".join(moves)


print(
    navigate_trail(
    [
        "-CT--",
        "--T--",
        "--TT-",
        "---T-",
        "---G-",
    ])
)
