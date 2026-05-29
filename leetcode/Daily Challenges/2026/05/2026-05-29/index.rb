def min_element(nums)
  nums.map { |n| n.to_s.chars.sum(&:to_i) }.min
end

if __FILE__ == $PROGRAM_NAME
  p min_element([10, 12, 13, 14]) # 1
  p min_element([1, 2, 3, 4])     # 1
  p min_element([999, 19, 199])   # 10
end
