def passing_count(scores, passing_score):
    count = 0
    for score in scores:
        if score >= passing_score:
            count += 1
    return count

print(passing_count([70, 80, 90], 80))