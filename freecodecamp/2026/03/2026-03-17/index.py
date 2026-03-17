def get_milestone(years):
    if years < 1:
        return "Newlyweds"
    elif years < 5:
        return "Paper"
    elif years < 10:
        return "Wood"
    elif years < 25:
        return "Tin"
    elif years < 40:
        return "Silver"
    elif years < 50:
        return "Ruby"
    elif years < 60:
        return "Gold"
    elif years < 70:
        return "Diamond"
    elif years >= 70:
        return "Platinum"

print(get_milestone(8))
print(get_milestone(5))
print(get_milestone(10))
print(get_milestone(25))
print(get_milestone(40))
print(get_milestone(50))
print(get_milestone(60))
print(get_milestone(70))