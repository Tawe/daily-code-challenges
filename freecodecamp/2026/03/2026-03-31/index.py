def alarm_check(alarm_time, wake_time):
    alarm_hour, alarm_minute = map(int, alarm_time.split(":"))
    wake_hour, wake_minute = map(int, wake_time.split(":"))

    if wake_hour < alarm_hour:
        return "early"
    elif wake_hour > alarm_hour:
        return "late"
    else:
        if wake_minute < alarm_minute -10:
            return "early"
        elif wake_minute > alarm_minute + 10:
            return "late"
        else:
            return "on time"

print(alarm_check("07:00", "06:50"))