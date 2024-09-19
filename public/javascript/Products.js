document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const productClassesList = document.getElementById('product-classes-list');

    if (menuToggle && productClassesList) {
        menuToggle.addEventListener('click', () => {
            productClassesList.classList.toggle('open');
        });
    } else {
        console.error('Menu toggle button or product classes list not found.');
    }
});
