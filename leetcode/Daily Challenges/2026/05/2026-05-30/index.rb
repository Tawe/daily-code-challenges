def get_results(queries)
  base = 65_536
  inf = 50_001
  max_t = Array.new(2 * base, -1)
  gap_t = Array.new(2 * base, -1)
  nxt = Array.new(50_001, 0)
  min_obs = inf
  results = []

  queries.each do |q|
    if q[0] == 1
      p = q[1]
      min_obs = p if p < min_obs

      pred = 0
      if min_obs <= p - 1
        if p > 0 && max_t[(p - 1) + base] == p - 1
          pred = p - 1
        else
          pred = -1
          ll = base
          rr = (p - 1) + base
          while ll <= rr
            if ll.odd?
              v = max_t[ll]
              pred = v if v > pred
              ll += 1
            end
            if rr.even?
              v = max_t[rr]
              pred = v if v > pred
              rr -= 1
            end
            ll >>= 1
            rr >>= 1
          end
          pred = 0 if pred < 0
        end
      end

      succ = nxt[pred]
      nxt[pred] = p
      nxt[p] = succ

      i = p + base
      max_t[i] = p
      i >>= 1
      while i > 0
        a = max_t[2 * i]
        b = max_t[2 * i + 1]
        max_t[i] = a > b ? a : b
        i >>= 1
      end

      g = p - pred
      i = p + base
      gap_t[i] = g
      i >>= 1
      while i > 0
        a = gap_t[2 * i]
        b = gap_t[2 * i + 1]
        gap_t[i] = a > b ? a : b
        i >>= 1
      end

      if succ > 0
        g2 = succ - p
        i = succ + base
        gap_t[i] = g2
        i >>= 1
        while i > 0
          a = gap_t[2 * i]
          b = gap_t[2 * i + 1]
          gap_t[i] = a > b ? a : b
          i >>= 1
        end
      end
    else
      x = q[1]
      sz = q[2]
      if sz > x
        results << false
        next
      end

      g = -1
      ll = base
      rr = x + base
      while ll <= rr
        if ll.odd?
          v = gap_t[ll]
          g = v if v > g
          ll += 1
        end
        if rr.even?
          v = gap_t[rr]
          g = v if v > g
          rr -= 1
        end
        ll >>= 1
        rr >>= 1
      end
      if g >= sz
        results << true
        next
      end

      last = -1
      ll = base
      rr = x + base
      while ll <= rr
        if ll.odd?
          v = max_t[ll]
          last = v if v > last
          ll += 1
        end
        if rr.even?
          v = max_t[rr]
          last = v if v > last
          rr -= 1
        end
        ll >>= 1
        rr >>= 1
      end
      last = 0 if last < 0
      results << (x - last >= sz)
    end
  end

  results
end

if __FILE__ == $PROGRAM_NAME
  p get_results([[1, 2], [2, 3, 3], [2, 3, 1], [2, 2, 2]])
  p get_results([[1, 7], [2, 7, 6], [1, 2], [2, 7, 5], [2, 7, 6]])
end
