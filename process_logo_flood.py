from PIL import Image
import sys

# Increase recursion depth for deep flood fills if using recursion, 
# but we will use iterative queue to avoid stack overflow.

def flood_fill_transparency(input_path, output_path, threshold=200):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    # Visited set to keep track of processed pixels
    # We will modify the image in place, so identifying "processed" requires checking alpha
    # But checking alpha is not enough if we want to distinguish "originally transparent" vs "processed".
    # Since original is JPG (no alpha), any alpha=0 is processed.
    
    # Queue for BFS
    queue = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)] # Start from all corners
    
    # Directions: Up, Down, Left, Right
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]

    processed_count = 0

    while queue:
        x, y = queue.pop(0)

        # Check bounds
        if x < 0 or x >= width or y < 0 or y >= height:
            continue

        r, g, b, a = pixels[x, y]

        # If already transparent, skip
        if a == 0:
            continue

        # Check if "white-ish"
        if r > threshold and g > threshold and b > threshold:
            # Make Transparent
            pixels[x, y] = (255, 255, 255, 0)
            processed_count += 1

            # Add neighbors
            for i in range(4):
                nx, ny = x + dx[i], y + dy[i]
                if 0 <= nx < width and 0 <= ny < height:
                    # Optimize: only add if not already transparent?
                    # The main loop checks transparency, but checking here saves queue size
                    if pixels[nx, ny][3] != 0: 
                        queue.append((nx, ny))
    
    print(f"Processed {processed_count} pixels.")
    
    # Save
    img.save(output_path, "PNG")
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    flood_fill_transparency("src/assets/logo.jpg", "src/assets/logo.png")
