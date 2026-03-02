def sum_letters(s):
    return sum(ord(ch) - ord('A') + 1 for ch in s.upper() if ch.isalpha())

print(sum_letters("A"))
print(sum_letters("Z"))
print(sum_letters("a"))
print(sum_letters("z"))
print(sum_letters("1"))
print(sum_letters("123"))
print(sum_letters("123a"))
print(sum_letters("123aZ"))