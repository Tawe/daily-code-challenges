def can_reach(arr, start)
  n = arr.length
  visited = Array.new(n, false)
  queue = [start]
  visited[start] = true

  until queue.empty?
    i = queue.shift
    return true if arr[i].zero?

    jump = arr[i]
    [i + jump, i - jump].each do |j|
      next if j.negative? || j >= n || visited[j]

      visited[j] = true
      queue.push(j)
    end
  end

  false
end

if __FILE__ == $PROGRAM_NAME
  p can_reach([4, 2, 3, 0, 3, 1, 2], 5) # true
  p can_reach([4, 2, 3, 0, 3, 1, 2], 0) # true
  p can_reach([3, 0, 2, 1, 2], 2)      # false
end
