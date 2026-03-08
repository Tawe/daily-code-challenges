import math

def get_element_size(window_size, element_vw, element_vh):
    window_width, window_height = window_size.split("x")
    window_width = int(window_width)
    window_height = int(window_height)
    
    element_width = math.floor(int(element_vw.replace("vw", "")) / 100 * window_width)
    element_height = math.floor(int(element_vh.replace("vh", "")) / 100 * window_height)
    
    return f"{element_width} x {element_height}"

print(get_element_size("1200 x 800", "50vw", "50vh"))