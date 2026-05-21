def find_the_prefix_common_array(a, b)
  in_a = {}
  in_b = {}

  (0...a.length).map do |i|
    in_a[a[i]] = true
    in_b[b[i]] = true
    in_a.keys.count { |k| in_b[k] }
  end
end

if __FILE__ == $PROGRAM_NAME
  p find_the_prefix_common_array([1, 3, 2, 4], [3, 1, 2, 4])
  p find_the_prefix_common_array([2, 3, 1], [3, 1, 2])
end
