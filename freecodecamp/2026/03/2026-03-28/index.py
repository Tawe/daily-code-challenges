def pascal_row(n):
    row = [1]
    for i in range(1, n):
        row.append(row[i-1] * (n-i) // i) 
    return row

print(pascal_row(5))
print(pascal_row(6))