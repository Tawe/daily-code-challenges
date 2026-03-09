import re

def is_valid_hsl(hsl: str) -> bool:
    pattern = r"""^hsl\(\s*
                  (\d{1,3})\s*,\s*
                  (\d{1,3})\s*%\s*,\s*
                  (\d{1,3})\s*%\s*
                  \)\s*;?$"""
    m = re.fullmatch(pattern, hsl, re.VERBOSE)
    if not m:
        return False

    h = int(m.group(1))
    s = int(m.group(2))
    l = int(m.group(3))

    if not (0 <= h <= 360):
        return False
    if not (0 <= s <= 100 and 0 <= l <= 100):
        return False
    return True

print(is_valid_hsl("hsl(240, 50%, 50%)")
print(is_valid_hsl("hsl( 200 , 50% , 75% )"))
print(is_valid_hsl("hsl(99,60%,80%);"))
print(is_valid_hsl("hsl(  10  ,  20%   ,  30%   )    ;"))