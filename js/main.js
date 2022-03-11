window.onload = function() {
    window.addEventListener('scroll', function() {
        let move = document.querySelector('.scroll');
        if (window.pageYOffset > 1000) {
            move.classList.add('scroll--active');
        } else {
            move.classList.remove('scroll--active');
        }
    })
};

const control = document.querySelector('.home-top__slider');
    control.addEventListener('click', function () {
        this.classList.toggle('home-top__slider--active');
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

