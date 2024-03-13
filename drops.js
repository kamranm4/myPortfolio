document.addEventListener('DOMContentLoaded', () => {
    const dropfield = document.querySelector('.dropfield');

    function createDrop() {
        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.top = `${Math.random() * 100}%`;
        drop.style.left = `${Math.random() * 100}%`;

        dropfield.appendChild(drop);

        setTimeout(() => {
            drop.remove();
        }, 3000); // time for drop to fade
    }

    for (let i = 0; i < 5; i++) {
        createDrop(); // need some initial drops to look nice
    }

    setInterval(createDrop, 600); // to add new drops over time
});
