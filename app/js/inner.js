$(function () {
    $('.propose__info a').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 105;
        $('body,html').animate(
            {
                scrollTop: top,
            },
            800,
        );
    });
});
