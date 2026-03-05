import re
def card_values(cards):
    values = []
    for card in cards:  
        value = re.sub(r"[SHDC]","", card)
        if value == "A":
            value = 1
        elif value == "J" or value == "Q" or value == "K":
            value = 10
        else:
            value = int(value)
        values.append(value)
    
    return values

print(card_values(["10H", "JH", "QH", "KH", "AH"]))