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
