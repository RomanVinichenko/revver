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
    header.classList.toggle('header--active');

    if (menuSecond) {
        menuSecond.classList.toggle('menu__second--inactive');
    }

    if (menuText.innerText === curMenuText) {
        menuText.innerText = "CLOSE";
    } else {
        menuText.innerText = curMenuText;
    }
}, false);

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
            $('.header__main').addClass('header__main--active');
        } else {
            $('.header__main').removeClass('header__main--active');
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.header').addClass('header--scroll');
        } else {
            $('.header').removeClass('header--scroll');
        }
    });
});

$("#btn").click(function () {
    jQuery('html,body').animate({scrollTop: 0}, 800);
})


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".header").style.top = "0";
    } else {
        document.querySelector(".header").style.top = "-92px";
    }
    prevScrollpos = currentScrollPos;
}

// let currentScrollPosition = 0;
// $(window).scroll(function () {
//     let newScrollPosition = $(this).scrollTop();
//     if (newScrollPosition > currentScrollPosition){
//         // меняем класс по скроллу вниз
//     } else {
//         // меняем класс по скроллу вверх
//     }
//     currentScrollPosition = newScrollPosition;
// });




