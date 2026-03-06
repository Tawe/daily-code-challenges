def smallest_gap(s):
    smallest_gap = len(s)
    smallest_gap_substring = ""
    gap = 0

    for i in range(len(s)):
        for j in range(i + 1, len(s)):
            if s[i] == s[j]:
                gap = j - i - 1
                if gap < smallest_gap:
                    smallest_gap = gap
                    smallest_gap_substring = s[i + 1:j]
   
    return smallest_gap_substring


print(smallest_gap("ABCDAC"))