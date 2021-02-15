const navigation = document.querySelector('nav.navigation');
const nav = document.querySelector('.nav-group');
const navList = document.querySelectorAll('.nav-group .nav-list');
const hamburger = document.querySelector('#hamburger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

const stylesheet = document.querySelector('#theme-style');
const themeOptions = document.querySelectorAll('.theme-option');


    // Hamburger and Responsive Navigation

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


    // Theme Style Change
// initialize localStorage
let theme = localStorage.getItem('theme');

if(theme === null) {
    setTheme('blue');   // set default theme to blue
} else {
    setTheme(theme);
}

themeOptions.forEach(themeOption => {

    themeOption.addEventListener('click', () => {
        let mode = themeOption.dataset.mode;
        
        setTheme(mode);  
    })  
});

function setTheme(mode) {

    if(mode === 'blue') {
        stylesheet.setAttribute('href', 'css/styles.css')
    }
    if(mode === 'brown') {
        stylesheet.setAttribute('href', 'css/brown.css')
    }
    if(mode === 'grey') {
        stylesheet.setAttribute('href', 'css/grey.css')
    }
    if(mode === 'green') {
        stylesheet.setAttribute('href', 'css/green.css')
    }


        // set localStorage to save theme
    localStorage.setItem('theme', mode);
}

// dynamic footer year stamp
const year = document.getElementById('year');

const date = new Date();
let currYear = date.getFullYear();

year.innerText = currYear;
