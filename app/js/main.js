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

  const mixer = mixitup('.gallery__inner', {
    load: {
        filter: '.bedroom'
    },
     animation: {
        enable: false
    }
  });
});
