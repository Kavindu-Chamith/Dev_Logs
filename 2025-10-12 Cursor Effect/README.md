# Custom Cursor Effect

A beautiful, customizable cursor effect that replaces the default mouse cursor with an elegant trailing circle animation.

## 🚀 Features

- **Smooth Trail Animation** - Multiple circles follow the cursor with elegant motion
- **Customizable Appearance** - Easy to modify colors, sizes, and trail length
- **Performance Optimized** - Uses requestAnimationFrame for smooth performance
- **Easy Integration** - Simple plug-and-play setup
- **Cross-browser Compatible** - Works on all modern browsers
- **Blend Mode Effects** - Uses mix-blend-mode for interesting visual effects

## 📁 Project Structure

```
cursor-effect/
│
├── CursorEffect.html    # Main HTML file with example content
├── CursorEffect.css     # Styles and cursor appearance
├── CursorEffect.js      # Animation logic
└── README.md           # Project documentation
```

## 🛠️ Installation

1. **Clone or download the files**
   ```bash
   git clone https://github.com/your-username/cursor-effect.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd cursor-effect
   ```

3. **Open in your browser**
   ```bash
   open CursorEffect.html
   # or
   # double-click CursorEffect.html
   ```

## 💻 Usage

### Basic Implementation

Include the CSS and JavaScript files in your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website</title>
    <link rel="stylesheet" href="CursorEffect.css">
</head>
<body>
    <!-- Your website content here -->
    <h1>Welcome to My Website</h1>
    <p>Content with custom cursor effect...</p>

    <!-- Cursor Effect -->
    <div class="cursor">
        <div class="circle"></div>
        <div class="circle"></div>
        <!-- Add more circles for longer trail -->
    </div>

    <script src="CursorEffect.js"></script>
</body>
</html>
```

### As a Background Element

The cursor is positioned with high z-index and won't interfere with clickable elements:

```html
<nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
</nav>

<div class="cursor">
    <!-- Cursor circles -->
</div>
```

## 🎨 Customization

### Changing Colors

Modify the cursor colors in `CursorEffect.css`:

```css
.circle {
    background-color: #ff6b6b; /* Change to your preferred color */
}

/* For multiple colors */
.circle:nth-child(odd) {
    background-color: #4ecdc4;
}

.circle:nth-child(even) {
    background-color: #ff6b6b;
}
```

### Adjusting Size and Trail Length

```css
.circle {
    width: 20px;        /* Change circle size */
    height: 20px;
    border-radius: 50%; /* Perfect circle */
}
```

To change trail length, add or remove circle elements in HTML:

```html
<div class="cursor">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <!-- More circles = longer trail -->
</div>
```

### Modifying Animation Speed

Change the animation smoothing in `CursorEffect.js`:

```javascript
// In the animateCircles function
x += (nextCircle.x - x) * 0.3;  // Lower value = smoother, slower trail
y += (nextCircle.y - y) * 0.3;  // Higher value = tighter, faster trail
```

## 🔧 Technical Details

### How It Works

1. **HTML Structure**: Multiple `<div class="circle">` elements create the trail
2. **CSS Styling**: Circles are styled with fixed positioning and blend modes
3. **JavaScript Animation**: 
   - Tracks mouse coordinates
   - Animates circles with smooth following behavior
   - Uses requestAnimationFrame for performance

### Key Features

- **Pointer Events None**: Cursor doesn't interfere with clickable elements
- **Mix-blend-mode**: Creates interesting color interactions with background
- **Smooth Scaling**: Circles scale down along the trail for depth effect
- **Performance**: Optimized animation loop

### Browser Support

- ✅ Chrome 50+
- ✅ Firefox 50+
- ✅ Safari 10+
- ✅ Edge 15+
- ✅ Opera 40+

## 🚨 Important Notes

- The cursor has `pointer-events: none` so it won't block interactions
- Uses `mix-blend-mode: difference` for visual effects - test with your background
- For best performance, keep the number of circles reasonable (10-20)
