document.addEventListener('DOMContentLoaded', () => {

    const ramens = [
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
  
    function displayRamens() {
      const ramenMenu = document.querySelector('#ramen-menu');
      ramenMenu.innerHTML = '';
  
      ramens.forEach((ramen) => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
      });
    }
  
    function handleClick(ramen) {
      const ramenDetail = document.querySelector('#ramen-detail');
      ramenDetail.querySelector('.detail-image').src = ramen.image;
      ramenDetail.querySelector('.name').textContent = ramen.name;
      ramenDetail.querySelector('.restaurant').textContent = ramen.restaurant;
      ramenDetail.querySelector('#rating-display').textContent = ramen.rating || 'N/A';
      ramenDetail.querySelector('#comment-display').textContent = ramen.comment || '';
    }
  
    function addSubmitListener() {
      const newRamenForm = document.querySelector('#new-ramen');
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
  
        ramens.push(newRamen);
  
        const ramenMenu = document.querySelector('#ramen-menu');
        const img = document.createElement('img');
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener('click', () => handleClick(newRamen));
        ramenMenu.appendChild(img);
  
        newRamenForm.reset();
      });
    }
  
    function main() {
      displayRamens();
      addSubmitListener();
    }
  
    main();
  });