def longest_common_prefix(arr1, arr2)
  root = {}

  arr2.each do |num|
    node = root
    num.to_s.each_char do |ch|
      node[ch] ||= {}
      node = node[ch]
    end
  end

  max_len = 0
  arr1.each do |num|
    node = root
    len = 0
    num.to_s.each_char do |ch|
      break unless node[ch]

      node = node[ch]
      len += 1
      max_len = len if len > max_len
    end
  end

  max_len
end

if __FILE__ == $PROGRAM_NAME
  p longest_common_prefix([1, 10, 100], [1000]) # 3
  p longest_common_prefix([1, 2, 3], [4, 4, 4])   # 0
end
