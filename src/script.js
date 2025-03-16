// 

document.addEventListener('DOMContentLoaded', () => {

    const ramenImages = document.querySelectorAll('#ramen img');
    const ramenName = document.querySelector('.name');
    const ramenRestaurant = document.querySelector('.restaurant');
    const ratingDisplay = document.querySelector('#rating-display');
    const commentDisplay = document.querySelector('#comment-display');
    const newRamenForm = document.querySelector('#new-ramen');

    const ramenData = [
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

    function displayRamenDetails(index) {
        const ramen = ramenData[index];
        ramenName.textContent = ramen.name;
        ramenRestaurant.textContent = ramen.restaurant;
        ratingDisplay.textContent = ramen.rating;
        commentDisplay.textContent = ramen.comment;
        document.querySelector('.holder').src = ramen.image;
    }

    ramenImages.forEach((img, index) => {
        img.addEventListener('click', () => displayRamenDetails(index));
    });

    newRamenForm.addEventListener('submit', (e) => {
        e.preventDefault()});

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

        ramenData.push(newRamen);

        const newImg = document.createElement('img');
        newImg.src = newRamen.image;
        newImg.alt = newRamen.name;

        newImg.addEventListener('click', () => displayRamenDetails(ramenData.length - 1));

        document.querySelector('#ramen').appendChild(newImg);

        newRamenForm.reset();

});
