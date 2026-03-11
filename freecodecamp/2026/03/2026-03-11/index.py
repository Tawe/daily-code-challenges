def convert_words(s):
    result = ""
    words = s.split(" ")
    for word in words:
        word_length = len(word)
        if(result == ""):
            result += str(word_length)
        else:
            result += " " + str(word_length)
    return result

print(convert_words("hello world"))