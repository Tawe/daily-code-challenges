def min_jumps(arr)
  n = arr.length
  return 0 if n == 1

  buckets = Hash.new { |h, k| h[k] = [] }
  arr.each_with_index { |v, i| buckets[v] << i }

  dist = Array.new(n)
  dist[0] = 0
  queue = [0]

  until queue.empty?
    i = queue.shift
    return dist[i] if i == n - 1

    neighbors = []
    neighbors << i - 1 if i.positive?
    neighbors << i + 1 if i < n - 1
    neighbors.concat(buckets.delete(arr[i]) || [])

    neighbors.each do |j|
      next if dist[j]

      dist[j] = dist[i] + 1
      queue.push(j)
    end
  end

  dist[n - 1]
end

if __FILE__ == $PROGRAM_NAME
  p min_jumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404])
  p min_jumps([7])
  p min_jumps([7, 6, 9, 6, 9, 6, 9, 7])
end
