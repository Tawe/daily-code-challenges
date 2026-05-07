def max_value(nums)
  n = nums.length
  suffix_min = Array.new(n)
  suffix_min[n - 1] = nums[n - 1]

  (n - 2).downto(0) do |i|
    suffix_min[i] = [nums[i], suffix_min[i + 1]].min
  end

  ans = Array.new(n)
  segment_start = 0
  segment_max = -Float::INFINITY

  (0...n).each do |i|
    segment_max = [segment_max, nums[i]].max
    can_split = (i == n - 1) || (segment_max <= suffix_min[i + 1])
    next unless can_split

    (segment_start..i).each { |idx| ans[idx] = segment_max }
    segment_start = i + 1
    segment_max = -Float::INFINITY
  end

  ans
end

if __FILE__ == $PROGRAM_NAME
  p max_value([2, 1, 3])
  p max_value([2, 3, 1])
end