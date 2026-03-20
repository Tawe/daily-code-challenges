def invert_matrix(matrix):
    values = set()
    for row in matrix:
        for cell in row:
            values.add(cell)

    if len(values) != 2:
        return matrix

    v1, v2 = values
    swap = {v1: v2, v2: v1}

    for row in matrix:
        for i in range(len(row)):
            row[i] = swap[row[i]]

    return matrix

print(invert_matrix([["a", "b"], ["a", "a"]]))