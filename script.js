const menu = document.querySelector('.menu-wrapper');

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.menu__item a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.burger').classList.remove('active');
        menu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});


const listText = document.querySelectorAll('.list__text');

listText.forEach((element, index) => {
    setTimeout(() => {
        setTimeout(() => {
            element.classList.add('active');
        }, 1000 * index);
    }, 2000);
});

setTimeout(() => {
    const title = document.querySelector('.title');
    title.style.left = 0;
}, 300);

const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
const banner = document.querySelector('.banner');
let currentIndex = 0;

function rotateBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    banner.classList.add('active');
    banner.style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(rotateBackground, 5000);

document.querySelectorAll('.anchor-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function smoothScroll(target) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
}
