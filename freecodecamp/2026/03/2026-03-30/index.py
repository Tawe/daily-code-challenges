import calendar

def get_due_date(date_str):
    year, month, day = map(int, date_str.split("-"))

    month += 9
    while month > 12:
        month -= 12
        year += 1

    last = calendar.monthrange(year, month)[1]
    day = min(day, last)

    return f"{year}-{month:02d}-{day:02d}"


if __name__ == "__main__":
    print(get_due_date("2025-05-29"))
