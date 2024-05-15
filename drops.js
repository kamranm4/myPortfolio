

document.addEventListener('DOMContentLoaded', () => {
    const dropfield = document.querySelector('.dropfield');

    function createDrop(x, y, large = false) {
        const drop = document.createElement('div');
        drop.className = large ? 'drop large-drop' : 'drop';
        if (x !== undefined && y !== undefined) {
            drop.style.top = `${y}px`;
            drop.style.left = `${x}px`;
            // Assign a random color for user-clicked drops
            const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            drop.style.borderColor = color;
        } else {
            drop.style.top = `${Math.random() * 100}%`;
            drop.style.left = `${Math.random() * 100}%`;
            // Regular drops are white
            drop.style.borderColor = 'white';
        }

        dropfield.appendChild(drop);

        setTimeout(() => {
            drop.remove();
        }, large ? 6000 : 3000); // Larger drops last longer
    }

    for (let i = 0; i < 5; i++) {
        createDrop(); // Initial drops
    }

    setInterval(() => createDrop(), 1000); // Add new drops over time

    dropfield.addEventListener('click', (event) => {
        // Get click coordinates relative to the dropfield
        const x = event.clientX - dropfield.offsetLeft;
        const y = event.clientY - dropfield.offsetTop;
        createDrop(x, y, true); // Create a large drop with random color
    });
});

