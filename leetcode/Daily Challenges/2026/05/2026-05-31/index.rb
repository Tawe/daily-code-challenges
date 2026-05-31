def asteroids_destroyed(mass, asteroids)
  asteroids.sort.each do |a|
    return false if mass < a

    mass += a
  end
  true
end

if __FILE__ == $PROGRAM_NAME
  p asteroids_destroyed(10, [3, 9, 19, 5, 21]) # true
  p asteroids_destroyed(5, [4, 9, 23, 4])      # false
end
