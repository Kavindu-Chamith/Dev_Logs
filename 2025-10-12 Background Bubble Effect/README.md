# Animated Bubble Background

A lightweight, pure HTML/CSS animated bubble background with smooth animations and vibrant colors. Perfect for adding visual interest to websites and web applications.

## 🚀 Features

- **Pure CSS Animation** - No JavaScript required
- **Responsive Design** - Works on all screen sizes
- **Performance Optimized** - Uses CSS transforms for smooth animations
- **Easy to Customize** - Modify colors, sizes, and animation speeds
- **Lightweight** - Minimal code footprint
- **Cross-browser Compatible** - Works on all modern browsers

## 📁 Project Structure

```
bubble-background/
│
├── bg.html          # Main HTML file
├── bg.css           # Styles and animations
└── README.md        # Project documentation
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bubble-background.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd bubble-background
   ```

3. **Open in your browser**
   ```bash
   open bg.html
   # or
   # double-click bg.html file
   ```

## 💻 Usage

### Basic Implementation

Simply include the CSS and HTML structure in your project:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website</title>
    <link rel="stylesheet" href="bg.css">
</head>
<body>
    <!-- Your content here -->
    
    <!-- Bubble background -->
    <div class="bubbles-container">
        <div class="bubbles">
            <span style="--i:11;"></span>
            <span style="--i:12;"></span>
            <!-- Add more bubbles as needed -->
        </div>
    </div>
</body>
</html>
```

### As a Background for Existing Content

The bubbles are positioned with `z-index: -100`, making them perfect as a background for other content:

```html
<div class="content">
    <h1>Your Website Title</h1>
    <p>Your content goes here...</p>
</div>

<div class="bubbles-container">
    <!-- Bubbles will appear behind your content -->
</div>
```

## 🎨 Customization

### Changing Colors

Modify the bubble colors in `bg.css`:

```css
.bubbles span{
    background: #4fc3dc; /* Change primary color */
    box-shadow: 0 0 0 10px #4fc3dc44,
    0 0 50px #4fc3dc,
    0 0 100px #4fc3dc;
}

.bubbles span:nth-child(even){
    background: #ff2d75; /* Change secondary color */
    box-shadow: 0 0 0 10px #ff2d7544,
    0 0 50px #ff2d75,
    0 0 100px #ff2d75;
}
```

### Adjusting Animation Speed

Change the animation duration calculation:

```css
.bubbles span{
    animation-duration: calc(150s / var(--i)); /* Increase for slower animation */
}
```

### Modifying Bubble Size

```css
.bubbles span{
    width: 40px;  /* New width */
    height: 40px; /* New height */
}
```

## 🔧 Technical Details

### How It Works

1. **HTML Structure**: Multiple `<span>` elements represent individual bubbles
2. **CSS Custom Properties**: Each bubble has a `--i` value controlling its animation speed
3. **Keyframe Animation**: Bubbles animate from bottom to top with scaling effect
4. **Color Variation**: Even-numbered bubbles have different colors using `:nth-child(even)`

### CSS Variables

- `--i`: Controls animation duration (higher values = slower animation)

### Browser Support

- ✅ Chrome 50+
- ✅ Firefox 50+
- ✅ Safari 10+
- ✅ Edge 15+
- ✅ Opera 40+

