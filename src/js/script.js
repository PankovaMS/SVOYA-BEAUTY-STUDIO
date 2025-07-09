const track = document.querySelector('.slider-wrapper__slider-track');
const btnLeft = document.querySelector('.arrow-left');
const btnRight = document.querySelector('.arrow-right');

const cardsPerPage = 3;
const cardWidth = (374 + 8) * cardsPerPage;

btnRight.addEventListener('click', () => {
    track.scrollBy({ left: cardWidth, behavior: 'smooth'});
});
btnLeft.addEventListener('click', () => {
    track.scrollBy({ left: -cardWidth, behavior: 'smooth'});
});