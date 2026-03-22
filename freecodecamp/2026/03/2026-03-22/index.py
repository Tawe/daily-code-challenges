def detect_roast(beans):
    roast_points = {
        "'": 1,
        "-": 2,
        ".": 3
    }
 
    total_points = 0

    for bean in beans:
        total_points += roast_points[bean]
    average_points = total_points / len(beans)

    print(average_points)

    if average_points < 1.75:
        return "Light"
    elif average_points >= 1.75 and average_points <= 2.5:
        return "Medium"
    elif average_points > 2.5:
        return "Dark"

print(detect_roast("-...'-......-..-...-"))
print(detect_roast("'---'"))
print(detect_roast("'-.-'"))
print(detect_roast("'-.-'"))