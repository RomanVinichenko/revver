const sale = document.querySelectorAll('.sales__item');
sale.forEach((item) => {
    item.addEventListener('click', function () {
        this.classList.toggle('sales__item--active');
    });
});