const control = document.querySelector('.home-top__slider');
const textOne = document.querySelector('.text-one')
const topImg = document.querySelector('.home-top__img')
const currentText = textOne.innerText;
const currentImg = topImg.attributes;

control.addEventListener('click', function () {
    this.classList.toggle('home-top__slider--active');
    // topImg.setAttribute.toggle('src', 'images/thank-1.png');
});

control.addEventListener('click', function () {
    if(textOne.innerText === currentText){
        textOne.innerText = "A POS system that works efficiently with";
    }
    else{
        textOne.innerText = currentText;
    }
}, false);

control.addEventListener('click', function () {
    if(topImg.attributes === currentImg){
        topImg.setAttribute('src', 'images/thank-1.png');
    }
    else{
        topImg.attributes = currentImg;
    }
}, false);

const link = document.querySelector('.links');
const bunch = document.querySelector('.bunch');
link.addEventListener('click', function () {
    bunch.classList.toggle('bunch--active');
});

$(function () {
    $('.question').slick({
        loop: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true
        // responsive: [
        //     {
        //         breakpoint: 1550,
        //         settings: {
        //             slidesToShow: 3,
        //         },
        //     },
        //     {
        //         breakpoint: 930,
        //         settings: {
        //             slidesToShow: 2,
        //         },
        //     },
        //     {
        //         breakpoint: 750,
        //         settings: {
        //             slidesToShow: 1,
        //         },
        //     }
        // ]
    });
});

$(function () {
    $('.header .logo').on('click', function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate(
            {
                scrollTop: top,
            },
            800,
        );
    });
});

