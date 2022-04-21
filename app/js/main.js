
// gsap.registerPlugin(ScrollTrigger);
// gsap.to('.laptop__top', {
//     scrollTrigger: {
//         trigger: '.laptop',
//         start: 'top top',
//         end: '800px top',
//         // markers: true,
//         scrub: 2.5,
//         pin: true,
//     },
//     rotationX: 0,
//     duration: 5,
// });

const menuButton = document.querySelector(".menu__button");
const menuText = document.querySelector(".menu__text");
const menuSecond = document.querySelector(".menu__second");
const header = document.querySelector(".header");
const menuMain = document.querySelector(".menu__main");
const menuAddress = document.getElementById('menuAddress')
const menuSocial = document.querySelector(".menu__social");
const menuMainList = document.querySelector(".menu__main-list");
const curMenuText = menuText.innerText;


// MENU TOGGLE


menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu__button--active');
    menuMain.classList.toggle('menu__main--active');
    menuAddress.classList.toggle('address--active');
    menuSocial.classList.toggle('menu__social--active');
    menuMainList.classList.toggle('menu__main-list--active');

    if (menuSecond) {
        menuSecond.classList.toggle('menu__second--inactive');
    }

    if (menuText.innerText === curMenuText) {
        menuText.innerText = "CLOSE";
    } else {
        menuText.innerText = curMenuText;
    }
});

// PRODUCT POLZUN MOVING

function MoveBarItem(x) {
    document.querySelector('.sales__bar-item').style.top = x + '%';
}

// MOVE TO TOP

$(".footer-back__mobile, .footer-back, .logo").click(function () {
    jQuery('html,body').animate({scrollTop: 0}, 800);
})

// HOME PAGES BAR (FOR DEV)

const link = document.querySelector('.links');
const bunch = document.querySelector('.bunch');

if (link) {
    link.addEventListener('click', function () {
        bunch.classList.toggle('bunch--active');
    });
}

// HOME-CAROUSEL (ANSWER)

$('.question').slick({
    loop: true,
    infinite: false,
    slidesToShow: 3,
    swipe: false,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 624,
            settings: {
                slidesToShow: 1,
            },
        }
    ]
});

// HOME POPUP

const questionItem = document.querySelectorAll('.question__item')
const questPop = document.querySelector('.quest-pop')
const questClose = document.querySelector('.quest-pop__close')
const questUnder = document.querySelector('.quest-pop__under')

if (questionItem) {
    questionItem.forEach((questionItem) => {
        questionItem.addEventListener('click', function () {
            event.preventDefault();
            var myNum = this.getAttribute('data-slide-num');
            document.getElementById('quest-pop-main-text').innerHTML =
                document.getElementById('home-slide-answer-' + myNum).innerHTML;
            questPop.classList.add('quest-pop--active');
            questUnder.classList.add('quest-pop__under--active');
        });
    });
}

if (questUnder) {
    questUnder.addEventListener('click', function () {
        questUnder.classList.remove('quest-pop__under--active');
        questPop.classList.remove('quest-pop--active');
    });
}


if (questClose) {
    questClose.addEventListener('click', function () {
        questPop.classList.remove('quest-pop--active');
        questUnder.classList.remove('quest-pop__under--active')
    })
}

// FOOTER ANIMATION

function calcFooterHeight() {
    const footerAnim = document.querySelector('.footer').scrollHeight;
    const footerPusher = document.querySelector('.footer__pusher');

    footerPusher.style.minHeight = footerAnim + 'px';
}

window.addEventListener('DOMContentLoaded', calcFooterHeight);
window.addEventListener('resize', calcFooterHeight);

$(function () {
    $('.review__items').slick({
        loop: true,
        infinite: true,
        swipe: false,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear',
        slidesToScroll: 1,
        dots: false,
        arrows: true
    });
});

function hover(x) {
    document.getElementById('n-link-' + x).classList.add('title-hover');
    document.getElementById('n-img-' + x).classList.add('img-hover');
}

function unHover(x) {
    document.getElementById('n-link-' + x).classList.remove('title-hover');
    document.getElementById('n-img-' + x).classList.remove('img-hover');
}

// GREEN-LINK

let elements = document.querySelectorAll('.move-text');

elements.forEach(element => {
    let innerText = element.innerText;
    element.innerHTML = '';

    let textContainer = document.createElement('div');
    textContainer.classList.add('block');

    for (let letter of innerText) {
        let span = document.createElement('span');
        span.innerText = letter.trim() === '' ? '\xa0' : letter;
        span.classList.add('letter');
        textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
});

// HOME TESTIMONIALS

function storyIn() {
    document.querySelector(".testimonials__first").classList.add('testimonials__first--active');
    document.querySelector(".testimonials__second").classList.add('testimonials__second--active');
    document.querySelector(".testimonials__block-right").classList.add('testimonials__block-right--active');
    document.querySelector(".testimonials__block-left").classList.add('testimonials__block-left--active');
}

function storyOut() {
    document.querySelector(".testimonials__first").classList.remove('testimonials__first--active');
    document.querySelector(".testimonials__second").classList.remove('testimonials__second--active');
    document.querySelector(".testimonials__block-right").classList.remove('testimonials__block-right--active');
    document.querySelector(".testimonials__block-left").classList.remove('testimonials__block-left--active');
}

// HOME PARTICLE BLOCK

function imgIn() {
    document.querySelector('.particle__img').classList.add('particle__img--active')
}

function imgOut() {
    document.querySelector('.particle__img').classList.remove('particle__img--active')
}

// !!!!!!!!!!!!!!!! IN DEVELOPMENT

// const preloadImages = (urls) => {
//     return Promise.all(urls.map((src) => preloadImage(src)));
// };

//init scrollslider
// gsap.registerPlugin(ScrollTrigger)
//
// const preloadImage = (src) => {
//     return new Promise((resolve, reject) => {
//         const img = new Image();
//         const xhr = new XMLHttpRequest();
//
//         xhr.open("GET", src, true);
//         xhr.responseType = "blob";
//         xhr.onload = () => {
//             img.src = URL.createObjectURL(xhr.response);
//             img.onload = () => resolve(img);
//         };
//         xhr.onerror = () => reject();
//         xhr.send();
//     });
// };
//
// const calcDrawImage = (ctx, image, left = 0.5, top = 0.5) => {
//     // console.log(ctx)
//     const cWidth = ctx.canvas.width;
//     const cHeight = ctx.canvas.height;
//     // console.log(image)
//     const width = image.width;
//     const height = image.height;
//     const ratio = width / height;
//     const cRatio = cWidth / cHeight;
//     let resultHeight, resultWidth;
//
//     if (ratio > cRatio) {
//         resultHeight = cHeight;
//         resultWidth = cHeight * ratio;
//     } else {
//         resultWidth = cWidth;
//         resultHeight = cWidth / ratio;
//     }
//
//     ctx.drawImage(image, (cWidth - resultWidth) * left, (cHeight - resultHeight) * top, resultWidth, resultHeight)
// }
//
// // scroll_slider
//
// function initHeroSection() {
//     const urls = [];
//     for (let i = 0; i < 199; i++) {
//         let number = (i < 99) ? (i < 9) ? `00${i + 1}` : `0${i + 1}` : `${i + 1}`
//         urls.push(`https://www.polestar.com/www-images/home-car-carousel/car-sequence/desktop/ps2-ps1-precept/${number}.jpg`)
//     }
//
//     const images = preloadImages(urls);
//     const container = document.querySelector('.scroll_slider');
//     this.canvasSlider(container, images, "600%")
// }
//
//
// function canvasSlider(container, images, end) {
//
//     const canvas = container.querySelector('canvas');
//     const ctx = canvas.getContext('2d');
//
//
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: container,
//             scrub: true,
//             start: "top top",
//             end: end, // scene duration
//             pin: true,
//         }
//     });
//
//     window.addEventListener('resize', function resize() {
//         ctx.canvas.width = document.documentElement.clientWidth;
//         ctx.canvas.height = document.documentElement.clientHeight;
//         return resize;
//     }());
//
//     // when all images ready
//     images.then((imgs) => {
//         const counter = {i: 0}; // iteration object
//
//         tl.to(counter, {
//             i: imgs.length - 1, // increment counter to frames length
//             roundProps: "i", // round, only int
//             ease: "none", // ease provided by smooth-scroll momentum
//             immediateRender: true, // render first frame immediately
//             onUpdate: () => calcDrawImage(ctx, imgs[counter.i]) // draw image in canvas when timeline update
//         }, 0);
//
//         // draw current frame again when scroll stopped and resize happened
//         window.addEventListener('resize', () => calcDrawImage(ctx, imgs[counter.i]));
//     });
// }
//
//
// initHeroSection()








