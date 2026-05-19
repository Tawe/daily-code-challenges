def get_common(nums1, nums2)
    i = 0
    j = 0
    while i < nums1.length && j < nums2.length
        if nums1[i] == nums2[j]
            return nums1[i]
        elsif nums1[i] < nums2[j]
            i += 1
        else
            j += 1
        end
    end
    -1
end

if __FILE__ == $PROGRAM_NAME
  p get_common([1, 2, 3], [2, 4])
  p get_common([1, 2, 3, 6], [2, 3, 4, 5])
end