const buttonVacancy = document.querySelectorAll('.green-link')
const popUp = document.querySelector('.popup')
const close = document.querySelector('.popup__close')
const body = document.body

buttonVacancy.forEach((buttonVacancy) => {
    buttonVacancy.addEventListener('click', function () {
        popUp.classList.add('popup__active');
            body.style.overflow = 'hidden';
    });
});

close.addEventListener('click', function () {
    popUp.classList.remove('popup__active');
    body.style.overflow = 'auto';
})