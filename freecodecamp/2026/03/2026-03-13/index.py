from datetime import datetime, timedelta
import math


def calculate_parking_fee(park_time, pickup_time):
    hourly_fee = 3
    overnight_fee = 10
    minimum_fee = 5

    start = datetime.strptime(park_time, "%H:%M")
    end = datetime.strptime(pickup_time, "%H:%M")

    overnight = False
    if end < start:
        overnight = True
        end += timedelta(days=1)

    hours = (end - start).total_seconds() / 3600

    billable_hours = math.ceil(hours)

    if billable_hours == 0:
        total = 0
    else:
        total = max(billable_hours * hourly_fee, minimum_fee)

    if overnight:
        total += overnight_fee

    return f"${total}"


print(calculate_parking_fee("09:00", "11:00"))
print(calculate_parking_fee("10:00", "10:30"))
print(calculate_parking_fee("08:10", "10:45"))
print(calculate_parking_fee("14:40", "23:10"))
print(calculate_parking_fee("18:15", "01:30"))
print(calculate_parking_fee("11:11", "11:10"))
