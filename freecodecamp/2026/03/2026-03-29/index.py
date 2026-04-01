def is_valid_isbn10(s):
    total = 0
    s = s.replace("-", "")
 
    if(len(s) != 10):
        return False

    for i in range(len(s)):
        if(s[i] !="X" and s[i].isdigit()):
            total += int(s[i]) * (i + 1)
        elif(s[i] =="X" and i == 9):
            total += 10 * (i + 1)
        elif(not s[i].isdigit()):
            return False
            
    
    return total % 11 == 0
    
print(is_valid_isbn10("0-306-40615-2")) 
print(is_valid_isbn10("0-306-40615-3")) 