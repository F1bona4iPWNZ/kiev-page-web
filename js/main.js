var swiper = new Swiper(".benefits__container", {

  slidesPerView: 1,
  // spaceBetween: 10,
  loop:true,
  speed: 1600,
  autoplay: {
    delay: 3000,
  },

  // breakpoints: {

  //   // 320: {
  //   //   slidesPerView: 2,
  //   //   spaceBetween: 20
  //   // },

  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  
  //   640: {
  //     slidesPerView: 4,
  //     spaceBetween: 40
  //   }
  // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    const NewSwiper = new SwiperTours('.tours__slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,

  loop: true,

  grabCursor: true,

  breakpoints: {
    768: {
      centeredSlides: false,
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});