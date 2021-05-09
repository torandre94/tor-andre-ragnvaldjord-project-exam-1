const navToggle = function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLink');

    burger.addEventListener('click', function() {
        nav.classList.toggle('navActive');
    });
}

navToggle();