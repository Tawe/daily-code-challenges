def array_swap(arr):
    arr[0], arr[1] = arr[1], arr[0]
    return arr

print(array_swap(["A", "B"]))