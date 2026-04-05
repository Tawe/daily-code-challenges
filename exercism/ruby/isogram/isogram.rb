module Isogram
  def self.isogram?(word)
    word = word.gsub(/[^a-zA-Z]/, '')
    return true if word.empty?
    word.downcase.chars.uniq == word.downcase.chars
  end
end
