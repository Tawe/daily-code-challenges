def string_indices(words_container, words_query)
  root = { idx: -1, next: {} }

  better = lambda do |candidate, current|
    return true if current == -1

    c_len = words_container[candidate].length
    cur_len = words_container[current].length
    c_len < cur_len || (c_len == cur_len && candidate < current)
  end

  update = lambda do |node, idx|
    node[:idx] = idx if better.call(idx, node[:idx])
  end

  words_container.each_with_index do |word, idx|
    update.call(root, idx)
    node = root
    word.reverse.each_char do |ch|
      node[:next][ch] ||= { idx: -1, next: {} }
      node = node[:next][ch]
      update.call(node, idx)
    end
  end

  words_query.map do |query|
    node = root
    ans = node[:idx]
    query.reverse.each_char do |ch|
      break unless node[:next][ch]

      node = node[:next][ch]
      ans = node[:idx]
    end
    ans
  end
end

if __FILE__ == $PROGRAM_NAME
  p string_indices(%w[abcd bcd xbcd], %w[cd bcd xyz])
  p string_indices(%w[abcdefgh poiuygh ghghgh], %w[gh acbfgh acbfegh])
end
