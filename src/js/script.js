document.addEventListener("DOMContentLoaded", function () {
  // === Слайдер One ===
  const sliderTrackOne = document.getElementById("sliderTrack-one");
  const prevBtnOne = document.getElementById("prevBtn-one");
  const nextBtnOne = document.getElementById("nextBtn-one");

  if (sliderTrackOne && prevBtnOne && nextBtnOne) {
    const cardsOne = Array.from(sliderTrackOne.children);
    let visibleCountOne = window.innerWidth < 768 ? 1 : (window.innerWidth < 1024 ? 2 : 3);
    let currentIndexOne = 0;

    function setCardWidthsOne() {
      visibleCountOne = window.innerWidth < 768 ? 1 : (window.innerWidth < 1024 ? 2 : 3);
      const cardWidth = sliderTrackOne.clientWidth / visibleCountOne;
      cardsOne.forEach(card => {
        card.style.minWidth = `${cardWidth}px`;
        card.style.flex = `0 0 ${cardWidth}px`;
      });
    }

    function updateSliderOne() {
      const cardWidth = sliderTrackOne.clientWidth / visibleCountOne;
      sliderTrackOne.scrollTo({
        left: currentIndexOne * cardWidth,
        behavior: "smooth"
      });
    }

    nextBtnOne.addEventListener("click", () => {
      currentIndexOne++;
      if (currentIndexOne > cardsOne.length - visibleCountOne) {
        currentIndexOne = 0;
      }
      updateSliderOne();
    });

    prevBtnOne.addEventListener("click", () => {
      currentIndexOne--;
      if (currentIndexOne < 0) {
        currentIndexOne = cardsOne.length - visibleCountOne;
      }
      updateSliderOne();
    });

    setCardWidthsOne();

    window.addEventListener("resize", () => {
      setCardWidthsOne();
      if (currentIndexOne > cardsOne.length - visibleCountOne) {
        currentIndexOne = Math.max(0, cardsOne.length - visibleCountOne);
      }
      updateSliderOne();
    });
  }

  // === Слайдер Two ===
  const sliderTrackTwo = document.getElementById("sliderTrack-two");
  const prevBtnTwo = document.getElementById("prevBtn-two");
  const nextBtnTwo = document.getElementById("nextBtn-two");

  if (sliderTrackTwo && prevBtnTwo && nextBtnTwo) {
    const cardsTwo = Array.from(sliderTrackTwo.children);
    let visibleCountTwo = window.innerWidth < 768 ? 1 : (window.innerWidth < 1024 ? 2 : 3);
    let currentIndexTwo = 0;

    function setCardWidthsTwo() {
      visibleCountTwo = window.innerWidth < 768 ? 1 : (window.innerWidth < 1024 ? 2 : 3);
      const cardWidth = sliderTrackTwo.clientWidth / visibleCountTwo;
      cardsTwo.forEach(card => {
        card.style.minWidth = `${cardWidth}px`;
        card.style.flex = `0 0 ${cardWidth}px`;
      });
    }

    function updateSliderTwo() {
      const cardWidth = sliderTrackTwo.clientWidth / visibleCountTwo;
      sliderTrackTwo.scrollTo({
        left: currentIndexTwo * cardWidth,
        behavior: "smooth"
      });
    }

    nextBtnTwo.addEventListener("click", () => {
      currentIndexTwo++;
      if (currentIndexTwo > cardsTwo.length - visibleCountTwo) {
        currentIndexTwo = 0;
      }
      updateSliderTwo();
    });

    prevBtnTwo.addEventListener("click", () => {
      currentIndexTwo--;
      if (currentIndexTwo < 0) {
        currentIndexTwo = cardsTwo.length - visibleCountTwo;
      }
      updateSliderTwo();
    });

    setCardWidthsTwo();

    window.addEventListener("resize", () => {
      setCardWidthsTwo();
      if (currentIndexTwo > cardsTwo.length - visibleCountTwo) {
        currentIndexTwo = Math.max(0, cardsTwo.length - visibleCountTwo);
      }
      updateSliderTwo();
    });
  }
});


// formValidation

let nameInput = document.querySelector('#name');
let phoneInput = document.querySelector('#phone');

nameInput.addEventListener('input', (e) => {
  let v = e.target.value;
  v = v.replace(/[^А-Яа-яЁё ]/g, ''); // только русские буквы и пробелы
  v = v.replace(/\s{2,}/g, ' ');     // 2+ пробелов заменяем на 1
  v = v.trim();                      // убираем пробелы в начале и в конце
  v = v.slice(0, 20);                // ограничиваем длину
  e.target.value = v;
});


  phoneInput.addEventListener('input', (e) => {
    let v = e.target.value;


    v = v.replace(/[^\d]/g, '');

    if (v.startsWith('7') || v.startsWith('8')) {
      v = v.slice(1);
    }


    v = '+7' + v;


    if (v.length > 12) {
      v = v.slice(0, 12);
    }

    e.target.value = v;
  });

let formButton = document.querySelector('.form-entry__call-btn');

formButton.addEventListener('click', function (e) {
    let nameValue = nameInput.value.trim();
    let phoneValue = phoneInput.value.trim();

    if (nameValue.length < 2) {
        alert('Введите имя (не менее 2-х символов)!');
        e.preventDefault();
        return;
    }

    if (phoneValue.length !== 12) {
        alert('Введите корректный номер телефона!');
        e.preventDefault();
        return;
    }
});