$(function () {
  $(".design-slider").slick({
    dots: false,
    slidesToShow: 4,
    centerMode: true,
    variableWidth: true,
    prevArrow:
      '<img src="/images/Arrow 1.svg" alt="" class="arrow arrow-left">',
    nextArrow:
      '<img src="/images/Arrow 2.svg" alt="" class="arrow arrow-left">',
  });
});
