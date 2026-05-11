def separate_digits(nums)
    nums.map { |num| num.to_s.chars.map(&:to_i) }.flatten
end

if __FILE__ == $PROGRAM_NAME
  p separate_digits([13, 25, 83, 77])
  p separate_digits([7, 1, 3, 9])
end