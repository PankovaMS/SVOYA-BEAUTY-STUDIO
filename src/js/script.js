document.addEventListener("DOMContentLoaded", function () {
  // Слайдер One
  const sliderTrackOne = document.getElementById("sliderTrack-one");
  const prevBtnOne = document.getElementById("prevBtn-one");
  const nextBtnOne = document.getElementById("nextBtn-one");

  if (sliderTrackOne && prevBtnOne && nextBtnOne) {
    const cardsOne = Array.from(sliderTrackOne.children);
    const visibleCountOne = 3;
    let currentIndexOne = 0;

    function setCardWidthsOne() {
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
    window.addEventListener("resize", setCardWidthsOne);
  }

  // Слайдер Two
  const sliderTrackTwo = document.getElementById("sliderTrack-two");
  const prevBtnTwo = document.getElementById("prevBtn-two");
  const nextBtnTwo = document.getElementById("nextBtn-two");

  if (sliderTrackTwo && prevBtnTwo && nextBtnTwo) {
    const cardsTwo = Array.from(sliderTrackTwo.children);
    const visibleCountTwo = 3;
    let currentIndexTwo = 0;

    function setCardWidthsTwo() {
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
    window.addEventListener("resize", setCardWidthsTwo);
  }
});