// const control = document.querySelector('.home-top__slider');
//     control.addEventListener('click', function () {
//         this.classList.toggle('home-top__slider--active');
// });
//
// const link = document.querySelector('.links');
// const bunch = document.querySelector('.bunch');
//     link.addEventListener('click', function () {
//         bunch.classList.toggle('bunch--active');
// });

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

