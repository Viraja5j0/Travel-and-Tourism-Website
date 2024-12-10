// Form validation
document.addEventListener('DOMContentLoaded', (event) => {
    const joinButton = document.querySelector('.join');

    joinButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const contact = document.querySelector('#contact').value;

        if (name === '' || email === '' || password === '' || contact === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Form submitted successfully!');
        }
    });
});

// Search functionality
const searchForm = document.querySelector('.sub');
const searchInput = document.querySelector('.sub input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.toLowerCase();

    // Sample search logic
    if (query.includes('hotel')) {
        window.location.href = 'hotel.html';
    } else if (query.includes('island')) {
        window.location.href = 'island.html';
    } else {
        alert('No results found.');
    }
});

// Hover effects for images
const images = document.querySelectorAll('.column img, .column2 img, .column3 img');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.opacity = '0.7';
    });
    image.addEventListener('mouseout', () => {
        image.style.opacity = '1';
    });
});
