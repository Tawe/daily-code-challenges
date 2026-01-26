def scale_image(size, scale):
    width, height = size.split("x")
    width = int(float(width) * scale)
    height = int(float(height) * scale)
    return f"{width}x{height}"

print(scale_image("800x600", 0.5))