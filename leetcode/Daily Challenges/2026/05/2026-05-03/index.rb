def rotate_string(s, goal)
  return false if s.length != goal.length

  (s + s).include?(goal)
end

if __FILE__ == $PROGRAM_NAME
  puts rotate_string("abcde", "cdeab") # true
  puts rotate_string("abcde", "abced") # false
end
