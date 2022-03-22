const menuButton = document.querySelector(".menu__button");
const menuMain = document.querySelector(".menu__main");
const menuText = document.querySelector(".menu__text");
const curMenuText = menuText.innerText;
const blur = document.querySelector(".blur");
// const menuSecond = document.querySelector(".menu__second");

// const round = document.querySelector(".round");

menuButton.addEventListener('click', function () {
    menuMain.classList.toggle('menu__main--active');
    menuButton.classList.toggle('menu__button--active');
    blur.classList.toggle('blur--active');
    // round.classList.toggle('round--inactive');
    // menuSecond.classList.toggle('menu__second--inactive');
});

menuButton.addEventListener('click', function () {
    if(menuText.innerText === curMenuText){
        menuText.innerText = "CLOSE";
    }
    else{
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
});
