def max_jumps(arr, d)
  n = arr.length
  dp = Array.new(n, 0)

  dfs = lambda do |i|
    return dp[i] if dp[i] != 0

    best = 1
    ((i + 1)..[i + d, n - 1].min).each do |j|
      break if arr[j] >= arr[i]

      best = [best, 1 + dfs.call(j)].max
    end
    ([i - d, 0].max...i).reverse_each do |j|
      break if arr[j] >= arr[i]

      best = [best, 1 + dfs.call(j)].max
    end
    dp[i] = best
  end

  (0...n).map { |i| dfs.call(i) }.max
end

if __FILE__ == $PROGRAM_NAME
  p max_jumps([6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12], 2) # 4
  p max_jumps([3, 3, 3, 3, 3], 3)                     # 1
  p max_jumps([7, 6, 5, 4, 3, 2, 1], 1)               # 7
end
