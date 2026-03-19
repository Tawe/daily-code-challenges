import re
def largest_number(s): 
    nums = re.findall(r'-?\d+(?:\.\d+)?', s)
    return max(float(n) if '.' in n else int(n) for n in nums)


print(largest_number("1,2"))
print(largest_number("10!20?30:40;50"))
print(largest_number("10,20,30,40,50"))
print(largest_number("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011"))