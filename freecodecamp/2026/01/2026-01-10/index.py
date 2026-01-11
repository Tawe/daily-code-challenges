def tic_tac_toe(board):
    for row in board:
        if row[0] == row[1] == row[2]:
            return f"{row[0]} wins"
    for c in range(3):
        if board[0][c] == board[1][c] == board[2][c]:
            return f"{board[0][c]} wins"
    if board[0][0] == board[1][1] == board[2][2]:
        return f"{board[1][1]} wins"
    if board[0][2] == board[1][1] == board[2][0]:
        return f"{board[1][1]} wins"

    return "Draw"

print(tic_tac_toe([["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]]))