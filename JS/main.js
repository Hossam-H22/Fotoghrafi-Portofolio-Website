

// Change nav style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});


// Change Nav on small Screen
const nav = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav_toggle-open');
const closeNavBtn = document.querySelector('#nav_toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}
const closeNav = () => {
    if (window.innerWidth <= 1200) {
        nav.style.display = 'none';
        closeNavBtn.style.display = 'none';
        openNavBtn.style.display = 'inline-block';
    }
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav);
});



// CONTACTS BUTTONS (Circular text buttons)
const textButtons = document.querySelectorAll(".contact_btn");
textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((char, index) => `<span style="transform: rotate(${index * 12}deg)">${char}</span>`).join("");
});


// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    }
});




