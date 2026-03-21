def get_shadow(time):
    hour, minute = map(int, time.split(":"))
    t = hour + minute / 60.0 

    if t < 6 or t >= 18:
        return "No shadow"
    if hour == 12 and minute == 0:
        return "No shadow"

    hours_away = abs(t - 12)
    length = hours_away**3

    if t < 12:
        direction = "west"
    else:
        direction = "east"

    if abs(length - round(length)) < 1e-9:
        length_str = str(int(round(length)))
    else:
        length_str = f"{length:g}"

    return f"{length_str}ft {direction}"

print(get_shadow("10:00"))
print(get_shadow("17:30")) 
