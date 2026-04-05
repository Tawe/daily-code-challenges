module Acronym
  def self.abbreviate(text)
    cleaned = text.gsub(/[^a-zA-Z\s-]/, '')
    cleaned.split(/[\s-]+/).reject(&:empty?).map { |word| word[0] }.join.upcase
  end
end
