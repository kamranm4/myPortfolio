document.addEventListener('DOMContentLoaded', () => {
    const starfield = document.querySelector('.starfield');

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;

        starfield.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 2000); // Each star lasts for 2 seconds
    }

    // Create initial set of stars
    for (let i = 0; i < 5; i++) {
        createStar();
    }

    // Add new stars periodically
    setInterval(createStar, 400);
});
