document.addEventListener('DOMContentLoaded', () => {
    const ramenContainer = document.querySelector('#ramen');
    const ramenName = document.querySelector('.name');
    const ramenRestaurant = document.querySelector('.restaurant');
    const ratingDisplay = document.querySelector('#rating-display');
    const commentDisplay = document.querySelector('#comment-display');
    const newRamenForm = document.querySelector('#new-ramen');
  
    let ramenData = [
      {
        name: 'Gyukotsu',
        restaurant: 'Ichiran',
        image: 'assets/images/Ramen/gyukotsu.jpg',
        rating: 8,
        comment: 'Mouth-watering.',
      },
      {
        name: 'Kojiro',
        restaurant: 'Menya',
        image: 'assets/images/Ramen/kojiro.jpg',
        rating: 6,
        comment: 'Very flavorful.',
      },
      {
        name: 'Naruto',
        restaurant: 'Ramen Nagi',
        image: 'assets/images/Ramen/naruto.jpg',
        rating: 7,
        comment: 'Yummy.',
      },
      {
        name: 'Nirvana',
        restaurant: 'Ramen-ya',
        image: 'assets/images/Ramen/nirvana.jpg',
        rating: 8,
        comment: 'Sweet and tasty.',
      },
      {
        name: 'Shoyu',
        restaurant: 'Ichiran',
        image: 'assets/images/Ramen/shoyu.jpg',
        rating: 9,
        comment: 'Delicious!',
      }
    ];
  
    // Function to display ramen details
    function displayRamenDetails(index) {
      const ramen = ramenData[index];
      ramenName.textContent = ramen.name;
      ramenRestaurant.textContent = ramen.restaurant;
      ratingDisplay.textContent = ramen.rating || 'N/A';
      commentDisplay.textContent = ramen.comment || '';
      document.querySelector('.holder').src = ramen.image;
    }
  
    // Function to create and append ramen images
    function loadRamenImages() {
      ramenContainer.innerHTML = ''; // Clear the container before reloading
  
      ramenData.forEach((ramen, index) => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => displayRamenDetails(index));
        ramenContainer.appendChild(img);
      });
    }
  
    // Load ramen images on page load
    loadRamenImages();
  
    // Handle form submission for new ramen
    newRamenForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.querySelector('#new-name').value;
      const restaurant = document.querySelector('#new-restaurant').value;
      const image = document.querySelector('#new-image').value;
      const rating = document.querySelector('#new-rating').value;
      const comment = document.querySelector('#new-comment').value;
  
      const newRamen = {
        name,
        restaurant,
        image,
        rating,
        comment
      };
  
      // Add the new ramen to the ramenData array
      ramenData.push(newRamen);
  
      // Reload the images (all images, including the new one, will be displayed)
      loadRamenImages();
  
      // Reset the form
      newRamenForm.reset();
    });
  
    // Display the first ramen's details by default
    if (ramenData.length > 0) {
      displayRamenDetails(0);
    }
  });