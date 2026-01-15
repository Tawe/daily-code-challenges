import re

def parse_link(markdown):
    return re.sub(r'\[(.*?)\]\((.*?)\)', lambda m: f'<a href="{m.group(2)}">{m.group(1)}</a>', markdown)

print(parse_link("[freeCodeCamp](https://freecodecamp.org/)"))