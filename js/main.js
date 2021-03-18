const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  
  keyboard: {
    KeyboardOptions: "true",
  }
});

const reviewsSlider= new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  effect: 'flip',
});

$('.parallax-window').parallax({
  imageSrc: 'img/newsletter-bg.jpg',
  naturalWidth: '2880',
  naturalHeight:'1913',
  speed: '0.4',
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("клик");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom_visible");
});
