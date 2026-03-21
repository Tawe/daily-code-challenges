def _rotate_90_cw(grid):
    n = len(grid)
    return ["".join(grid[n - 1 - j][i] for j in range(n)) for i in range(n)]


def _has_orientation_markers(grid):
    n = len(grid)

    def block_all_ones(r0, c0):
        for r in range(r0, r0 + 2):
            for c in range(c0, c0 + 2):
                if grid[r][c] != "1":
                    return False
        return True

    return (
        block_all_ones(0, 0)
        and block_all_ones(0, n - 2)
        and block_all_ones(n - 2, 0)
    )


def _extract_data(grid):
    n = len(grid)
    marker_cells = set()
    for r in range(2):
        for c in range(2):
            marker_cells.add((r, c))
    for r in range(2):
        for c in range(n - 2, n):
            marker_cells.add((r, c))
    for r in range(n - 2, n):
        for c in range(2):
            marker_cells.add((r, c))

    bits = []
    for r in range(n):
        for c in range(n):
            if (r, c) not in marker_cells:
                bits.append(grid[r][c])
    return "".join(bits)


def decode_qr(qr_code):
    g = list(qr_code)
    for _ in range(4):
        if _has_orientation_markers(g):
            return _extract_data(g)
        g = _rotate_90_cw(g)
    raise ValueError("No valid orientation found")


print(decode_qr([
    "110011",
    "110011",
    "000000",
    "000000",
    "110000",
    "110001"
]))