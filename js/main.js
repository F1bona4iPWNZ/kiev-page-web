var swiper = new Swiper(".benefits__container", {
  slidesPerView: 1,
  loop: true,
  speed: 1600,
  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperTour = new Swiper(".tours__container", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: false,

  loop: true,

  grabCursor: true,
});

// rating
document.querySelectorAll(".tours__ratio").forEach((rateBlock) => {
  const reviewId = rateBlock.dataset.reviewId;
  const storageKey = `tours-rating-${reviewId}`;

  const savedRating = localStorage.getItem(storageKey);

  if (savedRating) {
    const savedInput = rateBlock.querySelector(
      `.rating__input[value="${savedRating}"]`,
    );
    if (savedInput) {
      savedInput.checked = true;
    }
  }

  rateBlock.querySelectorAll(".rating__input").forEach((input) => {
    input.addEventListener("change", () => {
      localStorage.setItem(storageKey, input.value);
    });
  });
});
