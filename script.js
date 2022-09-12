const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');


const mobileToggle = (e) => {
    links.classList.toggle('active');
    hamburger.classList.toggle('active');
}

hamburger.addEventListener('click', mobileToggle)

