$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1000,
    width: 550,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
    responsive: [{
      breakpoint: 1000,
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    }]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay,#consultation').fadeIn();
  });

  $('.modal__close').on('click', function () {
    $('.overlay,#consultation, #order, #thx').fadeOut();
  });


  $('.catalog-item__btn').on('click', function () {
    $('.overlay,#order').fadeIn();
  });
  function validateForm(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        }
      },
      messages: {
        name: "Вы забыли ввести ваше имя!",
        phone: "Введите ваш номер телефона",
        email: {
          required: "Введите вашу почту",
          email: "Введите почту"
        }
      }

    });
  }
  validateForm('#consultation form');
  validateForm('#order form');
  validateForm('#consultations form');


  $('input[name=phone]').mask("+7(999) 999-99-99");

  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#consultation, #order').fadeIn('slow');
      $('.overlay, #thx').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // Smooth scroll and page up

  $(window).scroll(function() {
      if ($(this).scrollTop()> 1000) {
        $('.pageup').fadeIn();
      }
      else {
        $('.pageup').fadeOut();
      }
  });

  $("a[href^='#up']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
  new WOW().init();
});