def count_perfect_cubes(a, b):
    if a > b:
        a, b = b, a
    count = 0
    for i in range(a, b + 1):
        if is_perfect_cube(i):
            count += 1
    return count

def is_perfect_cube(n):
    return int(n ** (1/3)) ** 3 == n

print(count_perfect_cubes(1, 10)) 