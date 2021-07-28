$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });

  $(".top__slider").slick({
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1500
  });

  $(".contact-slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 10,
    slidesToScroll: 10
  });

  $('.article-slider-box').slick({
    // arrows: false,
    dots: false,
    infinite: true,
    // autoplay: true,
    prevArrow: '<button type="button" class="slick-ico slick-prev"><img class="article-slider-prew" src="images/blog/prew.svg" alt="ico"></button>',
    nextArrow: '<button type="button" class="slick-ico slick-next"><img class="article-slider-next" src="images/blog/next.svg" alt="ico"></button>'
  });

  const mixer = mixitup('.gallery__inner', {
    load: {
        filter: '.bedroom'
    },
     animation: {
        enable: false
    }
  });  
});

