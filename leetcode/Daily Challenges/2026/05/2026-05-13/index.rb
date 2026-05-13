def min_moves(nums, limit)
  n = nums.length
  diff = Array.new(2 * limit + 3, 0)

  (0...(n / 2)).each do |i|
    a = nums[i]
    b = nums[n - 1 - i]
    s = a + b
    one_lo = [1 + b, 1 + a].min
    one_hi = [limit + b, limit + a].max

    diff[2] += 2
    diff[2 * limit + 1] -= 2

    diff[one_lo] -= 1
    diff[one_hi + 1] += 1

    diff[s] -= 1
    diff[s + 1] += 1
  end

  cur = 0
  best = n / 2 * 2
  (2..(2 * limit)).each do |x|
    cur += diff[x]
    best = cur if cur < best
  end

  best
end

if __FILE__ == $PROGRAM_NAME
  p min_moves([1, 2, 4, 3], 4)
  p min_moves([1, 2, 2, 1], 2)
  p min_moves([1, 2, 1, 2], 2)
end