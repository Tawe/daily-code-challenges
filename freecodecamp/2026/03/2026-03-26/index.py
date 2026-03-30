def get_movie_night_cost(day, showtime, number_of_tickets):
    if day == "Tuesday":
        cost = 5 * number_of_tickets
        return f"${cost:.2f}"

    if day in ["Friday", "Saturday", "Sunday"]:
        cost = 12 * number_of_tickets
    else:
        cost = 10 * number_of_tickets

    hour_min = showtime[:-2]
    suffix = showtime[-2:]
    hour, minute = map(int, hour_min.split(":"))
    if suffix == "am":
        if hour == 12:
            hour = 0
    else:  # pm
        if hour != 12:
            hour += 12
    minutes_since_midnight = hour * 60 + minute

    if minutes_since_midnight < 17 * 60:
        cost -= 2 * number_of_tickets

    return f"${cost:.2f}"

print(get_movie_night_cost("Monday", "10:00am", 2))
print(get_movie_night_cost("Tuesday", "10:00am", 2))
print(get_movie_night_cost("Wednesday", "10:00am", 2))
print(get_movie_night_cost("Thursday", "10:00am", 2))
print(get_movie_night_cost("Friday", "10:00am", 2))
print(get_movie_night_cost("Saturday", "10:00am", 2))
print(get_movie_night_cost("Sunday", "10:00am", 2))