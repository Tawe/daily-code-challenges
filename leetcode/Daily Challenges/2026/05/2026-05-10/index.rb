def maximum_jumps(nums, target)
  n = nums.length
  dp = Array.new(n, -1)
  dp[0] = 0

  (1...n).each do |j|
    (0...j).each do |i|
      diff = nums[j] - nums[i]
      next unless diff >= -target && diff <= target
      next if dp[i] == -1

      cand = dp[i] + 1
      dp[j] = cand if cand > dp[j]
    end
  end

  dp[n - 1]
end

if __FILE__ == $PROGRAM_NAME
  p maximum_jumps([1, 3, 6, 4, 1, 2], 2) # 3
  p maximum_jumps([1, 3, 6, 4, 1, 2], 3) # 5
  p maximum_jumps([1, 3, 6, 4, 1, 2], 0) # -1
end
