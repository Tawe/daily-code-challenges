def can_reach(s, min_jump, max_jump)
  n = s.length
  reach = Array.new(n, false)
  reach[0] = true
  prev = 0

  (0...n).each do |i|
    next unless reach[i]

    lo = [prev + 1, i + min_jump].max
    hi = [i + max_jump, n - 1].min

    (lo..hi).each { |j| reach[j] = true if s[j] == '0' }
    prev = [prev, hi].max
  end

  reach[n - 1]
end

if __FILE__ == $PROGRAM_NAME
  p can_reach('011010', 2, 3)   # true
  p can_reach('01101110', 2, 3) # false
end
