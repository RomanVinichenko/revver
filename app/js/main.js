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
