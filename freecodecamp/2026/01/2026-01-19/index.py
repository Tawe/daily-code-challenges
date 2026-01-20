def compare_energy(calories_burned, watt_hours_used):
    calories_to_joules = 4184
    watt_hours_to_joules = 3600

    return "Workout" if calories_burned * calories_to_joules > watt_hours_used * watt_hours_to_joules else "Devices" if calories_burned * calories_to_joules < watt_hours_used * watt_hours_to_joules else "Equal"


print(compare_energy(250, 50))