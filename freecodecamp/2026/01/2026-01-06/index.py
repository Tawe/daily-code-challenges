def vowel_case(s):
    vowels = set("aeiou")
    out = []

    for ch in s:
        lower = ch.lower()
        if lower in vowels:
            out.append(ch.upper())
        elif "a" <= lower <= "z":
            out.append(lower)
        else:
            out.append(ch)

    return "".join(out)

print(vowel_case("HELLO, world!"))