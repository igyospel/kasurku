import numpy as np
from PIL import Image, ImageDraw

def remove_defects(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    # Convert to numpy array for fast processing
    arr = np.array(img)
    
    # Create a mask for white pixels
    # conditions: R>200, G>200, B>200 and Alpha > 0
    # Note: The previous flood fill might have set alpha=0 for background.
    # We only care about remaining visible white pixels.
    r, g, b, a = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]
    white_mask = (r > 200) & (g > 200) & (b > 200) & (a > 0)
    
    # 1. Handle "mini hotel" area (Bottom 20% of image roughly)
    height, width = arr.shape[:2]
    bottom_threshold = int(height * 0.70) # heuristic: mini hotel is at the bottom
    
    # Set all white pixels in the bottom area to transparent
    arr[bottom_threshold:, :, 3][white_mask[bottom_threshold:, :]] = 0
    
    # update mask after step 1
    # We need to re-evaluate remaining white pixels for component analysis
    # But for simplicity, let's just use a fresh copy for analysis or careful indexing.
    # Actually, let's work on the 'arr' directly.
    
    # 2. Green K Area
    # Find green pixels to locate the K
    # Green is roughly R < 100, G > 100, B < 100 (based on previous observations)
    # Let's be lenient: G > R and G > B and G > 50
    green_mask = (g > r) & (g > b) & (g > 50) & (a > 0)
    
    if np.any(green_mask):
        ys, xs = np.where(green_mask)
        k_min_x, k_max_x = np.min(xs), np.max(xs)
        k_min_y, k_max_y = np.min(ys), np.max(ys)
        
        # Define a bounding box for the Green K with some padding
        pad = 10
        k_box_slice = (slice(max(0, k_min_y-pad), min(height, k_max_y+pad)), 
                       slice(max(0, k_min_x-pad), min(width, k_max_x+pad)))
        
        # Remove ALL white pixels inside the Green K's bounding box
        # Since Green K has no white body, any white here is a gap/defect.
        region_white = white_mask[k_box_slice]
        arr[k_box_slice][region_white, 3] = 0
    
    # 3. Holes in 'A', 'R' (Letter Analysis)
    # We need to find connected components of the remaining white pixels in the top section.
    # We will use scikit-image's label if available, or a simple custom BFS.
    # Since we can't guarantee scikit-image is installed, I'll use a simple BFS/Union-Find.
    # Or determining clusters by X-range.
    
    # Let's iterate column by column? No, that's inefficient.
    # Let's scan the top section (0 to bottom_threshold).
    
    # Get remaining white pixel coordinates
    # We need to refresh the white_mask because we modified 'arr'
    r, g, b, a = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]
    current_white_mask = (r > 200) & (g > 200) & (b > 200) & (a > 0)
    current_white_mask[bottom_threshold:, :] = False # Ignore bottom (already cleared)
    
    # Label connected components
    visited = np.zeros_like(current_white_mask, dtype=bool)
    components = []
    
    # Helper for BFS
    rows, cols = current_white_mask.shape
    for y in range(rows):
        for x in range(cols):
            if current_white_mask[y, x] and not visited[y, x]:
                # Start new component
                stack = [(y, x)]
                visited[y, x] = True
                component_pixels = []
                min_x_c, max_x_c = x, x
                
                while stack:
                    cy, cx = stack.pop()
                    component_pixels.append((cy, cx))
                    min_x_c = min(min_x_c, cx)
                    max_x_c = max(max_x_c, cx)
                    
                    # check neighbors (4-connectivity)
                    for dy, dx in [(-1,0), (1,0), (0,-1), (0,1)]:
                        ny, nx = cy + dy, cx + dx
                        if 0 <= ny < rows and 0 <= nx < cols:
                            if current_white_mask[ny, nx] and not visited[ny, nx]:
                                visited[ny, nx] = True
                                stack.append((ny, nx))
                
                size = len(component_pixels)
                components.append({
                    'pixels': component_pixels,
                    'size': size,
                    'min_x': min_x_c,
                    'max_x': max_x_c,
                    'center_x': (min_x_c + max_x_c) / 2
                })

    # Group components by X-overlap to identify "letters"
    # Sort by center_x
    components.sort(key=lambda c: c['center_x'])
    
    # Simple clustering: if X-ranges overlap primarily, they are the same letter.
    # OR: A 'hole' is completely contained within the X-range of a 'body'.
    
    # Let's iterate and find "small" components that are likely holes.
    # Heuristic: A hole is likely significantly smaller than the largest components (Body).
    # And a hole is usually 'overlapped' in X by a larger component.
    
    if components:
        # Find max size (approx size of a full letter body)
        max_size = max(c['size'] for c in components)
        
        # Threshold for being a "hole" vs "part of a split letter"
        # A hole is usually < 20% of the body size?
        hole_threshold_size = max_size * 0.3 
        
        for c in components:
            if c['size'] < hole_threshold_size:
                # Potential hole. 
                # Check if it overlaps with a larger component in X?
                # Actually, simpler: Is it "contained" in X range by a larger neighbor?
                is_hole = False
                for big_c in components:
                    if big_c['size'] > hole_threshold_size:
                        # Check overlap
                        if (c['min_x'] >= big_c['min_x'] - 10 and 
                            c['max_x'] <= big_c['max_x'] + 10):
                            is_hole = True
                            break
                
                if is_hole:
                    # Remove this component (set to transparent)
                    for py, px in c['pixels']:
                        arr[py, px, 3] = 0

    # Save result
    Image.fromarray(arr).save(output_path)
    print(f"Saved cleaned logo to {output_path}")

if __name__ == "__main__":
    remove_defects("src/assets/logo.png", "src/assets/logo.png")
