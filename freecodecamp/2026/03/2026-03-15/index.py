def get_captured_value(pieces):
    if pieces.count("K") == 0:
        return "Checkmate"

    p = 8
    r = 2
    nb = 4
    q = 1

    for piece in pieces:
        if piece == "P":
            p -= 1
        elif piece == "R":
            r -= 1
        elif piece == "N" or piece == "B":
            nb -= 1
        elif piece == "Q":
            q -= 1
            
    return (p * 1) + (r * 5) + (nb * 3) + (q * 9)

print(get_captured_value(["P", "R", "N", "B", "Q", "P", "R", "N", "B", "Q"]))
print(get_captured_value(["P", "P", "P", "P", "P", "P", "R", "R", "N", "B", "Q", "K"]))