# @param {Integer[][]} grid
# @param {Integer} k
# @return {Integer[][]}
def rotate_grid(grid, k)
  m = grid.length
  n = grid[0].length
  layers = [m, n].min / 2

  (0...layers).each do |layer|
    ring = extract_ring(grid, layer)
    len = ring.length
    kk = k % len

    len.times do |j|
      grid_val = ring[(j + kk) % len]
      write_ring_cell(grid, layer, j, grid_val, m, n)
    end
  end

  grid
end

def extract_ring(grid, layer)
  m = grid.length
  n = grid[0].length
  top = layer
  bottom = m - 1 - layer
  left = layer
  right = n - 1 - layer

  ring = []

  (left..right).each { |j| ring << grid[top][j] }
  ((top + 1)...bottom).each { |i| ring << grid[i][right] }
  (right.downto(left)).each { |j| ring << grid[bottom][j] } if top < bottom
  ((bottom - 1).downto(top + 1)).each { |i| ring << grid[i][left] } if left < right

  ring
end

def write_ring_cell(grid, layer, idx, val, m, n)
  top = layer
  bottom = m - 1 - layer
  left = layer
  right = n - 1 - layer

  width = right - left + 1
  height = bottom - top + 1
  perimeter = 2 * width + 2 * height - 4
  return if perimeter <= 0

  i = idx

  top_len = width
  if i < top_len
    grid[top][left + i] = val
    return
  end
  i -= top_len

  right_len = height - 2
  if i < right_len
    grid[top + 1 + i][right] = val
    return
  end
  i -= right_len

  bottom_len = width
  if i < bottom_len
    grid[bottom][right - i] = val
    return
  end
  i -= bottom_len

  left_len = height - 2
  grid[bottom - 1 - i][left] = val
end

if __FILE__ == $PROGRAM_NAME
  p rotate_grid([[40, 10], [30, 20]], 1)
  p rotate_grid([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 2)
end
