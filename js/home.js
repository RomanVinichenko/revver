const control = document.querySelector('.home-top__slider');
control.addEventListener('click', function () {
    this.classList.toggle('home-top__slider--active');
});

const link = document.querySelector('.links');
const bunch = document.querySelector('.bunch');
link.addEventListener('click', function () {
    bunch.classList.toggle('bunch--active');
});