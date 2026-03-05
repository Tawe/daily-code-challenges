def count_perfect_cubes(a, b):
    lo, hi = min(a, b), max(a, b)
    count = 0
    k = 0
    while k * k * k <= hi:
        if k * k * k >= lo:
            count += 1
        k += 1
    k = -1
    while k * k * k >= lo:
        if k * k * k <= hi:
            count += 1
        k -= 1
    return count


if __name__ == "__main__":
    print(count_perfect_cubes(1, 10))
    print(count_perfect_cubes(10, 1)) 
    print(count_perfect_cubes(0, 27)) 