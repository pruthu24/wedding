import sys
import io
from PIL import Image, ImageEnhance, ImageFilter, ImageOps
try:
    from rembg import remove
except ImportError:
    print("rembg not installed yet")
    sys.exit(1)

input_path = "/Users/prithvikumar/.gemini/antigravity/brain/4f18d2e9-5bfa-4b3a-925f-ca21f8efb102/.user_uploaded/media_1791057981878.png"
output_path = "/Users/prithvikumar/Downloads/varshupruthu/public/venkateshwara.png"

# Read image
with open(input_path, 'rb') as i:
    input_data = i.read()

# Remove background
print("Removing background...")
output_data = remove(input_data)

# Open as PIL Image
img = Image.open(io.BytesIO(output_data)).convert("RGBA")

# We want to tint it dark brown/sepia: #4A2E15
# First convert to grayscale (luminance)
gray = img.convert("L")

# Colorize using a dark brown for the darks and a lighter brown/transparent for lights
# Actually, the user wants "Dark brown / very dark sepia deity", "No bright colors"
# If we just use the alpha channel from rembg and tint the visible pixels:
r, g, b, a = img.split()

# Enhance contrast of the grayscale image
enhancer = ImageEnhance.Contrast(gray)
gray = enhancer.enhance(1.5)

# Colorize
sepia = ImageOps.colorize(gray, black="#2b1a0c", white="#7a5433")

# Put the alpha channel back
sepia.putalpha(a)

# Optional: soft edges by slightly blurring the alpha channel
a = a.filter(ImageFilter.GaussianBlur(radius=1.5))
sepia.putalpha(a)

sepia.save(output_path, "PNG")
print(f"Saved processed image to {output_path}")
