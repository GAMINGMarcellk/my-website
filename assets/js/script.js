const navigationLinks = document.querySelectorAll('.navigation__links a');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const contact = document.querySelector('#contact');

const navigationActive = (element) => {
    navigationLinks.forEach(link => {
        link.classList.remove('navigation__active');
    });
    element.classList.add('navigation__active');
}

window.addEventListener('scroll', () => {
    if (window.scrollY >= home.offsetTop && window.scrollY < about.offsetTop) {
        navigationActive(navigationLinks[0]);
    } else if (window.scrollY >= about.offsetTop && window.scrollY < skills.offsetTop) {
        navigationActive(navigationLinks[1]);
    } else if (window.scrollY >= skills.offsetTop && window.scrollY < contact.offsetTop) {
        navigationActive(navigationLinks[2]);
    } else if (window.scrollY >= contact.offsetTop) {
        navigationActive(navigationLinks[3]);
    }
});
