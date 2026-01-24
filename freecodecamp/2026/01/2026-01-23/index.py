import re
def is_valid_hex(s):

    return True if re.match(r'^#([0-9a-fA-F]{3}){1,2}$', s) else False

print(is_valid_hex("#123456"))