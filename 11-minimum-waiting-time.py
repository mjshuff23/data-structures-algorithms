def minWaitingTime(queries):
    queries.sort()

    totalWaitingTime = 0
    for i, duration in enumerate(queries):
        queriesLeft = len(queries) - (i + 1)
        totalWaitingTime += duration * queriesLeft

    return totalWaitingTime


print(minWaitingTime([3, 1, 2]))
