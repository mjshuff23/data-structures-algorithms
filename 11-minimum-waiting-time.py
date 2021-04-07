def minWaitingTime(queries):
    queries.sort()
    yo = enumerate(queries)
    for i, duration in yo:
        print(i, duration)

    totalWaitingTime = 0
    for i, duration in enumerate(queries):
        queriesLeft = len(queries) - (i + 1)
        totalWaitingTime += duration * queriesLeft

    return totalWaitingTime


print(minWaitingTime([3, 1, 2]))
