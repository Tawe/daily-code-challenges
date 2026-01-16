import math
def is_integer_hypotenuse(a, b):
    return math.sqrt(a**2 + b**2) % 1 == 0  

print(is_integer_hypotenuse(3, 4))