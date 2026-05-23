def search(nums, target)
  left = 0
  right = nums.length - 1

  while left <= right
    mid = (left + right) / 2
    return mid if nums[mid] == target

    if nums[left] <= nums[mid]
      if nums[left] <= target && target < nums[mid]
        right = mid - 1
      else
        left = mid + 1
      end
    elsif nums[mid] < target && target <= nums[right]
      left = mid + 1
    else
      right = mid - 1
    end
  end

  -1
end

if __FILE__ == $PROGRAM_NAME
  p search([4, 5, 6, 7, 0, 1, 2], 0) # 4
  p search([4, 5, 6, 7, 0, 1, 2], 3) # -1
  p search([1], 0)                 # -1
end
