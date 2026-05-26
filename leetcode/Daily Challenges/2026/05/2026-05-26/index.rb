def number_of_special_chars(word)
  lower = {}
  upper = {}

  word.each_char do |c|
    if c == c.downcase
      lower[c] = true
    else
      upper[c.downcase] = true
    end
  end

  lower.keys.count { |c| upper[c] }
end

if __FILE__ == $PROGRAM_NAME
  p number_of_special_chars('aaAbcBC') # 3
  p number_of_special_chars('abc')     # 0
  p number_of_special_chars('abBCab')  # 1
end
