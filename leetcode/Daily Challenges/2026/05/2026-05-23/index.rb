def check(nums)
  count = 0
  (1...nums.length).each do |i|
    count += 1 if nums[i] < nums[i - 1]
  end
  count <= 1 && (count.zero? || nums[-1] <= nums[0])
end

if __FILE__ == $PROGRAM_NAME
  p check([3, 4, 5, 1, 2])
  p check([2, 1, 3, 4])
  p check([1, 2, 3])
end