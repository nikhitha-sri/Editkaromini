const filterButtons = document.querySelectorAll('nav ul li a');
const categories = document.querySelectorAll('.category');

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetCategory = document.querySelector(e.target.getAttribute('href'));
        categories.forEach(category => category.style.display = 'none');
        targetCategory.style.display = 'block';
    });
});
