def is_circular_prime(n):
    def is_prime(num):
        if num <= 1:
            return False
        if num <= 3:
            return True
        if num % 2 == 0 or num % 3 == 0:
            return False
        
        i = 5
        while i * i <= num:
            if num % i == 0 or num % (i + 2) == 0:
                return False
            i += 6
        return True

    s = str(n)

    if len(s) > 1 and any(ch in "0245685" for ch in s):
        return False

    for i in range(len(s)):
        rotated = int(s[i:] + s[:i])
        if not is_prime(rotated):
            return False
    return True

print(is_circular_prime(23))