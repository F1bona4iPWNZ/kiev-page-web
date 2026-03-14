var swiper = new Swiper(".swiper", {

  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,

  // breakpoints: {

  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },

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