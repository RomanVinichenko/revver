$(function () {
    $('.review__items').slick({
        loop: true,
        infinite: true,
        slidesToShow: 1,
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

function ScrollAbout1(){
    var myElem = $('#about-sec-2').offset().top;
    $('html').animate({ scrollTop: myElem }, 1000);
}