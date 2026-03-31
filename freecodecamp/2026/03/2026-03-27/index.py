def truncate_text(s):
    ordered = [
        ("ilI", 1),
        ("fjrt", 2),
        ("abcdeghkmnopqrstuvwxyzJL", 3),
        ("ABCDEFGHKMNOPQRSTUVWXYZ", 4),
        (" ", 2),
        (".", 1),
    ]
    char_widths = {}
    for chars, width in ordered:
        for ch in chars:
            if ch not in char_widths:
                char_widths[ch] = width

    max_untouched = 50
    max_with_ellipsis = 50
    ellipsis = "..."
    ellipsis_width = 3

    total_width = sum(char_widths.get(ch, 1) for ch in s)
    if total_width <= max_untouched:
        return s

    result = []
    current_width = 0

    for ch in s:
        ch_width = char_widths.get(ch, 1)

        if current_width + ch_width + ellipsis_width > max_with_ellipsis:
            break

        result.append(ch)
        current_width += ch_width

    return "".join(result) + ellipsis

print(truncate_text("Hello, world! This is a longer string that should be truncated."))
print(truncate_text("The fast striped zebra"))