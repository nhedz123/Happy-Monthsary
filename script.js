document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const photoItems = [
    {
        image: 'P-img1.jpg',
        letter: 'Having you was amazing. Your smile lit up the entire room, and I knew right then that you were special.'
    },
    {
        image: 'media/P-img2.jpg',
        letter: 'Remember that day at Forever Cafe? The Food was amazing same as you.'
    },
    {
        image: 'media/P-img3.jpg',
        letter: "I'm spending Christmas with you for the first time."
    },
    {
        image: 'media/P-img4.jpg',
        letter: 'A simple Date for the two of us is the best.'
    },
    {
        image: 'media/P-img5.jpg',
        letter: 'You support me in every game that I play.'
    },
    {
        image: 'media/P-img6.jpg',
        letter: 'Our coffee dates are perfect.'
    }
];

// Function to populate photo grid
function createPhotoItems() {
    const photoGrid = document.getElementById('photo-grid');
    photoItems.forEach(item => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.innerHTML = `
            <img src="${item.image}" alt="Memory">
            <div class="letter-content">
                <p>${item.letter}</p>
            </div>
        `;
        photoGrid.appendChild(photoItem);
    });
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    createPhotoItems();
});
