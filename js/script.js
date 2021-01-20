const navigation = document.querySelector('nav.navigation');
const nav = document.querySelector('.nav-group');
const navList = document.querySelectorAll('.nav-group .nav-list');
const hamburger = document.querySelector('#hamburger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('block');
    nav.classList.toggle('responsive');
    line1.classList.toggle('line1-resp');
    line2.classList.toggle('line2-resp');
    line3.classList.toggle('line3-resp');

    navList.forEach(navList => {
        navList.classList.toggle('responsive-list');
    });
});