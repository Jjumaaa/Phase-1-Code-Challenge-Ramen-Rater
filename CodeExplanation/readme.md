# Ramen Rater

## Overview
Ramen Rater is a simple web app for browsing, rating, and adding ramen dishes. Users can click on ramen images to view details, rate them, and add new ramen entries.

## Project Structure
```
project-folder/
│── assets/images/Ramen/  # Contains ramen images
│── css/style.css         # Styles the UI
│── src/script.js         # Handles interactivity
│── index.html            # Main webpage
```

## Technologies Used
- **HTML**: Structure and content
- **CSS**: Styling and animations
- **JavaScript**: Dynamic interactions
- **Font Awesome**: Icons for UI elements

## HTML Breakdown
- **Header**: Displays the app title and an icon, providing branding.
- **Main Section**:
  - Displays ramen images that users can click to see details.
  - Shows ramen name, restaurant, rating, and comment dynamically.
  - Includes a form that allows users to add new ramen dishes.
- **Footer**: Contains branding elements similar to the header.

## CSS Features
- **Flexbox Layout**: Used for centering content and structuring elements responsively.
- **Animations**: Ramen images have a floating effect on hover using `@keyframes`.
- **Media Queries**: Ensures the page looks good on different screen sizes by adjusting image sizes and text elements.
- **Form Styling**: Inputs and buttons are styled for a consistent and accessible user experience.

## JavaScript Functionality
- **Display Ramen Details**: Clicking on a ramen image updates the main display with its name, restaurant, rating, comment, and image.
- **Event Listeners**: Each ramen image has an event listener that triggers the `displayRamenDetails` function when clicked.
- **Dynamic Content Update**: The script updates the DOM elements dynamically without reloading the page.
- **Form Submission**: Users can add a new ramen dish by filling out the form and submitting it. The new ramen is added to the dataset and displayed instantly.
- **Default Display**: When the page loads, the first ramen dish in the dataset is shown by default.
- **Data Handling**:
  - Ramen data is stored as an array of objects.
  - The array is initialized with predefined ramen dishes.
  - New ramen dishes are appended to this array dynamically.
- **Image Creation & Event Binding**: When a new ramen dish is added, a new `img` element is created, appended to the ramen list, and assigned an event listener.
- **Preventing Page Refresh**: The `event.preventDefault()` method is used to stop the form from refreshing the page when submitted, ensuring a smooth user experience.
- **Error Handling**: The script ensures that users cannot submit empty fields when adding a new ramen dish.

## Usage Guide
1. Open `index.html` in a browser.
2. Click a ramen image to view details.
3. Fill in the form to add a new ramen entry.
4. Click "Create" to add it to the list.

## Credits
- **Icons**: Font Awesome
- **Images**: `assets/images/Ramen/`
- **Built with**: HTML, CSS, JavaScript

