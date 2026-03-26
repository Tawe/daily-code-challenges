from datetime import datetime, timedelta

def can_retake(finish_time, current_time):

    finish_time = datetime.strptime(finish_time, "%Y-%m-%dT%H:%M:%S")
  
    current_time = datetime.strptime(current_time, "%Y-%m-%dT%H:%M:%S")

    print(finish_time + timedelta(hours=48))
    print(current_time)

    return current_time >= finish_time + timedelta(hours=48)

print(can_retake("2026-03-23T08:00:00", "2026-03-25T14:00:00"))