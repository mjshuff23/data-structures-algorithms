def sorted_squared_array(array):
  sorted_squares = []
  smaller_value_index = 0
  larger_value_index = len(array) - 1

  for index in reversed(range(len(array))):
    smaller_value = array[smaller_value_index]
    larger_value = array[larger_value_index]

    print(index)

    if abs(smaller_value) > abs(larger_value):
      sorted_squares.insert(0, smaller_value * smaller_value)
      smaller_value_index += 1
    else:
      sorted_squares.insert(0, larger_value * larger_value)
      larger_value_index -= 1

  return sorted_squares


my_list = [-5, 0, 2, 3, 6]

print(sorted_squared_array(my_list))
