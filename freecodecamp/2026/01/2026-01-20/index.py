import re

def to_consonant_case(s):
    s = s.replace('-', '_')
    s = re.sub(r'[aeiouAEIOU]', lambda m: m.group(0).lower(), s)
    return re.sub(r'[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]', lambda m: m.group(0).upper(), s)

print(to_consonant_case("hello-world"))