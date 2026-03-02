def is_flat(arr):
    for item in arr:
        if isinstance(item, list):
            return False
    return True

print(is_flat([1, 2, 3, 4, 5]))
print(is_flat([1, [2, 3], 4, 5]))
print(is_flat([1, [2, [3, [4]]]]))