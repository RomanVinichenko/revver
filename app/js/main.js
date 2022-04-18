const body = document.body
const menuButton = document.querySelector(".menu__button");
const menuText = document.querySelector(".menu__text");
const menuSecond = document.querySelector(".menu__second");
const header = document.querySelector(".header");
const menuMain = document.querySelector(".menu__main");

// HEADER MOVING temporary commented

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         setTimeout(function () {
//             document.querySelector(".header").classList.remove('header--out');
//             document.querySelector(".header").classList.add('header--in');
//         }, 250);
//     } else {
//         document.querySelector(".header").classList.add('header--out');
//     }
//     prevScrollpos = currentScrollPos;
// }

// MENU TOGGLE

const curMenuText = menuText.innerText;

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu__button--active');
    menuMain.classList.toggle('menu__main--active');
    body.classList.toggle('scroll-none')

    if (menuSecond) {
        menuSecond.classList.toggle('menu__second--inactive');
    }

    if (menuText.innerText === curMenuText) {
        menuText.innerText = "CLOSE";
    } else {
        menuText.innerText = curMenuText;
    }
});

// 1. HOME START

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
    infinite: true,
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

if (questionItem) {
    questionItem.forEach((questionItem) => {
        questionItem.addEventListener('click', function () {
            event.preventDefault();
            var myNum = this.getAttribute('data-slide-num');
            document.getElementById('quest-pop-main-text').innerHTML =
                document.getElementById('home-slide-answer-' + myNum).innerHTML;
            questPop.classList.add('quest-pop--active');
        });
    });
}

if (questClose) {
    questClose.addEventListener('click', function () {
        questPop.classList.remove('quest-pop--active');
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

// 1. HOME FINISH

// 3. ABOUT

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

// POPUP JOIN

const buttonVacancy = document.querySelectorAll('.green-link')
const popUp = document.querySelector('.popup')
const close = document.querySelector('.popup__close')

if (buttonVacancy && popUp) {
    buttonVacancy.forEach((buttonVacancy) => {
        buttonVacancy.addEventListener('click', function () {
            popUp.classList.add('popup__active');
            body.style.overflow = 'hidden';
        });
    });
}

if (close) {
    close.addEventListener('click', function () {
        popUp.classList.remove('popup__active');
        body.style.overflow = 'auto';
    })
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

























