def find_min(nums)
    left = 0
    right = nums.length - 1
    while left < right
        mid = (left + right) / 2
        if nums[mid] > nums[right]
            left = mid + 1
        else
            right = mid
        end
    end
    nums[left]
end

if __FILE__ == $PROGRAM_NAME
  puts find_min([3,4,5,1,2])
  puts find_min([4,5,6,7,0,1,2])
  puts find_min([11,13,15,17])
end