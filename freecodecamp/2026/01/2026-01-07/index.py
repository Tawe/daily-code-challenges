def parse_unordered_list(markdown):
    items = []
    for line in markdown.split("\n"):
        if line.startswith("-"):
            rest = line[1:]
        if rest.startswith(" "):
            items.append(rest.lstrip(" "))
    return "<ul><li>" + "</li><li>".join(items) + "</li></ul>"

print(parse_unordered_list("- Item A\n- Item B"))