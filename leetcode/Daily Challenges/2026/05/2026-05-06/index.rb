def rotate_the_box(box_grid)
  m = box_grid.length
  n = box_grid[0].length

  (0...m).each do |i|
    empty = n - 1

    (n - 1).downto(0) do |j|
      if box_grid[i][j] == '*'
        empty = j - 1
      elsif box_grid[i][j] == '#'
        box_grid[i][j] = '.'
        box_grid[i][empty] = '#'
        empty -= 1
      end
    end
  end

  rotated = Array.new(n) { Array.new(m) }

  (0...m).each do |i|
    (0...n).each do |j|
      rotated[j][m - 1 - i] = box_grid[i][j]
    end
  end

  rotated
end

if __FILE__ == $PROGRAM_NAME
  p rotate_the_box([['#', '.', '#']])
  p rotate_the_box([['#', '.', '*', '.'], ['#', '#', '*', '.']])
end