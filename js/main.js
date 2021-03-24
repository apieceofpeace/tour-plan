$(document).ready(function () {
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

var menuButton = $(".menu-button");
menuButton.on("click", function () {
  $(".navbar-bottom").toggleClass("navbar-bottom_visible");
});

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);


  $(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
      closeModal(event);
    }
  });
  
  function openModal() {
    var modalDialog = $(".modal__dialog");
    var modalOverlay = $(".modal__overlay");
    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalDialog = $(".modal__dialog");
    var modalOverlay = $(".modal__overlay");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }

  //обработка форм
  $('.form').each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Enter your name",
          minlength: "The name must contain at least 2 characters",
        },
        email: {
          required: "Please enter your email address",
          email: "Addres format must be name@domain.com"
        },
        phone: {
          required: "Enter correct phone number",
          minlength: "Enter correct phone number",
        },
      },
    });
  });

  //валидация номера телефона
  $('.input-phone').ready(function () {
    $('.input-phone').mask('+7(000) 000-00-00');
  });
  AOS.init();
});