# Ramen Rater Project

Welcome to the **Ramen Rater** project! This is a simple web application where users can view ramen dishes, click on them to see details, and even add new ramen dishes to the list. Below, I'll explain the **HTML** and **CSS** code in a concise way.

---

## HTML Structure

### Basic Structure
- `<!DOCTYPE html>`: Declares the document as HTML5.
- `<html lang="en">`: The root element, with English as the language.
- `<head>`: Contains metadata like the title, stylesheets, and scripts.
- `<body>`: Contains the visible content of the webpage.

### Header
- `<header>`: Contains the title, a bowl icon, and a subtitle.
- `<h3>`: Displays "Ramen Rater".
- `<i class="fa-solid fa-bowl-food"></i>`: A bowl icon from Font Awesome.
- `<p>`: Displays "We Love Your Feedback".

### Main Content
- `<main>`: The main content area.
- `<div id="ramen-menu">`: Container for ramen images (dynamically added via JavaScript).
- `<div id="ramen-detail">`: Displays details of the selected ramen.
  - `<img class="detail-image">`: Placeholder for the ramen image.
  - `<h2 class="name">`: Displays the ramen name.
  - `<h3 class="restaurant">`: Displays the restaurant name.
  - `<h3>Rating: <span id="rating-display">`: Displays the rating.
  - `<h3>Comment: <span id="comment-display">`: Displays the comment.
- `<form id="new-ramen">`: Form for adding new ramen.
  - `<h4>`: Form heading ("Add New Ramen").
  - `<label>`: Labels for input fields (Name, Restaurant, Image, Rating, Comment).
  - `<input>`: Input fields for user input.
  - `<textarea>`: Input field for comments.
  - `<input type="submit">`: Submit button.

### Footer
- `<footer>`: Contains a bowl icon and a message ("We Love Your Feedback").

---

## CSS Styling

### Global Styles
- `* { ... }`: Resets margins, sets font family, and ensures padding/border are included in element dimensions.
- `body { ... }`: Centers content, sets background color, and uses Flexbox for layout.

### Header and Footer
- `header, footer { ... }`: Styles for header and footer (black background, gold text).

### Ramen Menu
- `#ramen-menu { ... }`: Flexbox container for ramen images.
- `#ramen-menu img { ... }`: Styles for ramen images (fixed size, rounded corners, hover effect).
- `@keyframes float { ... }`: Defines a floating animation for hovered images.

### Ramen Detail
- `#ramen-detail { ... }`: Styles for the ramen detail section (background, padding, rounded corners).
- `#ramen-detail .detail-image { ... }`: Styles for the detail image (fixed height, rounded corners).
- `#ramen-detail .name { ... }`: Styles for the ramen name (green text).
- `#ramen-detail .restaurant { ... }`: Styles for the restaurant name (red text).

### Form
- `form { ... }`: Flexbox layout for the form.
- `input, textarea { ... }`: Styles for input fields and textarea.
- `input[type="submit"] { ... }`: Styles for the submit button.

### Responsive Design
- `@media (max-width: 768px) { ... }`: Adjusts styles for tablets.
- `@media (max-width: 480px) { ... }`: Adjusts styles for mobile devices.

---

## JavaScript Functionality

### Key Functions
- `displayRamens()`: Loads ramen images into the `#ramen-menu` div.
- `handleClick(ramen)`: Displays details of the clicked ramen.
- `addSubmitListener()`: Handles form submissions and adds new ramen to the list.
- `main()`: Initializes the app by calling `displayRamens` and `addSubmitListener`.

---
