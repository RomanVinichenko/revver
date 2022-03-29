const link = document.querySelector('.links');
const bunch = document.querySelector('.bunch');
link.addEventListener('click', function () {
    bunch.classList.toggle('bunch--active');
});

const questionItem = document.querySelectorAll('.question__item')
const questPop = document.querySelector('.quest-pop')

questionItem.forEach((questionItem) => {
    questionItem.addEventListener('click', function () {
        questPop.classList.add('quest-pop--active');
    });
});

const questClose = document.querySelector('.quest-pop__close')
questClose.addEventListener('click', function () {
    questPop.classList.remove('quest-pop--active');
})


$(function () {
    $('.question').slick({
        loop: true,
        infinite: true,
        slidesToShow: 3,
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
});


