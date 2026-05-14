def is_good(nums)
  n = nums.max
  return false if nums.length != n + 1
  c = nums.each_with_object(Hash.new(0)) { |x, h| h[x] += 1 }
  return false if c[n] != 2
  (1...n).all? { |i| c[i] == 1 }
end

if __FILE__ == $PROGRAM_NAME
  p is_good([2, 1, 3])
  p is_good([1, 3, 3, 2])
  p is_good([1, 1])
  p is_good([3, 4, 4, 1, 2, 1])
end