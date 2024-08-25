let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    let currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
        // User is scrolling down
        navbar.style.top = '-70px'; // Adjust this value based on navbar height
    } else {
        // User is scrolling up
        navbar.style.top = '0';
    }

    lastScrollTop = currentScrollTop;
});
