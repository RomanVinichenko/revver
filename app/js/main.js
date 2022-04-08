// 0. GLOBAL START

if (typeof browser === "undefined") {
    var browser = chrome;
}

// HEADER MOVEMENT

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 1) {
//         $('.').addClass('');
//     } else {
//         $('.').removeClass('');
//     }
// });

// MOVE TO TOP

$(".footer-back__mobile, .footer-back, .logo").click(function () {
    jQuery('html,body').animate({scrollTop: 0}, 800);
})

// HEADER HIDE

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos - 100) {
        setTimeout(function () {
            document.querySelector(".header").classList.remove('header--out');
            document.querySelector(".header").classList.add('header--in');
        }, 250);
    } else {
        document.querySelector(".header").classList.add('header--out');

    }
    prevScrollpos = currentScrollPos;
}


$(document).bind('mousewheel', function (e) {

    var nt = $(document).scrollTop() + 200;

    e.preventDefault();

    e.stopPropagation();

    $('body').animate({scrollTop: nt}, 3000);

});

// MENU TOGGLE

const menuButton = document.querySelector(".menu__button");
const menuMain = document.querySelector(".menu__main");
const menuText = document.querySelector(".menu__text");
const curMenuText = menuText.innerText;
const blur = document.querySelector(".blur");
const menuSecond = document.querySelector(".menu__second");
const header = document.querySelector(".header");

menuButton.addEventListener('click', function () {
    menuMain.classList.toggle('menu__main--active');
    menuButton.classList.toggle('menu__button--active');
    blur.classList.toggle('blur--active');
    header.classList.toggle('header--go');

    if (menuSecond) {
        menuSecond.classList.toggle('menu__second--inactive');
    }

    if (menuText.innerText === curMenuText) {
        menuText.innerText = "CLOSE";
    } else {
        menuText.innerText = curMenuText;
    }
}, false);

// 0. GLOBAL FINISH

// 1. HOME START

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
            questPop.classList.add('quest-pop--active');
        });
    });
}

if (questClose) {
    questClose.addEventListener('click', function () {
        questPop.classList.remove('quest-pop--active');
    })
}

// if (questionItem) {
//     questionItem.forEach((questionItem) => {
//         questionItem.addEventListener('click', function () {
//             event.preventDefault();
//             var myNum = this.getAttribute('data-slide-num');
//             document.getElementById('quest-pop-main-text').innerHTML =
//                 document.getElementById('home-slide-answer-' + myNum).innerHTML;
//             questPop.classList.add('quest-pop--active');
//         });
//     });
// }

// FOOTER ANIMATION

function calcFooterHeight() {
    const footerAnim = document.querySelector('.footer').scrollHeight;
    const footerPusher = document.querySelector('.footer__pusher');

    footerPusher.style.minHeight = footerAnim + 'px';
}

window.addEventListener('DOMContentLoaded', calcFooterHeight);
window.addEventListener('resize', calcFooterHeight);

// 1. HOME FINISH

// 2. PRODUCT START
// 2. PRODUCT FINISH

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

// 3. ABOUT FINISH

// 4. NEWS INNER PAGE START

// ON PAUSE

// $('.propose__info a').on('click', function (event) {
//     event.preventDefault();
//     var id = $(this).attr('href'),
//         top = $(id).offset().top - 20;
//     $('body,html').animate(
//         {
//             scrollTop: top,
//         },
//         800,
//     );
// });

// 4. NEWS INNER PAGE FINISH

// 5. JOIN US START

const buttonVacancy = document.querySelectorAll('.green-link')
const popUp = document.querySelector('.popup')
const close = document.querySelector('.popup__close')
const body = document.body

buttonVacancy.forEach((buttonVacancy) => {
    buttonVacancy.addEventListener('click', function () {
        popUp.classList.add('popup__active');
        body.style.overflow = 'hidden';
    });
});

if (close) {
    close.addEventListener('click', function () {
        popUp.classList.remove('popup__active');
        body.style.overflow = 'auto';
    })
}

// buttonVacancy.forEach((buttonVacancy) => {
//     buttonVacancy.addEventListener('click', function () {
//         OpenPopUpInJoinUs(this, dadAr);
//         body.style.overflow = 'hidden';
//     });
// });

// 5. JOIN US FINISH


function newAnimIn(x) {
    x.classList.add('job__link--active');
    let myElem = x;
    myElem = myElem.previousElementSibling;
    myElem = myElem.querySelector('a');
    myElem.classList.add('job__title--active');
}

function newAnimOut(x) {
    let myElem = x;
    myElem = myElem.previousElementSibling;
    myElem = myElem.querySelector('a');
    myElem.classList.remove('job__title--active');
    x.classList.remove('job__link--active');
}


let elements = document.querySelectorAll('.job__wave');

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

















