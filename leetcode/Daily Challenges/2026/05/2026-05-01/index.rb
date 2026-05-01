def max_rotate_function(nums)
  n = nums.length
  total = nums.sum
  current = 0

  nums.each_with_index do |value, index|
    current += index * value
  end

  best = current

  (1...n).each do |k|
    current = current + total - n * nums[n - k]
    best = [best, current].max
  end

  best
end

if __FILE__ == $PROGRAM_NAME
  puts max_rotate_function([4, 3, 2, 6])
  puts max_rotate_function([100])
end
