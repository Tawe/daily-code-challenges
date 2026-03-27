def get_movie_night_cost(day, showtime, number_of_tickets):
    if day in ["Friday", "Saturday", "Sunday"]:
        cost = 12 * number_of_tickets
    else:
        cost = 10 * number_of_tickets

    if showtime < "17:00":
        cost -= 2 * number_of_tickets

    if day == "Tuesday":
        cost = 5 * number_of_tickets

    return f"${cost:.2f}"

print(get_movie_night_cost("Monday", "10:00am", 2))
print(get_movie_night_cost("Tuesday", "10:00am", 2))
print(get_movie_night_cost("Wednesday", "10:00am", 2))
print(get_movie_night_cost("Thursday", "10:00am", 2))
print(get_movie_night_cost("Friday", "10:00am", 2))
print(get_movie_night_cost("Saturday", "10:00am", 2))
print(get_movie_night_cost("Sunday", "10:00am", 2))