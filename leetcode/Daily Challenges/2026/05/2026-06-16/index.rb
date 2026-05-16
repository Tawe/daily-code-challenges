def find_min(nums)
  left = 0
  right = nums.length - 1
  while left < right
    mid = (left + right) / 2
    if nums[mid] > nums[right]
      left = mid + 1
    elsif nums[mid] < nums[right]
      right = mid
    else
      right -= 1
    end
  end
  nums[left]
end

if __FILE__ == $PROGRAM_NAME
  p find_min([1, 3, 5])
  p find_min([2, 2, 2, 0, 1])
end
