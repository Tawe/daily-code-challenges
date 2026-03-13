def is_valid_domino_chain(dominoes):
    for i in range(len(dominoes) - 1):
        if dominoes[i][1] != dominoes[i + 1][0]:
            return False
    return True

print(is_valid_domino_chain([[1, 3], [3, 6], [6, 5]]))