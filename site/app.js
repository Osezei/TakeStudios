
//NAVIGATION SLIDE
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav li');
    const closeToBtn = document.querySelector('.btn-to-close');

    //toggle nav
    burger.addEventListener('click', () => {
        //TOGGLE NAV
        nav.classList.toggle('nav-active')
        //ANIMATE LINKS
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ``
            } else {
                link.style.animation = `navFade 2.5s ease forwards ${index / 7}s`;
            }
        });
        

        //close nav
        closeToBtn.addEventListener('click', function(){
            nav.classList.remove('nav-active');
        });

    });
}

navSlide();


const navbar = document.getElementById('home');
// const topLink = document.querySelector('.top-link');
const burger = document.querySelector('.burger');

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        burger.classList.add('show-burger');
    } else {
        burger.classList.remove('show-burger');
    }
    // //similar to the above but indicating the height you want
    // if(scrollHeight>500){
    //     topLink.classList.add('show-link');
    // } else {
    //     topLink.classList.remove('show-link');
    // }
});

// const preloader = document.querySelector('.preloader');

// window.addEventListener('load', function(){
//     preloader.classList.add('hide-preloader');
// });


// const faders = document.querySelectorAll('section');
// const appearOptions = {
//     threshold: 0,
//     rootMargin: "0px 0px -100px 0px"
// };
// const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             return;
//         } else {
//             entry.target.classList.add("appear");
//             appearOnScroll.unobserve(entry.target);
//         }
//     });
// }, 
// appearOptions);

// faders.forEach (fader => {
//     appearOnScroll.observe(fader);
// });