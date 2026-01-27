from datetime import datetime, timezone

def odd_or_even_day(timestamp):
    date = datetime.fromtimestamp(timestamp / 1000, tz=timezone.utc)
    return "odd" if date.day % 2 != 0 else "even"

print(odd_or_even_day(1769472000000))