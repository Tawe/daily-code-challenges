# @param {Integer} n
# @return {Integer}
def rotated_digits(n)
  rotation = {
    "0" => "0",
    "1" => "1",
    "8" => "8",
    "2" => "5",
    "5" => "2",
    "6" => "9",
    "9" => "6"
  }

  count = 0

  (1..n).each do |x|
    s = x.to_s
    next unless s.chars.all? { |c| rotation.key?(c) }

    rotated = s.chars.map { |c| rotation[c] }.join.to_i
    count += 1 if rotated != x
  end

  count
end

if __FILE__ == $PROGRAM_NAME
  puts rotated_digits(10) # 4
  puts rotated_digits(1)  # 0
  puts rotated_digits(2)  # 1
end
