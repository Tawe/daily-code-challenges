def number_of_special_chars(word)
  first_upper = {}
  last_lower = {}

  word.each_char.with_index do |c, i|
    key = c.downcase
    if c == c.downcase
      last_lower[key] = i
    else
      first_upper[key] ||= i
    end
  end

  first_upper.count do |key, upper_i|
    last_lower[key] && last_lower[key] < upper_i
  end
end

if __FILE__ == $PROGRAM_NAME
  p number_of_special_chars('aaAbcBC') # 3
  p number_of_special_chars('abc')     # 0
  p number_of_special_chars('AbBCab')  # 0
end
