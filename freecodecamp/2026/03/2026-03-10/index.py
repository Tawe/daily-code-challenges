def insert_into_array(arr, value, index):
    return arr[:index] + [value] + arr[index:]

print(insert_into_array([2, 4, 8, 10], 6, 2))