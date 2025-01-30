function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active');
}

function closeMenu(){
    const menu = document.querySelector('.mobile-menu');
    menu.classList.remove('active');
}