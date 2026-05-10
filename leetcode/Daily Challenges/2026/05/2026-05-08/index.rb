def min_jumps(nums)
  n = nums.length
  return 0 if n == 1

  max_val = nums.max
  spf = smallest_prime_factor

  jump_prime = Array.new(max_val + 1, false)
  nums.each do |x|
    jump_prime[x] = true if x > 1 && spf[x] == x
  end

  by_prime = Array.new(max_val + 1)

  i = 0
  while i < n
    x = nums[i]
    while x > 1
      p = spf[x]
      if jump_prime[p]
        bucket = by_prime[p]
        if bucket.nil?
          by_prime[p] = [i]
        else
          bucket << i
        end
      end
      x /= p while x % p == 0
    end
    i += 1
  end

  dist = Array.new(n, -1)
  dist[0] = 0

  queue = Array.new(n)
  head = 0
  tail = 0
  queue[tail] = 0
  tail += 1

  used_prime = Array.new(max_val + 1, false)

  while head < tail
    i = queue[head]
    head += 1
    d = dist[i]
    return d if i == n - 1

    left = i - 1
    if left >= 0 && dist[left] == -1
      dist[left] = d + 1
      queue[tail] = left
      tail += 1
    end

    right = i + 1
    if right < n && dist[right] == -1
      dist[right] = d + 1
      queue[tail] = right
      tail += 1
    end

    p = nums[i]
    next unless p > 1 && spf[p] == p
    next if used_prime[p]

    used_prime[p] = true
    bucket = by_prime[p]
    by_prime[p] = nil
    next if bucket.nil?

    j = 0
    m = bucket.length
    while j < m
      idx = bucket[j]
      if dist[idx] == -1
        dist[idx] = d + 1
        queue[tail] = idx
        tail += 1
      end
      j += 1
    end
  end

  -1
end

def smallest_prime_factor
  return $smallest_prime_factor if defined?($smallest_prime_factor)

  limit = 1_000_000
  spf = Array.new(limit + 1) { |i| i }
  spf[0] = 0
  spf[1] = 1

  i = 2
  while i * i <= limit
    if spf[i] == i
      j = i * i
      while j <= limit
        spf[j] = i if spf[j] == j
        j += i
      end
    end
    i += 1
  end

  $smallest_prime_factor = spf
end

if __FILE__ == $PROGRAM_NAME
  p min_jumps([1, 2, 4, 6])
  p min_jumps([2, 3, 4, 7, 9])
  p min_jumps([4, 6, 5, 8])
end