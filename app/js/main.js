const menuButton = document.querySelector(".menu__button");
const menuText = document.querySelector(".menu__text");
const menuSecond = document.querySelector(".menu__second");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const menuMain = document.querySelector(".menu__main");
const menuAddress = document.getElementById('menuAddress');
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
});

$(".home-top__wrapper a, .about-top a, .product-top a").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
    }, 800);
});

// HOME PAGES BAR (FOR DEV);

const link = document.querySelector('.links');
const bunch = document.querySelector('.bunch');

if (link) {
    link.addEventListener('click', function () {
        bunch.classList.toggle('bunch--active');
    });
}

// HOME-CAROUSEL (ANSWER);

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

const questionButton = document.querySelectorAll('.question__button');
const questionTitle = document.querySelectorAll('.question__title');
const questPop = document.querySelector('.quest-pop');
const questClose = document.querySelector('.quest-pop__close');
const questUnder = document.querySelector('.quest-pop__under');
const prevent = ev => ev.preventDefault();
const body = document.body

function blockScroll() {
    let div = document.createElement('div');
    document.body.append(div);

    let paddingRight = window.innerWidth - div.offsetWidth;
    let scroll = window.scrollY;

    div.remove();

    header.style.right = '19px';
    footer.style.right = '19px';
    document.body.classList.add('no-scroll');
    document.body.style.top = `-${scroll}px`;
    document.body.style.paddingRight = paddingRight + 'px';
    document.body.style.setProperty('--p_right', paddingRight + "px");
    return paddingRight;
}

function unblockScroll() {
    const scrollY = document.body.style.top;
    header.style.right = '0';
    footer.style.right = '0';
    document.body.classList.remove('no-scroll');
    document.body.style.paddingRight = '';
    document.body.style.setProperty('--p_right', "0px");
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

if (questionButton) {
    questionButton.forEach((questionItem) => {
        questionItem.addEventListener('click', function () {
            event.preventDefault();
            var myNum = this.getAttribute('data-slide-num');
            document.getElementById('quest-pop-main-text').innerHTML =
                document.getElementById('home-slide-answer-' + myNum).innerHTML;
            questPop.classList.add('quest-pop--active');
            questUnder.classList.add('quest-pop__under--active');
            document.addEventListener('wheel', prevent, {passive: false});
            blockScroll();
        });
    });
}

if (questionTitle) {
    questionTitle.forEach((questionItem) => {
        questionItem.addEventListener('click', function () {
            event.preventDefault();
            var myNum = this.getAttribute('data-slide-num');
            document.getElementById('quest-pop-main-text').innerHTML =
                document.getElementById('home-slide-answer-' + myNum).innerHTML;
            questPop.classList.add('quest-pop--active');
            questUnder.classList.add('quest-pop__under--active');
            document.addEventListener('wheel', prevent, {passive: false});
            blockScroll();
        });
    });
}

if (questUnder) {
    questUnder.addEventListener('click', function () {
        questUnder.classList.remove('quest-pop__under--active');
        questPop.classList.remove('quest-pop--active');
        document.removeEventListener('wheel', prevent);
        unblockScroll();
    });
}

if (questClose) {
    questClose.addEventListener('click', function () {
        questPop.classList.remove('quest-pop--active');
        questUnder.classList.remove('quest-pop__under--active');
        document.removeEventListener('wheel', prevent);
        unblockScroll();
    });
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
        infinite: false,
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
    document.querySelector('.particle__img').classList.add('particle__img--active');
}

function imgOut() {
    document.querySelector('.particle__img').classList.remove('particle__img--active');
}

// let testBlock = document.getElementById('test-block');
// var currenrScrolPoint = 0;
// var scrollDirection;
// var canScroll = true;
// var inFirstAnimBlock = false;
// var firstAnimationprocessed = false;
//
// if (testBlock) {
//     window.addEventListener('scroll', function MyScroll(e) {
//
//         if (window.scrollY > currenrScrolPoint) {
//             scrollDirection = "down"
//             //console.log('down');
//         } else {
//             //console.log('up');
//             scrollDirection = "up"
//         }
//         if (window.scrollY >= testBlock.offsetTop) {
//             inFirstAnimBlock = true;
//         } else {
//             inFirstAnimBlock = false;
//         }
//
//         currenrScrolPoint = window.scrollY;
//         if (inFirstAnimBlock == true && scrollDirection == "down") {
//             firstAnimationprocessed = true;
//             // document.body.style.cssText =
//             //     `overflow: hidden;`
//             var myElem = $('.test-block').offset().top;
//             $('html').animate({scrollTop: myElem}, 0);
//         }
//     });
// }



