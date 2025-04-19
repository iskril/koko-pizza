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

    // Блокировка скролла при открытом меню
    document.body.classList.toggle('no-scroll');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.menu__item a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.burger').classList.remove('active');
        menu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});



