// document.querySelectorAll('.island').forEach(island => {
//     island.addEventListener('click', () => {
//         island.classList.toggle('expanded');
//     });
// });

document.querySelectorAll('.island').forEach(island => {
    island.addEventListener('click', () => {
        // Toggle the 'expanded' class for the clicked island
        island.classList.toggle('expanded');
        
        // Find the description and button elements within the island
        const description = island.querySelector('.island-description');
        const button = island.querySelector('.book-button');
        
        // Toggle the display based on the 'expanded' class
        if (island.classList.contains('expanded')) {
            description.style.display = 'block';
            button.style.display = 'inline-block';
        } else {
            description.style.display = 'none';
            button.style.display = 'none';
        }
    });
});
