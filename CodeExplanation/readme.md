# Ramen Rater - README

This project is a simple web application called "Ramen Rater" that allows users to view and rate different types of ramen. The application is built using HTML, CSS, and JavaScript. Below is a detailed explanation of each part of the code.

---

## HTML Structure

### `<!DOCTYPE html>`
- Declares the document type and version of HTML being used (HTML5).

### `<html lang="en">`
- The root element of the HTML document. The `lang="en"` attribute specifies that the content is in English.

### `<head>`
- Contains metadata about the document, such as character encoding, viewport settings, and links to external resources.

#### `<meta charset="UTF-8">`
- Specifies the character encoding for the document (UTF-8, which supports most characters and symbols).

#### `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Ensures the page is responsive by setting the viewport width to the device's width and initial zoom level to 1.0.

#### `<title>Ramen Rater</title>`
- Sets the title of the webpage, which appears in the browser tab.

#### `<link rel="stylesheet" href="css/style.css">`
- Links the external CSS file (`style.css`) to style the HTML content.

#### `<script src="src/script.js" defer></script>`
- Links the external JavaScript file (`script.js`) and ensures it runs after the HTML content is fully loaded (`defer` attribute).

### `<body>`
- Contains the visible content of the webpage.

#### `<header>`
- A semantic element for the header section of the page. It contains the title "Ramen Rater."

#### `<main>`
- A semantic element for the main content of the page.

##### `<div id="ramen">`
- A container for displaying ramen images. It holds multiple `<img>` elements, each representing a ramen dish.

##### `<div id="place">`
- A container for displaying the selected ramen's details, including its image, name, and restaurant.

###### `<img class="holder" src="assets/images/image-placeholder.jpg" alt="">`
- A placeholder image for the selected ramen. The `src` attribute is dynamically updated via JavaScript.

###### `<h2 class="name">Ramen Name</h2>`
- Displays the name of the selected ramen. The text content is dynamically updated via JavaScript.

###### `<h3 class="restaurant">Restaurant Name</h3>`
- Displays the restaurant name of the selected ramen. The text content is dynamically updated via JavaScript.

##### `<h3>Rating:</h3>`
- A heading for the ramen's rating.

###### `<p><span id='rating-display'>Rating Goes Here</span> / 10</p>`
- Displays the rating of the selected ramen. The `span` content is dynamically updated via JavaScript.

##### `<h3>Comment:</h3>`
- A heading for the ramen's comment.

###### `<p id='comment-display'>Comment Goes Here (Be Nice)</p>`
- Displays the comment for the selected ramen. The text content is dynamically updated via JavaScript.

##### `<form id="new-ramen">`
- A form for adding a new ramen dish to the list.

###### `<h4>Add New Ramen</h4>`
- A heading for the form.

###### `<label for="name">Name: </label>`
- A label for the ramen name input field.

###### `<input type="text" name="name" id="new-name" />`
- A text input field for entering the ramen's name.

###### `<label for="restaurant">Restaurant: </label>`
- A label for the restaurant name input field.

###### `<input type="text" name="restaurant" id="new-restaurant" />`
- A text input field for entering the restaurant's name.

###### `<label for="image">Image: </label>`
- A label for the image URL input field.

###### `<input type="text" name="image" id="new-image" />`
- A text input field for entering the URL of the ramen's image.

###### `<label for="rating">Rating: </label>`
- A label for the rating input field.

###### `<input type="number" name="rating" id="new-rating" />`
- A number input field for entering the ramen's rating (out of 10).

###### `<label for="new-comment">Comment: </label>`
- A label for the comment textarea.

###### `<textarea name="new-comment" id="new-comment"></textarea>`
- A textarea for entering a comment about the ramen.

###### `<input type="submit" value="Create" />`
- A submit button to add the new ramen to the list.

###### `<has a footer with a logo and a message/>`
- A footer with a logo and a message

---

## CSS Styling

### `* { margin: 0; ... }`
- Resets the default margin and padding for all elements and sets a consistent font family and box-sizing.

### `body { ... }`
- Styles the body with padding, background color, and centers the content using Flexbox.

### `header { ... }`
- Styles the header with padding, background color, and text color.

### `#ramen { ... }`
- Styles the container for ramen images. It uses Flexbox to arrange the images and allows wrapping for responsiveness.

### `#ramen img { ... }`
- Styles the ramen images with a fixed height and scaling effect.

### `#place { ... }`
- Styles the container for the selected ramen's details.

### `.holder { ... }`
- Styles the placeholder image for the selected ramen.

### `.name, .restaurant { ... }`
- Positions and styles the ramen name and restaurant name text.

### `form { ... }`
- Styles the form for adding new ramen.

### `input, textarea { ... }`
- Styles the input fields and textarea with consistent font size, padding, and background color.

### `input[type="submit"] { ... }`
- Styles the submit button with a black background and gold text.

### `@media (max-width: 768px) { ... }`
- Adds responsive styles for screens smaller than 768px, adjusting image sizes and text alignment.

---

## JavaScript Functionality

### `document.addEventListener('DOMContentLoaded', () => { ... });`
- Ensures the JavaScript code runs only after the HTML content is fully loaded.

### `const ramenImages = document.querySelectorAll('#ramen img');`
- Selects all ramen images in the `#ramen` container.

### `const ramenName = document.querySelector('.name');`
- Selects the element for displaying the ramen's name.

### `const ramenRestaurant = document.querySelector('.restaurant');`
- Selects the element for displaying the restaurant's name.

### `const ratingDisplay = document.querySelector('#rating-display');`
- Selects the element for displaying the ramen's rating.

### `const commentDisplay = document.querySelector('#comment-display');`
- Selects the element for displaying the ramen's comment.

### `const newRamenForm = document.querySelector('#new-ramen');`
- Selects the form for adding new ramen.

### `const ramenData = [ ... ];`
- An array of objects containing data for each ramen dish (name, restaurant, image, rating, and comment).

### `function displayRamenDetails(index) { ... }`
- A function that updates the displayed ramen details based on the selected image's index.

### `ramenImages.forEach((img, index) => { ... });`
- Adds a click event listener to each ramen image. When clicked, it calls `displayRamenDetails` with the corresponding index.

### `newRamenForm.addEventListener('submit', (e) => { ... });`
- Adds a submit event listener to the form. It prevents the default form submission behavior and handles the addition of new ramen.

### `const name = document.querySelector('#new-name').value;`
- Retrieves the value entered in the "Name" input field.

### `const newRamen = { ... };`
- Creates a new ramen object using the form input values.

### `ramenData.push(newRamen);`
- Adds the new ramen object to the `ramenData` array.

### `const newImg = document.createElement('img');`
- Creates a new `<img>` element for the newly added ramen.

### `newImg.addEventListener('click', () => { ... });`
- Adds a click event listener to the new image to display its details when clicked.

### `document.querySelector('#ramen').appendChild(newImg);`
- Appends the new image to the `#ramen` container.

### `newRamenForm.reset();`
- Resets the form fields after submission.

END!!