const sections = document.querySelectorAll('.section');
const aboutSubs = document.querySelectorAll('.about-sub'); 
const sectionHeads = document.querySelectorAll('.headSection'); 
const contentHeads = document.querySelectorAll('.headContent'); 
const projectImages = document.querySelectorAll('.projectLeft'); 
const projectDescriptions = document.querySelectorAll('.projectRight'); 

function debounce(func, wait = 20, immediate = true) {
    var timeout;

    return function() {
        var context = this, args = arguments;

        var later = function() {
            timeout = null; 

            if(!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if(callNow) func.apply(context, args);
    };
} 

window.addEventListener('scroll', debounce(scrollAnimation));

scrollAnimation();


function scrollAnimation() {
    const innerHeight = window.innerHeight / 5 * 2;

    aboutSubs.forEach(aboutSub => {
        const aboutTop = aboutSub.getBoundingClientRect().top / 1.5;

        if (aboutTop < innerHeight) {
            aboutSub.classList.add('reveal');
        } else {
            aboutSub.classList.remove('reveal');
        }
    });

    sectionHeads.forEach(sectionHead => {
        const sectionHeadTop = sectionHead.getBoundingClientRect().top / 1.9;

        if (sectionHeadTop < innerHeight) {
            sectionHead.classList.add('slide');
        } else {
            sectionHead.classList.remove('slide');
        }
    });

    contentHeads.forEach(contentHead => {
        const contentHeadTop = contentHead.getBoundingClientRect().top / 1.9;

        // console.log(contentHeadTop, innerHeight);
        if (contentHeadTop < innerHeight) {
            contentHead.classList.add('slide');
        } else {
            contentHead.classList.remove('slide');
        }
    });

    projectImages.forEach(projectImage => {
        const projectImageTop = projectImage.getBoundingClientRect().top / 1.9;

        if (projectImageTop < innerHeight) {
            projectImage.classList.add('slide');
        } else {
            projectImage.classList.remove('slide');
        }
    });

    projectDescriptions.forEach(projectDescription => {
        const projectDescriptionTop = projectDescription.getBoundingClientRect().top / 1.9;

        if (projectDescriptionTop < innerHeight) {
            projectDescription.classList.add('slide');
        } else {
            projectDescription.classList.remove('slide');
        }
    });

}