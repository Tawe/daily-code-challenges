def minimum_effort(tasks)
  sorted = tasks.sort_by { |(actual, minimum)| -(minimum - actual) }

  prefix_actual = 0
  answer = 0

  sorted.each do |(actual, minimum)|
    answer = [answer, minimum + prefix_actual].max
    prefix_actual += actual
  end

  answer
end

if __FILE__ == $PROGRAM_NAME
  p minimum_effort([[1, 2], [2, 4], [4, 8]])
  p minimum_effort([[1, 3], [2, 4], [10, 11], [10, 12], [8, 9]])
  p minimum_effort([[1, 7], [2, 8], [3, 9], [4, 10], [5, 11], [6, 12]])
end
